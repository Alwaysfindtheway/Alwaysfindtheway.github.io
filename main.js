const contentContainer = document.getElementById('content-container');

fetch('https://aicg-moxxie-proxy.hf.space/')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.text();
  })
  .then(text => {
    contentContainer.innerHTML = text;
  })
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
  });
