const menuIcon = document.querySelector('.menu');
const menuVet = document.querySelector('#logo');
const navigation = document.querySelector('nav');

menuIcon.onclick = () => navigation.classList.toggle('active');
menuVet.onclick = () => navigation.classList.toggle('active');
