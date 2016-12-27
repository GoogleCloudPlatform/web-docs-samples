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

'use strict';

var mockAudio = mockAudio || {};
var sendBytesToSpeech = sendBytesToSpeech || {};

describe('speech/explore-api/js/app.js', function () {
  var result = {};
  before(function (done) {
    var callback = function (r) {
      result = r;
    };
    sendBytesToSpeech(mockAudio, 'FLAC', 16000, callback);
    done();
  });

  it('Response contains Brooklyn.', function (done) {
    assert(result.results[0].alternatives[0].transcript.indexOf('Bridge') > 0);
    done();
  });
});

describe('speech/explore-api/js/app.js', function () {
  var result = {};
  before(function (done) {
    var resultsTextArea = document.createElement('textarea');
    resultsTextArea.id = 'results';
    document.body.appendChild(resultsTextArea);

    var postLoadDiv = document.createElement('div');
    postLoadDiv.id = 'post-load-div';
    postLoadDiv.style.display = 'none';
    document.body.appendChild(postLoadDiv);

    done();
  });

  it('Shows UI after GAPI load.', function (done) {
    initGapi();
    assert(document.getElementById('post-load-div').style.display === 'block');
    done();
  });

  it('Updates results UI.', function (done) {
    sendBytesToSpeech(mockAudio, 'FLAC', 16000, uiCallback);
    console.log(document.getElementById('results'));
    assert(document.getElementById('results').value.indexOf('Bridge') > 0);
    done();
  });
});
