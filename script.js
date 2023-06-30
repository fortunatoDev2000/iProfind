document.getElementById('abrir-janela-local').addEventListener('click', function() {
    document.getElementById('janela-local').classList.remove('fechada');
  });
  
  document.getElementById('janela-local').addEventListener('click', function(event) {
    if (event.target === this) {
      this.classList.add('fechada');
    }
  });
  
  document.getElementById('fechar-janela-local').addEventListener('click', function() {
    document.getElementById('janela-local').classList.add('fechada');
  });