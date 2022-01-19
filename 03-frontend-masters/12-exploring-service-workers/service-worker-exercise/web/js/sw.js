"use strict";

// TODO
// Be aware of global scope life time in service workers

const version = 1;

self.addEventListener("install", onInstall);
self.addEventListener("activate", onActivated);

main().catch(console.error);

// **********************

async function main() {
  console.log(`Service worker (${version}) is started.`);
}

async function onInstall(evt) {
  console.log(`Service worker (${version}) is installed.`);
  self.skipWaiting();
}

function onActivated(evt) {
  evt.waitUntil(handleActivation());
}

async function handleActivation() {
  await clients.claim(); // The claim() method of the Clients interface allows an active service worker to set itself as the controller for all clients within its scope (MDN)
  console.log(`Service worker (${version}) is activated.`);
}
