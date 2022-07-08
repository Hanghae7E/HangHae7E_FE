const CACHE_NAME = 'pwa-task-manager';
const urlsToCache = [
  '/',
  '/completed'
];

// Install a service worker
self.addEventListener('install', event => {
  // Perform install steps
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

// Cache and return requests
self.addEventListener('fetch', event => {
    event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        // Cache hit - return response
        if (response) {
          return response;
        }
        return fetch(event.request);
      }
    )
  );
});

// Update a service worker
self.addEventListener('activate', event => {
  var cacheWhitelist = ['pwa-task-manager'];
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

self.addEventListener('push', function (event) {
    //const data = JSON.parse(event.data.text());
    const data = event.data.text()
      
    event.waitUntil( async function() {
        for (const client of await self.clients.matchAll({includeUncontrolled: true})) {
            client.postMessage(data);
        }
        self.registration.showNotification( "알람", {
            body: data
        })
    }());
});

self.addEventListener('notificationclose', function (e) {
  var notification = e.notification;
  var data = notification.data || {};
  var primaryKey = data.primaryKey;
  console.debug('Closed notification:' + primaryKey);
});

self.addEventListener('notificationclick', function(e) {
  var notification = e.notification;
  var data = notification.data || {};
  var primaryKey = data.primaryKey;
  var action = e.action;
  console.debug('Clicked notification: ' + primaryKey);
  if (action === 'close') {
    console.debug('Notification clicked and closed', primaryKey);
    notification.close();
  }else {
    console.debug('Notification actioned', primaryKey);
    clients.openWindow('/');
    notification.close();
  }
});