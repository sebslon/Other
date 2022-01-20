"use strict";

// TODO
// Be aware of global scope life time in service workers

const version = 3;
const cacheName = `ramblings-${version}`;

const urlsToCache = {
  loggedOut: [
    "/",
    "/about",
    "/contact",
    "/login",
    "/404",
    "/offline",
    "/js/blog.js",
    "/js/home.js",
    "/js/login.js",
    "/js/add-post.js",
    "/css/style.css",
    "/images/logo.gif",
    "/images/offline.png",
  ],
};

let isOnline = true;
let isLoggedIn = false;

self.addEventListener("install", onInstall);
self.addEventListener("activate", onActivated);
self.addEventListener("message", onMessage);

main().catch(console.error);

// **********************

async function main() {
  console.log(`Service worker (${version}) is started.`);

  await sendMessage({ requestStatusUpdate: true });
  await cacheLoggedOutFiles();
}

async function onInstall(evt) {
  console.log(`Service worker (${version}) is installed.`);
  self.skipWaiting();
}

async function sendMessage(msg) {
  const allClients = await clients.matchAll({ includeUncontrolled: true }); // get all clients
  return Promise.all(
    allClients.map(function clientMsg(client) {
      const chan = new MessageChannel();
      chan.port1.onmessage = onMessage; // send message port1
      return client.postMessage(msg, [chan.port2]); // receive message port2
    })
  );
}

function onMessage({ data }) {
  if (data.statusUpdate) {
    ({ isOnline, isLoggedIn } = data.statusUpdate);
    console.log(
      `Service worker (${version}) status update, isOnline: ${isOnline}, isLoggedIn: ${isLoggedIn}`
    );
  }
}

function onActivated(evt) {
  evt.waitUntil(handleActivation());
}

async function handleActivation() {
  await clearCaches();
  await clients.claim(); // The claim() method of the Clients interface allows an active service worker to set itself as the controller for all clients within its scope (MDN)
  await cacheLoggedOutFiles(/*forceReloda*/ true);
  console.log(`Service worker (${version}) is activated.`);
}

// ****************************************************************  CACHING
async function clearCaches() {
  const cacheNames = await caches.keys();
  const oldCacheNames = cacheNames.filter(function matchOldCache(cacheName) {
    if (/ramblings-\d+/.test(cacheName)) {
      let [, cacheVersion] = cacheName.match(/^ramblings-(\d+)$/);
      cacheVersion = cacheVersion != null ? Number(cacheVersion) : cacheVersion;

      return cacheVersion > 0 && cacheVersion != version;
    }
  });

  return Promise.all(
    oldCacheNames.map(function deleteCache(cacheName) {
      return caches.delete(cacheName);
    })
  );
}

async function cacheLoggedOutFiles(forceReload = false) {
  const cache = await caches.open(cacheName);

  return Promise.all(
    urlsToCache.loggedOut.map(async function requestFile(url) {
      try {
        let res;

        if (!forceReload) {
          res = await cache.match(url);
          if (res) {
            return res;
          }
        }

        let fetchOptions = {
          method: "GET",
          cache: "no-cache",
          credentials: "omit",
        };

        res = await fetch(url, fetchOptions);

        if (res.ok) {
          // await cache.put(url, res.clone());
          await cache.put(url, res);
        }
      } catch (e) {}
    })
  );
}
// **************************************************************** END CACHING CODE
