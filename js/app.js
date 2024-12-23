// 根据 URL 动态加载内容
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
  
  // 从 URL 加载内容（支持自定义内容）
  function loadContentFromURL() {
    const urlParams = new URLSearchParams(window.location.search);
    const path = window.location.pathname.split('/').pop();  // 获取URL路径的最后部分
    
    // 如果路径匹配特定规则，例如 api/x.lua
    if (path.match(/^api\/.*\.lua$/)) {
      // 示例: 对于路径 api/x.lua，我们可以动态加载相应内容
      fetch(`components/${path}`)
        .then(response => response.text())
        .then(data => {
          document.getElementById('content').innerHTML = data;
        })
        .catch(err => {
          document.getElementById('content').innerHTML = `<p>无法加载文件 ${path}: ${err}</p>`;
        });
    } else if (path === 'home') {
      loadContent('home');
    } else if (path === 'api') {
      loadContent('api');
    } else {
      loadContent('home');  // 默认加载主页
    }
  }
  
  document.addEventListener('DOMContentLoaded', loadContentFromURL);
  