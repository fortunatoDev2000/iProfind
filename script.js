document.getElementById('abrir-janela-local').addEventListener('click', function() {
    document.getElementById('janela-local').classList.remove('fechada');
    document.getElementById('janela-local').classList.remove('fechadapos');
    document.getElementById('janela-local').classList.add('aberta');
  });
  //abre a janela de seleção da localização//

  document.getElementById('janela-local').addEventListener('click', function(event) {
    if (event.target === this) {
      this.classList.add('fechadapos');
      this.classList.remove('aberta');
    }
  });
  //fecha a janela da localização clicando fora dela
  
  document.getElementById('fechar-janela-local').addEventListener('click', function() {
    document.getElementById('janela-local').classList.add('fechadapos');
    document.getElementById('janela-local').classList.remove('aberta');
  });
//fecha a janela da localização apertando no botao 'x'//

document.getElementById('abrir-janela-menu').addEventListener('click', function(){
  const bm = document.getElementById('barra-de-menu')
  const cbm = document.getElementById('conteudo-janela-menu')
    bm.classList.remove('barrafechada');
    cbm.classList.remove('barrafechadapos');
    bm.classList.remove('divbarrafechadapos');
    bm.classList.add('divbarraaberta');
    cbm.classList.add('barraaberta');
})
//abre a barra de menu//

document.getElementById('barra-de-menu').addEventListener('click', function(event) {
  if (event.target === this) {
    document.getElementById('conteudo-janela-menu').classList.add('barrafechadapos');
    this.classList.add('divbarrafechadapos');
    this.classList.remove('divbarraaberta');
    document.getElementById('conteudo-janela-menu').classList.remove('barraaberta')
  }
});
//fecha a barra de menu clicando fora//

const buttonInicio = document.getElementById('button-inicio')
buttonInicio.addEventListener('click', function() {
  window.location.href = 'iProfind.html';
});
//adiciona ainteração ao botão de inicio//

