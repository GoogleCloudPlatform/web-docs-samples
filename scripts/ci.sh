#!/usr/bin/env bash
# Copyright 2016 Google Inc. All Rights Reserved.
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#     http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.

set -e

# Decrypt secrets if not on an external PR.
if [[ $TRAVIS_SECURE_ENV_VARS == "true" ]]; then
  openssl aes-256-cbc -k "$secrets_password" -in secrets.tar.enc -out secrets.tar -d;
  tar xvf secrets.tar;
  npm run test
else
  echo "Running from external PR, just run lint."
  npm run lint
fi

