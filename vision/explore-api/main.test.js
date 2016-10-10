// Copyright 2016, Google, Inc.
// Licensed under the Apache License, Version 2.0 (the "License")
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//    http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

'use strict';

describe('vision/explore-api/main.js', function () {
  this.timeout(60000);

  before(function (done) {
    var fileform = document.createElement('form');
    fileform.id = 'fileform';
    document.body.appendChild(fileform);

    var typeSelect = document.createElement('select');
    typeSelect.name = 'type';
    fileform.appendChild(typeSelect);

    var labelOption = document.createElement('option');
    labelOption.value = 'LABEL_DETECTION';
    labelOption.textContent = labelOption.value;
    typeSelect.appendChild(labelOption);

    var results = document.createElement('code');
    results.id = 'results';
    document.body.appendChild(results);

    done();
  });

  it('Should label cats.', function (done) {
    processFile({target: {result: window.CAT_IMAGE_DATA_URI}});
    document.addEventListener('results-displayed', function (evt) {
      assert(evt.results.indexOf('"description": "cat"') >= 0);
      done();
    });
  });
});
