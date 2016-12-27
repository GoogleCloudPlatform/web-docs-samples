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

/**
 * Mock Google API Client for test scaffolding.
 */
var gapi = {
  client: {
    setApiKey: function (key) {
      console.log(key);
    },
    load: function (endpoint, version, complete) {
      complete(true);
    },
    speech: {
      speech: {
        syncrecognize: function (requestParams) {
          return {
            execute: function (callback) {
              callback({
                result: {
                  results: [ {
                    alternatives: [ {
                      confidence: 0.98267894,
                      transcript: 'how old is the Brooklyn Bridge'
                    } ]
                  } ]
                },
                results: [ {
                  alternatives: [ {
                    confidence: 0.98267894,
                    transcript: 'how old is the Brooklyn Bridge'
                  } ]
                } ]
              });
            }
          };
        }
      }
    }
  }
};
