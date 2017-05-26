import './style/style.scss';
import './utils/platform.js';

const loading = document.getElementsByClassName('loading-wrapper')[0];

function init() {
    console.log('=== init ===');
    setTimeout(() => {
        loading.style.display = 'none';
    }, 3000);
}

window.onload = () => {
    init();
};
