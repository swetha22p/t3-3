import React from 'react';

function swDev() {
  let swUrl = `${process.env.PUBLIC_URL}/sw.js`;
  navigator.serviceWorker.register(swUrl).then((response) => {
    console.warn('Service Worker registered:', response);
  });
}

export default swDev;
