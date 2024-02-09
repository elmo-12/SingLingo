var themeToggleDarkIcon = document.getElementById('theme-toggle-dark-icon');
var themeToggleLightIcon = document.getElementById('theme-toggle-light-icon');

// Change the icons inside the button based on previous settings
if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    themeToggleLightIcon.classList.remove('hidden');
} else {
    themeToggleDarkIcon.classList.remove('hidden');
}

var themeToggleBtn = document.getElementById('theme-toggle');

themeToggleBtn.addEventListener('click', function () {

    // toggle icons inside button
    themeToggleDarkIcon.classList.toggle('hidden');
    themeToggleLightIcon.classList.toggle('hidden');

    // if set via local storage previously
    if (localStorage.getItem('color-theme')) {
        if (localStorage.getItem('color-theme') === 'light') {
            document.documentElement.classList.add('dark');
            localStorage.setItem('color-theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('color-theme', 'light');
        }

        // if NOT set via local storage previously
    } else {
        if (document.documentElement.classList.contains('dark')) {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('color-theme', 'light');
        } else {
            document.documentElement.classList.add('dark');
            localStorage.setItem('color-theme', 'dark');
        }
    }

});

// OJOS
const eyeSlashIcon = document.getElementById('eyeSlashIcon');
const eyeIcon = document.getElementById('eyeIcon');
const passwordInput = document.getElementById('passwordInput');

eyeSlashIcon.addEventListener('click', function () {
    eyeSlashIcon.classList.add('hidden');
    eyeIcon.classList.remove('hidden');
    passwordInput.type = 'text';
});

eyeIcon.addEventListener('click', function () {
    eyeIcon.classList.add('hidden');
    eyeSlashIcon.classList.remove('hidden');
    passwordInput.type = 'password';
});

// Variable para mantener un registro del último enlace activo
var ultimoEnlaceActivo = null;

window.onload = function () {
    var primerEnlace = document.querySelector('ul li:first-child a');
    primerEnlace.classList.remove('text-white');
    primerEnlace.classList.add('text-blue-700');
    ultimoEnlaceActivo = primerEnlace;
};

function toggleDiv(divId, enlace) {
    var divs = document.getElementsByClassName('content');

    // Cambiar color del texto del enlace activo anteriormente
    if (ultimoEnlaceActivo !== null) {
        ultimoEnlaceActivo.classList.remove('text-blue-700');
        ultimoEnlaceActivo.classList.add('text-white');
    }

    // Cambiar color del texto del enlace actual
    enlace.classList.remove('text-white');
    enlace.classList.add('text-blue-700');

    // Registrar el enlace actual como el último enlace activo
    ultimoEnlaceActivo = enlace;

    // Mostrar/ocultar los divs según el divId proporcionado
    for (var i = 0; i < divs.length; i++) {
        if (divs[i].id === divId) {
            divs[i].classList.remove('hidden');
        } else {
            divs[i].classList.add('hidden');
        }
    }
}