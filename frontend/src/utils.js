export function clearCacheAndReload() {
  if ('caches' in window) {
    caches.keys().then((names) => {
      names.forEach(name => {
        caches.delete(name);
      });
    });
  }
  
  localStorage.clear();
  sessionStorage.clear();
  window.location.reload(true);
}

export function checkAndClearCache() {
  const lastCacheClear = localStorage.getItem('lastCacheClear');
  const now = new Date().getTime();
  
  if (!lastCacheClear || now - parseInt(lastCacheClear) > 3600000) {
    clearCacheAndReload();
    localStorage.setItem('lastCacheClear', now.toString());
  }
}
