// firebase-messaging-sw.js

// Firebase App ka import (aapko yeh dependency package.json mein add karni hogi)
importScripts('https://www.gstatic.com/firebasejs/9.23.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.23.0/firebase-messaging-compat.js');

// TODO: Apne Firebase config se replace karein (Yeh config aapko Firebase console ke Project settings > General > Web app setup se milegi)
const firebaseConfig = {
  apiKey: "AIzaSyAACANh3PYkvxmm8_gXhh0hw8b9m2MO8hA",
  projectId: "my-forms-app-c889f",
  messagingSenderId: "827582841942",
  appId: "1:827582841942:web:5af755bbdfab9590f7e7f7",
};

// Initialize the Firebase app in the service worker
firebase.initializeApp(firebaseConfig);

// Retrieve firebase messaging
const messaging = firebase.messaging();

// Background messages ke liye handler (Agar aapko koi background message aata hai)
messaging.onBackgroundMessage(function(payload) {
    console.log('[firebase-messaging-sw.js] Received background message ', payload);

    const notificationTitle = payload.notification.title;
    const notificationOptions = {
        body: payload.notification.body,
        icon: '/assets/icon/app_logo.png' // Aapki app ka icon path
    };

    return self.registration.showNotification(notificationTitle, notificationOptions);
});