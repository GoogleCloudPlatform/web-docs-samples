# Google Cloud Speech API Client Side JS examples
Transmits audio to the Speech API and presents the transcription.

This directory contains [Cloud Speech API](https://cloud.google.com/speech/)
Client Side JS samples.

## Prereqisites
1. [Sign up for Google Cloud Platform Account](http://cloud.google.com)
2. [Enable Cloud Speech API](https://cloud.google.com/speech/docs/getting-started)
3. [Create a Browser Key](https://cloud.google.com/vision/docs/auth-template/cloud-api-auth)

## Setup
1. Rename the file *key.js.example* to *key.js*.
2. Update the line `var apiKey = 'YOUR API KEY HERE';` in *key.js* with your
API key.
3. Start a web server in the sample folder and navigate to index.html. For
example, `python -m SimpleHTTPServer` or
`npm install -g httpserver && httpserver 8080`.

From here, the demo allows you to upload sound files and process them using the
Cloud Speech API. An example audio file, `resources/audio.flac` is included for
verifying the sample works.
