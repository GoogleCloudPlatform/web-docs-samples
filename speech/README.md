# Speech Web Demo
Transmits audio to the Speech API and presents the transcription.

# Running
1. Replace YOUR_API_KEY in index.html with your developer key from the
  [Cloud Developer Console](https://console.developer.google.com).
2. Start a web server from the sample folder, for example:
```
python -m SimpleHTTPServer 8000
```
3. Navigate to the web server and select a file encoded in flac from your
  computer.
4. After you click the **Transcribe** button, the file will be uploaded, sent
  to the Speech API service and the top result will be appended to the
  result area.
