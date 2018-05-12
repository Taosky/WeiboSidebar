browser.browserAction.onClicked.addListener(handleClick);

function handleClick(){
    const url = 'https://m.weibo.cn/beta';
    browser.sidebarAction.open();
    browser.sidebarAction.setPanel({panel: url});
}