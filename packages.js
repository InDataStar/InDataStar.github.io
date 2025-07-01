const packages = [
  {
    name: "Styled Flatlists",
    description: "React Native flatlists with style",
    version: "0.1.2",
    link: "https://www.npmjs.com/package/react-native-styled-flatlists",
    img: [
      { title: 'Pulse Enter List', src: 'gifs/PulseInTiming.gif' },
      { title: 'Slide In List', src: 'gifs/horizontalslideinlist.gif' },
      { title: 'Slide In List', src: 'gifs/verticalslideinlist .gif' },
    ]
  },
  {
    name: "Styled Toggle Switches",
    description: "React Native toggle switches with style",
    version: "0.1.2",
    link: "https://www.npmjs.com/package/react-native-styled-toggle-switches",
    img: [
      { title: 'Basic Slide Switch', src: 'gifs/slideswitch1.gif' },
      { title: 'Slide Switch with Text', src: 'gifs/slideswitchwithtext.gif' }
    ]
  },
  {
    name: "React Native Styled Badges",
    description: "React Native toggle switches with style",
    version: "0.1.0",
    link: "https://www.npmjs.com/package/react-native-styled-badges",
    img: [
      { title: 'Basic Badge', src: 'img/badgeStack.png' }, 
    ]
  }
];




const container = document.getElementById('packages');

packages.forEach(pkg => {
  const card = document.createElement('div');
  card.className = 'card';

  let imagesHTML = '';
  if (pkg.img && Array.isArray(pkg.img)) {
    imagesHTML = pkg.img.map(image => `
      <div class="gif-container">
        <h3>${image.title}</h3>
        <img src="${image.src}" alt="${image.title}" />
      </div>
    `).join('');
  }

  card.innerHTML = `
    <h2>${pkg.name}</h2>
    <p>${pkg.description}</p>
    <p>Version: ${pkg.version}</p>
    ${imagesHTML}
    <a href="${pkg.link}" target="_blank">View on npm →</a>
  `;

  container.appendChild(card);
});