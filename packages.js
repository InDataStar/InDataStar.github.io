const packages = [
  {
    name: "cool-lib",
    description: "A cool utility library for doing cool things.",
    link: "https://www.npmjs.com/package/cool-lib"
  },
  {
    name: "form-handler",
    description: "A simple form handler for modern web apps.",
    link: "https://www.npmjs.com/package/form-handler"
  },
  {
    name: "color-scheme-switcher",
    description: "Easily switch between light and dark themes.",
    link: "https://www.npmjs.com/package/color-scheme-switcher"
  }
];

const container = document.getElementById('packages');

packages.forEach(pkg => {
  const card = document.createElement('div');
  card.className = 'card';
  card.innerHTML = `
    <h2>${pkg.name}</h2>
    <p>${pkg.description}</p>
    <a href="${pkg.link}" target="_blank">View on npm →</a>
  `;
  container.appendChild(card);
});
