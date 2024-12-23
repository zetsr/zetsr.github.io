// 动态加载页面内容
function loadContent(contentType) {
    const contentDiv = document.getElementById('content');
  
    if (contentType === 'home') {
      fetch('components/home.html')
        .then(response => response.text())
        .then(data => contentDiv.innerHTML = data);
    } else if (contentType === 'api') {
      fetch('components/api.html')
        .then(response => response.text())
        .then(data => contentDiv.innerHTML = data);
    } else {
      contentDiv.innerHTML = `<p>无法加载该页面：${contentType}</p>`;
    }
  }
  
  // 从 URL 加载内容
  function loadContentFromURL() {
    const path = window.location.pathname.split('/').pop();  // 获取URL路径的最后部分
  
    if (path === 'home') {
      loadContent('home');
    } else if (path === 'api') {
      loadContent('api');
    } else {
      loadContent('home');  // 默认加载主页
    }
  }
  
  document.addEventListener('DOMContentLoaded', loadContentFromURL);
  