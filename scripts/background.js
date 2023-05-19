if (typeof browser === "undefined") {
    var browser = chrome;
}

browser.action.onClicked.addListener(async (tab) => {
    try {
      await browser.scripting.executeScript({
        target: {
          tabId: tab.id,
        },
        files: ['scripts/targetSize.js'],
      });
    } catch (err) {
      console.error(`failed to execute script: ${err}`);
    }
  });
