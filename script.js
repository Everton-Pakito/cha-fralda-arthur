document.getElementById('confirmForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const nome = document.getElementById('nome').value.trim();
  const presenca = document.getElementById('presenca').value;

  if (!nome || !presenca) {
    alert('Por favor, preencha todos os campos.');
    return;
  }

  alert(`Obrigado, ${nome}! Sua resposta foi registrada.`);

  const mensagem = `Olá! Me chamo ${nome} e quero informar: ${presenca} para o chá de fralda do Arthur.`;
  const url = `https://wa.me/5518996881631?text=${encodeURIComponent(mensagem)}`;
  window.location.href = url;
});