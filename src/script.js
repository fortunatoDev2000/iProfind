import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";



document.getElementById('abrir-janela-local').addEventListener('click', function() {
  const janelaLocalizacao = document.getElementById('janela-local');
  var localizacao = document.getElementById('abrir-janela-local');

  janelaLocalizacao.classList.remove('fechada');
    janelaLocalizacao.classList.remove('fechadapos');
    janelaLocalizacao.classList.add('aberta');

    var catbox = document.getElementsByClassName('catbox');
// Reconhecendo cada elemento que contem a mesma classe
for (var i = 0; i < catbox.length; i++) {
  // Adicionando a classe a cada elemento
  catbox[i].classList.add("blur-effect");}
  localizacao.classList.add('blur-effect');
  });
  //abre a janela de seleção da localização//



  document.getElementById('janela-local').addEventListener('click', function(event) {
    if (event.target === this) {
      this.classList.add('fechadapos');
      this.classList.remove('aberta');
      var catbox = document.getElementsByClassName('catbox');
      for (var i = 0; i < catbox.length; i++) {
        // Adicionando a classe a cada elemento
        catbox[i].classList.remove("blur-effect");};
        var localizacao = document.getElementById('abrir-janela-local');
        localizacao.classList.remove('blur-effect');
    }
  });
  //fecha a janela da localização clicando fora dela
  
  document.getElementById('fechar-janela-local').addEventListener('click', function() {
    document.getElementById('janela-local').classList.add('fechadapos');
    document.getElementById('janela-local').classList.remove('aberta');
    var catbox = document.getElementsByClassName('catbox');
      for (var i = 0; i < catbox.length; i++) {
        // Adicionando a classe a cada elemento
        catbox[i].classList.remove("blur-effect");};
        var localizacao = document.getElementById('abrir-janela-local');
        localizacao.classList.remove('blur-effect');
  });
//fecha a janela da localização apertando no botao 'x'//

document.getElementById('abrir-janela-menu').addEventListener('click', function(){
  const bm = document.getElementById('barra-de-menu');
  const cbm = document.getElementById('conteudo-janela-menu');
    bm.classList.remove('barrafechada');
    cbm.classList.remove('barrafechadapos');
    bm.classList.remove('divbarrafechadapos');
    bm.classList.add('divbarraaberta');
    cbm.classList.add('barraaberta');
    var catbox = document.getElementsByClassName('catbox');
    for (var i = 0; i < catbox.length; i++) {
      // Adicionando a classe a cada elemento
      catbox[i].classList.add("blur-effect");};
      var localizacao = document.getElementById('abrir-janela-local');
      localizacao.classList.add('blur-effect');
})
//abre a barra de menu//

document.getElementById('barra-de-menu').addEventListener('click', function(event) {
  if (event.target === this) {
    document.getElementById('conteudo-janela-menu').classList.add('barrafechadapos');
    this.classList.add('divbarrafechadapos');
    this.classList.remove('divbarraaberta');
    document.getElementById('conteudo-janela-menu').classList.remove('barraaberta');
    var catbox = document.getElementsByClassName('catbox');
    for (var i = 0; i < catbox.length; i++) {
      // Adicionando a classe a cada elemento
      catbox[i].classList.remove("blur-effect");};
      var localizacao = document.getElementById('abrir-janela-local');
      localizacao.classList.remove('blur-effect');
  }
});
//fecha a barra de menu clicando fora//

const buttonInicio = document.getElementById('button-inicio');
buttonInicio.addEventListener('click', function() {
  window.location.href = 'iProfind.html';
});
//adiciona a interação ao botão de inicio//



//firebase config//
const firebaseConfig = {
  apiKey: "AIzaSyA6KhIhp3NccTQaX2utvHaq-dfXbpb7_2U",
  authDomain: "iprofind.firebaseapp.com",
  projectId: "iprofind",
  storageBucket: "iprofind.appspot.com",
  messagingSenderId: "278252027782",
  appId: "1:278252027782:web:4284d9c993bf67818ab607",
  measurementId: "G-LHNGXD5M6N"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);




