/*window.addEventListener('beforeinstallprompt', (e) => {
    e.prompt();
    e.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === 'accepted') {
            console.log('PWA installed');
        } else {
            console.log('PWA rejected');
        }
    });
});*/
function isIos() {
    return /iphone|ipad|ipod/.test(navigator.userAgent.toLowerCase());
}

function isInStandaloneMode() {
    return ('standalone' in window.navigator) && (window.navigator.standalone);
}

if (isIos() && !isInStandaloneMode()) {
    const iosInstallMessage = document.getElementById('ios-install-message');
    iosInstallMessage.style.display = 'block';
}

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/service-worker.js')
    .then(function(registration) {
        console.log('Service Worker registered:', registration.scope);
    })
    .catch(function(error) {
        console.log('Service Worker  failed:', error);
    });
}
