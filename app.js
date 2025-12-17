const vibePalettes = [
  {
    name: 'Neon Daydream',
    background: ['#11001c', '#25004a'],
    accent: '#ff8bd1',
    accentB: '#68fff0',
    mantra: 'The void hums in cotton-candy wavelengths.'
  },
  {
    name: 'Poolside Midnight',
    background: ['#00102f', '#012f36'],
    accent: '#55ffe5',
    accentB: '#66a8ff',
    mantra: 'You are now 87% pool floatie.'
  },
  {
    name: 'Marmalade Eclipse',
    background: ['#2d0101', '#562900'],
    accent: '#ff9820',
    accentB: '#ffc15b',
    mantra: 'Peel reality. Taste the sun jam.'
  },
  {
    name: 'Retro Aurora',
    background: ['#031019', '#024059'],
    accent: '#00f5a0',
    accentB: '#00d9f5',
    mantra: 'Somewhere a synth pad sighs for you.'
  },
  {
    name: 'Bubblegum Static',
    background: ['#2f0035', '#09001a'],
    accent: '#f7e5ff',
    accentB: '#ff82c3',
    mantra: 'Recalibrating nonsense antennas... done.'
  },
  {
    name: 'Afterglow Slush',
    background: ['#16002d', '#001f37'],
    accent: '#ff5f6d',
    accentB: '#ffc371',
    mantra: 'Please keep hands inside the vibe slushie.'
  }
];

const orb = document.querySelector('.vibe-orb');
const mantraEl = document.getElementById('mantra');
const button = document.getElementById('vibe-btn');
const glow = document.querySelector('.glow');
const template = document.getElementById('spark-template');
let lastIndex = -1;

const randomBetween = (min, max) => Math.random() * (max - min) + min;

function getRandomPalette() {
  let index = Math.floor(Math.random() * vibePalettes.length);
  if (index === lastIndex) {
    index = (index + 1) % vibePalettes.length;
  }
  lastIndex = index;
  return vibePalettes[index];
}

function setPalette(palette) {
  const root = document.documentElement;
  root.style.setProperty('--bg-a', palette.background[0]);
  root.style.setProperty('--bg-b', palette.background[1]);
  root.style.setProperty('--accent', palette.accent);
  root.style.setProperty('--accent-b', palette.accentB);
  mantraEl.textContent = palette.mantra;
  orb?.setAttribute('data-vibe', palette.name);
  glow.style.background = `radial-gradient(circle, ${palette.accent}55, transparent 60%)`;
}

function spawnSpark(x, y, color) {
  if (!template?.content) return;
  const spark = template.content.firstElementChild.cloneNode(true);
  spark.style.left = `${x}px`;
  spark.style.top = `${y}px`;
  spark.style.background = `radial-gradient(circle, ${color}, transparent)`;
  document.body.appendChild(spark);
  setTimeout(() => spark.remove(), 1400);
}

function triggerVibe(x = window.innerWidth / 2, y = window.innerHeight / 2) {
  const palette = getRandomPalette();
  setPalette(palette);
  mantraEl.classList.remove('flash');
  void mantraEl.offsetWidth;
  mantraEl.classList.add('flash');
  const sparks = Math.floor(randomBetween(6, 12));
  for (let i = 0; i < sparks; i += 1) {
    const offsetX = randomBetween(-80, 80);
    const offsetY = randomBetween(-40, 40);
    const jitter = randomBetween(-300, 300);
    setTimeout(() => {
      spawnSpark(x + offsetX, y + offsetY, palette.accent);
    }, i * 30 + jitter * 0.01);
  }
}

button?.addEventListener('click', () => triggerVibe());

document.addEventListener('pointerdown', (event) => {
  if (event.target === button) {
    return;
  }
  triggerVibe(event.clientX, event.clientY);
});

document.addEventListener('keydown', (event) => {
  if ([' ', 'Enter'].includes(event.key)) {
    event.preventDefault();
  }
  triggerVibe();
});

triggerVibe();
