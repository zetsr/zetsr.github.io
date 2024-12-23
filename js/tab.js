// 切换选卡功能
function initTabs() {
    const homeTab = document.getElementById('home-tab');
    const apiTab = document.getElementById('api-tab');
    
    homeTab.addEventListener('click', () => {
      setActiveTab(homeTab);
      loadContent('home');
    });
  
    apiTab.addEventListener('click', () => {
      setActiveTab(apiTab);
      loadContent('api');
    });
  }
  
  function setActiveTab(activeTab) {
    const tabs = document.querySelectorAll('.tab-button');
    tabs.forEach(tab => tab.classList.remove('active'));
    activeTab.classList.add('active');
  }
  
  document.addEventListener('DOMContentLoaded', initTabs);
  