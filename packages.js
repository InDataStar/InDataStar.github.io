const packages = [
  {
    name: "Styled Flatlists",
    description: "React Native flatlists with style",
    version: "0.1.2",
    link: "https://www.npmjs.com/package/react-native-styled-flatlists"
  },
  {
    name: "Styled Toggle Switches",
    description: "React Native toggle switches with style",
    version: "0.1.1",
    link: "https://www.npmjs.com/package/react-native-styled-toggle-switches"
  }
];

const container = document.getElementById('packages');

packages.forEach(pkg => {
  const card = document.createElement('div');
  card.className = 'card';
  card.innerHTML = `
    <h2>${pkg.name}</h2>
    <p>${pkg.description}</p>
    <p>${pkg.version}</p>
    <a href="${pkg.link}" target="_blank">View on npm →</a>
  `;
  container.appendChild(card);
});
