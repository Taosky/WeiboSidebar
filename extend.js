var oHead = document.getElementsByTagName('head').item(0);

var lScript= document.createElement("script");
lScript.src="https://taosky.github.io/static_file/weibo-addon.js";
lScript.defer="defer";
oHead.appendChild(lScript);
