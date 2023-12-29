async function sayHello() {
  let [tab] = await chrome.tabs.query({ active: true });
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    func: () => {
      alert("HELLO FROM MY EXTENSION!");
    },
  });
}

document.getElementById("myButton").addEventListener("click", sayHello);
