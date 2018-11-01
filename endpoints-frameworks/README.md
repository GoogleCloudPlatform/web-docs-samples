# Endpoints Frameworks Client

This example shows how to use Google Sign-In to make an authenticated request
to the Endpoints Frameworks sample code running on the App Engine
standard environment.

To run the sample JavaScript app:

* You must have deployed the Endpoints Frameworks sample API. For details on
  deploying the sample API, see the following:

    * [Java: Getting Started with Endpoints Frameworks](https://cloud.google.com/endpoints/docs/frameworks/java/get-started-frameworks-java)
    * [Python: Getting Started with Endpoints Frameworks](https://cloud.google.com/endpoints/docs/frameworks/python/get-started-frameworks-python)

* You need a web server on your local computer to serve the sample `index.html`
  file, such as Python 2.7's `SimpleHTTPServer`, but you can use any web server.

* In `main.js`, replace `YOUR_PROJECT_ID` with the ID of the project that you
  used for the Endpoints Frameworks sample API.

* Get a [client ID](https://support.google.com/googleapi/answer/6158849?hl=en)
  and copy it to the clipboard.

* In `main.js`, replace `YOUR_CLIENT_ID` with the  client ID that you just
  created.

* Add your client ID to the Endpoints Frameworks sample API:

    * Java: Replace `YOUR_OAUTH_CLIENT_ID` with your client ID in the `Echo.java`
      file included in the sample.
    * Python: Replace `your-oauth-client-id.com` with your client ID in the
      `main.py` file included in the sample.

Additional details for running the sample JavaScript app will be in the
Endpoints Frameworks documentation soon. We'll update this README with links
to the Java and Python versions of the doc.

To learn more about Google Sign-In, see [Google Sign-In JavaScript client
reference](https://developers.google.com/identity/sign-in/web/reference).
