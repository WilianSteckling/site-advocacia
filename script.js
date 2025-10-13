// =======================================================
// SCRIPT.JS - VERSÃO ATUALIZADA PARA MODAL
// =======================================================

document.addEventListener('DOMContentLoaded', () => {

  // --- LÓGICA DO MODAL DAS ÁREAS DE ATUAÇÃO ---
  const modal = document.getElementById('areaModal');
  const closeModalBtn = document.getElementById('closeModal');
  // Agora selecionamos os itens da área de atuação como ativadores do modal
  const areaItems = document.querySelectorAll('.area-item'); 

  const modalTitle = document.getElementById('modalTitle');
  const modalDescription = document.getElementById('modalDescription');
  const modalExamples = document.getElementById('modalExamples');

  // Função para abrir o modal
  const openModal = (item) => {
    // Pega os dados dos atributos data- do item clicado
    const title = item.dataset.title;
    const description = item.dataset.description;
    const examples = item.dataset.examples; // Certifique-se que o HTML tenha este atributo

    // Popula o modal com os dados
    modalTitle.textContent = title;
    modalDescription.textContent = description;
    modalExamples.textContent = examples;

    // Exibe o modal
    modal.classList.add('visible');
    document.body.style.overflow = 'hidden'; // Evita rolagem da página por trás do modal
  };

  // Função para fechar o modal
  const closeModal = () => {
    modal.classList.remove('visible');
    document.body.style.overflow = ''; // Restaura a rolagem da página
  };

  // Adiciona o evento de clique em cada ITEM (não mais no toggle)
  areaItems.forEach(item => {
    item.addEventListener('click', () => openModal(item));
  });

  // Eventos para fechar o modal
  closeModalBtn.addEventListener('click', closeModal);
  modal.addEventListener('click', (event) => {
    // Fecha somente se o clique for no fundo (overlay), não no conteúdo do modal
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

// --- CONTROLE DO HEADER AO ROLAR A PÁGINA ---
window.addEventListener('scroll', function() {
  const header = document.querySelector('.header');
  if (window.scrollY > 10) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});


document.addEventListener('DOMContentLoaded', () => {
    // 1. Seleciona todos os elementos que devem ser revelados
    const revealElements = document.querySelectorAll('.reveal-item');

    // 2. Opções de configuração para o Intersection Observer
    // rootMargin: '0px 0px -100px 0px' significa que o elemento será
    // revelado 100px ANTES de chegar ao fundo da tela, dando um efeito
    // mais suave e antecipado.
    const observerOptions = {
        root: null, // viewport como root
        rootMargin: '0px 0px -100px 0px',
        threshold: 0.1 // O callback será executado quando 10% do elemento estiver visível
    };

    // 3. Função de Callback que será executada quando a intersecção ocorrer
    const revealCallback = (entries, observer) => {
        entries.forEach(entry => {
            // Se o elemento estiver visível (intersecting é true)
            if (entry.isIntersecting) {
                // Adiciona a classe 'visible' para iniciar a transição CSS
                entry.target.classList.add('visible');
                
                // Opcional: Para que a animação ocorra apenas uma vez, 
                // paramos de observar o elemento depois de animado
                observer.unobserve(entry.target);
            }
        });
    };

    // 4. Cria e inicia o observador
    const observer = new IntersectionObserver(revealCallback, observerOptions);

    // 5. Itera sobre todos os elementos e inicia a observação
    revealElements.forEach(element => {
        observer.observe(element);
    });
});