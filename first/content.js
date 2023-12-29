document.addEventListener("mouseover", function (event) {
  // Log the DOM data to the console
  console.log("Hovered element:", event);

  // Send the data to the background script  
  chrome.runtime.sendMessage({ data: event.target.textContent });
  // You can send additional data if needed
});
