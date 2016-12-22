/**
 *
 * Copyright 2016 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

function initGapi () {
  console.log('loading gapi');
  gapi.client.setApiKey(apiKey);

  // Load the speech client library and present the demo UI
  gapi.client.load('speech', 'v1beta1', function () {
    document.getElementById('post-load-div').style.display = 'block';
  });

}

/**
 * Used to send file to speech API when user clicks transcribe button.
 */
function handleFile() {
  var selectedFile = $('#inputFile')[0].files[0];
  sendBlobToSpeech(selectedFile, 'flac', 16000);
}

/**
 * Sends a file blob to the speech API endpoint.
 *
 * @param blob the Blob to send.
 * @param encoding the encoding type (e.g. 'flac' or 'LINEAR16').
 * @param rate the encoding rate, ideally 16000.
 */
function sendBlobToSpeech (blob, encoding, rate) {
  var speechSender = new FileReader();
  speechSender.addEventListener('loadend', function () {
    gapi.client.speech.speech.syncrecognize({
      config: {
        encoding: encoding,
        sampleRate: rate
      },
      audio: {
        content: btoa(speechSender.result)
      }
    }).execute(function (r) {
      if (r.results && r.results[0]) {
        // Append top result
        $('#results').val((r.results[0].alternatives[0].transcript) + '\n-\n' +
            $('#results').val());
      }
    });
  });
  speechSender.readAsBinaryString(blob);
}
