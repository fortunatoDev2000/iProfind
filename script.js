document.getElementById('abrir-janela-local').addEventListener('click', function() {
    document.getElementById('janela-local').classList.remove('fechada');
    document.getElementById('janela-local').classList.remove('fechadapos');
    document.getElementById('janela-local').classList.add('aberta');
  });

  document.getElementById('janela-local').addEventListener('click', function(event) {
    if (event.target === this) {
      this.classList.add('fechadapos');
      this.classList.remove('aberta');
    }
  });
  
  document.getElementById('fechar-janela-local').addEventListener('click', function() {
    document.getElementById('janela-local').classList.add('fechadapos');
    document.getElementById('janela-local').classList.remove('aberta');
  });