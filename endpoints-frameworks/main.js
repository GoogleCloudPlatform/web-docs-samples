// START load_auth2_library]
function loadAuthClient() {
 gapi.load('auth2', initGoogleAuth);
}
// [END load_auth2_library]

// [START init_google_auth]
function initGoogleAuth() {
 gapi.auth2.init({
   client_id: 'YOUR_CLIENT_ID',
   scope: 'https://www.googleapis.com/auth/userinfo.email'
 }).then(() => {
   document.getElementById('sign-in-btn').disabled = false;
 }).catcherr => {
   console.log(err);
 })
}
// [END init_google_auth]

// [START user_signin]
function signIn() {
 gapi.auth2.getAuthInstance().signIn().then(() => {
   document.getElementById('sign-in-btn').hidden = true;
   document.getElementById('sign-out-btn').hidden = false;
   document.getElementById('send-request-btn').disabled = false;
 }).catch(err => {
   console.log(err);
 })
}
// [END user_signin]

// [START send_sample_request]
function sendSampleRequest() {
 var projectId = 'YOUR_PROJECT_ID';
 var user = gapi.auth2.getAuthInstance().currentUser.get();
 var idToken = user.getAuthResponse().id_token;
 var endpoint = `https://${projectId}.appspot.com/_ah/api/echo/v1/email`;
 var xhr = new XMLHttpRequest();
 xhr.open("GET", endpoint + '?access_token=' + encodeURIComponent(idToken));
 xhr.onreadystatechange = function () {
   if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
     alert(xhr.responseText);
   }
 }
 xhr.send();
}
// [END send_sample_request]

// [START user_signout]
function signOut() {
 gapi.auth2.getAuthInstance().signOut().then(() => {
   document.getElementById('sign-in-btn').hidden = false;
   document.getElementById('sign-out-btn').hidden = true;
   document.getElementById('send-request-btn').disabled = true;
 }).catch(err => {
   console.log(err);
 })
}
// [END user_signout]

