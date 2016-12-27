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
var apiKey = apiKey || {};
var gapi = gapi || {};

/* eslint-disable no-unused-vars */
function initGapi () {
  console.log('loading gapi');
  gapi.client.setApiKey(apiKey);

  // Load the speech client library and present the demo UI
  gapi.client.load('speech', 'v1beta1', function () {
    document.getElementById('post-load-div').style.display = 'block';
  });
}
/* eslint-enable no-unused-vars */

/**
 * Used to send file to speech API when user clicks transcribe button.
 */
/* eslint-disable no-unused-vars */
function handleFile () {
  var selectedFile = $('#inputFile')[0].files[0];
  sendBlobToSpeech(selectedFile, 'flac', 16000);
}
/* eslint-enable no-unused-vars */

/**
 * Callback used to update sample UI when transcription completes.
 *
 * @param r The data from the API call containing an array of transcription
 *          results.
 */
function uiCallback (r) {
  if (r.results && r.results[0]) {
    // Append top result
    document.getElementById('results').value =
        r.results[0].alternatives[0].transcript + '\n-\n' +
        document.getElementById('results').value;
  }
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
    /* eslint-disable no-undef */
    sendBytesToSpeech(btoa(speechSender.result), encoding, rate, uiCallback);
    /* eslint-enable no-undef */
  });
  speechSender.readAsBinaryString(blob);
}

/**
 * Sends post data to the speech API endpoint.
 *
 * @param bytes The raw data to send.
 * @param encoding The encoding for the data transcribe.
 * @param rate The rate that the data is encoded at.
 * @param callback A function to send result data to.
 */
function sendBytesToSpeech (bytes, encoding, rate, callback) {
  gapi.client.speech.speech.syncrecognize({
    config: {
      encoding: encoding,
      sampleRate: rate
    },
    audio: {
      content: bytes
    }
  }).execute(function (r) {
    callback(r);
  });
}
