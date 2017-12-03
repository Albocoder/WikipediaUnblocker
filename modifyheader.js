chrome.webRequest.onBeforeRequest.addListener(
  function(details) {
	url = details.url.replace("wikipedia","0wikipedia");
    return { redirectUrl: url };
  },
  {urls: ["<all_urls>"]},
  ["blocking"]
);
//kudos to author of the icon from freepik
