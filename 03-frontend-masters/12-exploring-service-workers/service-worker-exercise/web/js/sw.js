"use strict";

// TODO
// Be aware of global scope life time in service workers

const version = 2;
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
  await clients.claim(); // The claim() method of the Clients interface allows an active service worker to set itself as the controller for all clients within its scope (MDN)
  console.log(`Service worker (${version}) is activated.`);
}
