document.addEventListener('DOMContentLoaded', () => {

  // --- LÓGICA DO MODAL DAS ÁREAS DE ATUAÇÃO ---
  const modal = document.getElementById('areaModal');
  const closeModalBtn = document.getElementById('closeModal');
  const areaCards = document.querySelectorAll('.area-card');

  const modalTitle = document.getElementById('modalTitle');
  const modalDescription = document.getElementById('modalDescription');
  const modalExamples = document.getElementById('modalExamples');

  // Função para abrir o modal
  const openModal = (card) => {
    // Pega os dados do card clicado
    const title = card.dataset.title;
    const description = card.dataset.description;
    const examples = card.dataset.examples;

    // Popula o modal com os dados
    modalTitle.textContent = title;
    modalDescription.textContent = description;
    modalExamples.textContent = examples;

    // Exibe o modal
    modal.classList.add('visible');
  };

  // Função para fechar o modal
  const closeModal = () => {
    modal.classList.remove('visible');
  };

  // Adiciona o evento de clique em cada card
  areaCards.forEach(card => {
    card.addEventListener('click', () => openModal(card));
  });

  // Eventos para fechar o modal
  closeModalBtn.addEventListener('click', closeModal);
  modal.addEventListener('click', (event) => {
    // Fecha somente se o clique for no fundo (overlay)
    if (event.target === modal) {
      closeModal();
    }
  });

  // Fecha o modal com a tecla 'Escape'
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && modal.classList.contains('visible')) {
      closeModal();
    }
  });


  // --- ATUALIZA O ANO NO RODAPÉ ---
  const yearSpan = document.getElementById('y');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  // --- ANIMAÇÃO DE SCROLL (REVEAL) ---
  const revealElements = document.querySelectorAll('.reveal');
  const revealOnScroll = () => {
    const windowHeight = window.innerHeight;
    revealElements.forEach(el => {
      const elementTop = el.getBoundingClientRect().top;
      const elementVisible = 150; // Distância para o elemento aparecer
      if (elementTop < windowHeight - elementVisible) {
        el.classList.add('active');
      }
    });
  };

  window.addEventListener('scroll', revealOnScroll);
  revealOnScroll(); // Executa uma vez ao carregar a página
});
