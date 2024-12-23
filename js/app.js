// 用于初始化并加载相应内容
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
    }
  }
  
  document.addEventListener('DOMContentLoaded', () => {
    loadContent('home');  // 默认加载主页
  });
  