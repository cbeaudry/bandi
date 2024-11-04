// Charger l'animation Lottie
const animation = lottie.loadAnimation({
  container: document.getElementById('animation-container'),
  renderer: 'svg',
  loop: false,
  autoplay: true,
  path: 'assets/animations/animation.json'
});

// Définir les déclencheurs
const triggers = [
  { time: 30, action: () => alert("Déclencheur à 1 seconde") },
  { time: 60, action: () => alert("Déclencheur à 2 secondes") }
];

let triggeredIndices = new Set();

animation.addEventListener('enterFrame', () => {
  const currentFrame = Math.round(animation.currentFrame);
  triggers.forEach((trigger, index) => {
    if (currentFrame >= trigger.time && !triggeredIndices.has(index)) {
      trigger.action();
      triggeredIndices.add(index);
    }
  });
});

// Enregistrer le Service Worker
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('sw.js').then(() => {
    console.log('Service Worker enregistré');
  }).catch(error => {
    console.error('Échec de l\'enregistrement du Service Worker:', error);
  });
}
