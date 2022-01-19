(function Blog() {
  "use strict";

  let offlineIcon;
  let isOnline = "onLine" in navigator ? navigator.onLine : true;
  let usingSW = "serviceWorker" in navigator;
  let swRegistration;
  let svcworker;

  const isLoggedIn = /isLoggedIn=1/.test(document.cookie.toString() || "");

  document.addEventListener("DOMContentLoaded", ready, false);

  initServiceWorker().catch(console.error);
  // **********************************

  function ready() {
    offlineIcon = document.getElementById("connectivity-status");

    if (!isOnline) {
      offlineIcon.classList.remove("hidden");
    }

    window.addEventListener("online", function online() {
      offlineIcon.classList.add("hidden");
      isOnline = true;
      sendStatusUpdate();
    });

    window.addEventListener("offline", function offline() {
      offlineIcon.classList.remove("hidden");
      isOnline = false;
      sendStatusUpdate();
    });
  }

  async function initServiceWorker() {
    swRegistration = await navigator.serviceWorker.register("/js/sw.js", {
      updateViaCache: "none",
    }); // start up and access service worker

    svcworker =
      swRegistration.installing ||
      swRegistration.waiting ||
      swRegistration.active;
    sendStatusUpdate(svcworker);

    navigator.serviceWorker.addEventListener(
      "controllerchange",
      function onController() {
        svcworker = navigator.serviceWorker.controller;
        sendStatusUpdate(svcworker);
      }
    );

    navigator.serviceWorker.controller.addEventListener("message", onSWMessage);
  }

  // **************************

  function onSWMessage(evt) {
    const { data } = evt;

    if (data.requestStatusUpdate) {
      console.log("Received status update request from SW, responding...");
      sendStatusUpdate(evt.ports && evt.ports[0]);
    }
  }

  function sendStatusUpdate(target) {
    sendSWMessage({ statusUpdate: { isOnline, isLoggedIn } }, target);
  }

  function sendSWMessage(msg, target) {
    if (target) {
      target.postMessage(msg);
    } else if (svcworker) {
      svcworker.postMessage(msg);
    } else {
      navigator.serviceWorker.controller.postMessage(msg);
    }
  }
})();
