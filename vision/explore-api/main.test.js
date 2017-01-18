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

  /* eslint-disable no-undef */
  beforeEach(function () {
    jasmine.Ajax.install();
  });

  afterEach(function () {
    jasmine.Ajax.uninstall();
  });
  /* eslint-enable no-undef */

  it('Should label cats.', function (done) {
    document.addEventListener('results-displayed', function (evt) {
      assert(evt.results.indexOf('"description": "cat"') >= 0);
      done();
    });

    processFile({target: {result: window.CAT_IMAGE_DATA_URI}});

    /* eslint-disable no-undef */
    var request = jasmine.Ajax.requests.mostRecent();
    /* eslint-enable no-undef */

    var response = {
      'responses': [
        {
          'labelAnnotations': [
            {
              'mid': '/m/01yrx',
              'description': 'cat',
              'score': 0.9256294
            },
            {
              'mid': '/m/04rky',
              'description': 'mammal',
              'score': 0.9081582
            },
            {
              'mid': '/m/01l7qd',
              'description': 'whiskers',
              'score': 0.79939437
            },
            {
              'mid': '/m/07k6w8',
              'description': 'small to medium sized cats',
              'score': 0.66373956
            },
            {
              'mid': '/m/0307l',
              'description': 'cat like mammal',
              'score': 0.6595098
            },
            {
              'mid': '/m/01m3tw',
              'description': 'animal shelter',
              'score': 0.5288319
            }
          ]
        }
      ]
    };

    request.respondWith({
      'status': 200,
      'responseText': JSON.stringify(response)
    });

    var params = JSON.parse(request.params);

    // Check request parameters are set
    assert(params.requests[0].image.content.length > 1024);
    assert(params.requests[0].features[0].maxResults > 0);
  });
});
