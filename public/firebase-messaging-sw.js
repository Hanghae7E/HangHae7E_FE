importScripts('https://www.gstatic.com/firebasejs/8.2.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.2.0/firebase-messaging.js');

// Initialize the Firebase app in the service worker by passing the generated config
const firebaseConfig = {
    apiKey: 'AIzaSyDsmkm296DAmXyvQSBek-PEe8nR-YjJ-80',
    authDomain: 'huddleup-7eaba.firebaseapp.com',
    projectId: 'huddleup-7eaba',
    storageBucket: 'huddleup-7eaba.appspot.com',
    messagingSenderId: '348760925983',
    appId: '1:348760925983:web:584aa69d1ccbb6b25e722a',
    measurementId: 'G-7VWJX0X5QL',
  };
firebase.initializeApp(firebaseConfig);

// Retrieve firebase messaging
const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
  console.log('Received background message ', payload);
 // Customize notification here
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
  };

  self.registration.showNotification(notificationTitle,
    notificationOptions);
});