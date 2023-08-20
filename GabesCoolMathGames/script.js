document.addEventListener('DOMContentLoaded', function () {
   
    const html = document.createElement('html');
    const head = document.createElement('head');
    const title = document.createElement('title');
    title.textContent = 'Gabes Math Tutorials';
    const body = document.createElement('body');
  

    const style = document.createElement('style');
    style.textContent = `
      body, button { margin: 0; font-family: Arial, sans-serif; }
      body { background: #333; color: #ff0000; overflow: hidden; }
      .header, .sidebar { background: #222; color: #ff0000; padding: 15px; }
      .header h1 { margin: 0; font-size: 32px; }
      .sidebar { position: fixed; top: 80px; left: 20px; width: 200px; }
      .nav-link { display: block; margin-bottom: 10px; font-size: 16px; text-decoration: none; transition: color 0.3s; }
      .nav-link:hover { color: #ccc; }
      .iframe-container { position: fixed; top: 80px; left: 240px; right: 20px; bottom: 20px; box-shadow: 0 0 20px rgba(0, 0, 0, 0.3); border-radius: 15px; overflow: hidden; }
      iframe { border: none; width: 100%; height: 100%; }
      .favicon-button, .name-button { display: block; margin: 20px auto; padding: 10px 20px; background: #ff0000; color: white; border: none; border-radius: 5px; cursor: pointer; transition: background 0.3s; }
      .favicon-button:hover, .name-button:hover { background: #8c0000; }
      .favicon-selector, .name-input { display: none; background: #222; color: #ff0000; border: none; border-radius: 5px; padding: 5px; margin-top: 5px; font-size: 14px; }
      .favicon-selector option { background: #222; color: #ff0000; }
    `;
  
   
    const header = document.createElement('div');
    header.className = 'header';
    const headerText = document.createElement('h1');
    headerText.textContent = 'Gabes Math Tutorials';
    header.appendChild(headerText);
  
    const sidebar = document.createElement('div');
    sidebar.className = 'sidebar';
    const navLink = document.createElement('a');
    navLink.className = 'nav-link';
    navLink.href = '#tinfoil-proxy';
    navLink.textContent = 'TinF0il Proxy';
    navLink.onclick = function () {
      loadPage('https://order.fastservices.buzz/index.html');
    };
    sidebar.appendChild(navLink);
  
    const iframeContainer = document.createElement('div');
    iframeContainer.className = 'iframe-container';
    const iframe = document.createElement('iframe');
    iframe.id = 'proxyFrame';
    iframeContainer.appendChild(iframe);
  
 
    body.appendChild(header);
    body.appendChild(sidebar);
    body.appendChild(iframeContainer);
  

    head.appendChild(style);
  
    html.appendChild(head);
    html.appendChild(body);
  
    
    document.documentElement.innerHTML = '';
    document.documentElement.appendChild(html);
  
    
    function loadPage(url) {
      document.getElementById('proxyFrame').src = url;
    }
  });
  
