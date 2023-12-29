chrome.runtime.onConnect.addListener((port) => {
  console.assert(port.name === "content-script");

  port.onMessage.addListener((msg) => {
    console.log("Data received from content script:", msg.data);
    // You can perform additional actions here based on the received data
    // If needed, you can send a response back to the content script
    // port.postMessage({ response: "Response from background script" });
  });
});
