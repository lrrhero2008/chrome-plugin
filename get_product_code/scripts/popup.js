$(function(){
  $('.getDcp h2').click(function(){
    executeScriptToCurrentTab("console.log(document.getElementById('information').innerText)")
    console.log('获取Description代码:'+ executeScriptToCurrentTab("document.getElementById('information').innerText"))


  })
  // 获取当前选项卡ID
  function getCurrentTabId(callback)
  {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs)
    {
      if(callback) callback(tabs.length ? tabs[0].id: null);
    });
  }
  // 向content-script注入JS片段
  function executeScriptToCurrentTab(code)
  {
    getCurrentTabId((tabId) =>
    {
      chrome.tabs.executeScript(tabId, {code: code});
    });
  }

})