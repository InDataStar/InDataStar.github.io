const container = document.getElementById('packages');

fetch('./packages.json')
  .then(res => res.json())
  .then(packages => {
    packages.forEach(pkg => {
      const card = document.createElement('div');
      card.className = 'card';

      const imagesHTML = (pkg.img || []).map(image => `
        <div class="gif-container">
          <h3>${image.title}</h3>
          <img src="${image.src}" alt="${image.title}">
        </div>
      `).join('');

      card.innerHTML = `
        <h2>${pkg.name}</h2>
        <p>${pkg.description}</p>
        <p>Version: ${pkg.version}</p>
        ${imagesHTML}
        <a href="${pkg.link}" target="_blank">View on npm →</a>
      `;

      container.appendChild(card);
    });
  })
  .catch(err => {
    console.error(err);
    container.textContent = 'Failed to load packages.';
  });
