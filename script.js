document.addEventListener('DOMContentLoaded', () => {

  // 1. EFEITO DE REVELAÇÃO AO ROLAR (MAIS RÁPIDO)
  const revealElements = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target); // Opcional: para a animação ocorrer só uma vez
      }
    });
  }, { threshold: 0.1 }); // O elemento aparece quando 10% dele está visível

  revealElements.forEach(el => observer.observe(el));


  // 2. LÓGICA PARA ÁREAS DE ATUAÇÃO INTERATIVAS
  const areasData = [
    { title: 'Direito Civil', description: 'Regula as relações entre pessoas, bens e obrigações no dia a dia.', examples: 'Exemplos: indenizações por danos morais e materiais, contratos, responsabilidade civil, direito de vizinhança.' },
    { title: 'Direito Securitário', description: 'Regula as relações entre seguradoras, corretores e consumidores, tratando de questões relacionadas a contratos de seguro.', examples: 'Exemplos: negativa de cobertura de seguro de vida, automóvel, residencial ou saúde; atraso no pagamento de indenização; cláusulas abusivas em apólices; cancelamento indevido de contrato de seguro.' },
    { title: 'Direito de Família e Sucessões', description: 'Trata das relações familiares e da partilha de bens após a morte.', examples: 'Exemplos: divórcio, guarda de filhos, pensão alimentícia, inventário, testamento.' },
    { title: 'Direito Médico e da Saúde', description: 'Defende os direitos de pacientes e profissionais da saúde.', examples: 'Exemplos: erro médico, negativa de plano de saúde, cirurgias urgentes não autorizadas, responsabilidade hospitalar.' },
    { title: 'Direito Tributário', description: 'Regula a arrecadação de tributos e a relação entre Fisco e contribuinte.', examples: 'Exemplos: contestação de impostos indevidos, recuperação de créditos tributários, planejamento tributário.' },
    { title: 'Direito do Trabalho (Empregador e Empregado)', description: 'Disciplina as relações entre empregados e empregadores.', examples: 'Exemplos: verbas rescisórias, horas extras, vínculo empregatício, assédio moral no trabalho.' },
    { title: 'Direito Contratual', description: 'Especializado na elaboração, revisão e interpretação de contratos.', examples: 'Exemplos: contratos de prestação de serviços, contratos de compra e venda, distratos, cláusulas abusivas.' },
    { title: 'Direito Societário', description: 'Regula a constituição, organização e funcionamento das sociedades empresariais.', examples: 'Exemplos: abertura e encerramento de empresas, elaboração e alteração de contratos sociais, acordos entre sócios, resolução de conflitos societários, exclusão de sócio, reorganizações societárias (cisão, fusão e incorporação).' },
    { title: 'Direito Empresarial', description: 'Abrange as normas que regulam a atividade das empresas.', examples: 'Exemplos: contratos comerciais, recuperação judicial, falência, responsabilidade de sócios, registro de marcas.' },
    { title: 'Direito Previdenciário', description: 'Voltado à proteção social do trabalhador e de seus dependentes.', examples: 'Exemplos: aposentadoria por idade ou invalidez, pensão por morte, auxílio-doença, benefício de prestação continuada (BPC/LOAS).' },
    { title: 'Direito Imobiliário', description: 'Envolve as relações jurídicas relativas a bens imóveis.', examples: 'Exemplos: compra e venda de imóveis, usucapião, despejo, locação, regularização de imóveis.' },
    { title: 'Direito Digital e Proteção de Dados', description: 'Lida com as questões legais do mundo digital e a privacidade de dados pessoais.', examples: 'Exemplos: LGPD, uso indevido de dados, responsabilidade por publicações na internet, crimes virtuais.' },
    { title: 'Direito Ambiental', description: 'Protege o meio ambiente e regula o uso sustentável dos recursos naturais.', examples: 'Exemplos: licenciamento ambiental, ações por danos ambientais, loteamentos irregulares, áreas de preservação.' },
    { title: 'Direito Administrativo', description: 'Trata da atuação do Estado e sua relação com os cidadãos.', examples: 'Exemplos: concursos públicos, licitações, responsabilização do Estado por danos, processos administrativos disciplinares.' },
    { title: 'Direito Penal', description: 'Regula os crimes e as penas impostas aos infratores.', examples: 'Exemplos: defesa em processos criminais, crimes contra o patrimônio, crimes contra a honra, medidas cautelares.' },
    { title: 'Direito Agrário', description: 'Regula as relações jurídicas relativas à atividade rural e à propriedade da terra.', examples: 'Exemplos: arrendamento rural, usucapião rural, regularização fundiária, questões com o INCRA.' },
    { title: 'Direito Bancário', description: 'Trata da relação entre clientes e instituições financeiras.', examples: 'Exemplos: revisão de contratos de financiamento, cobranças indevidas, negativação irregular, cartão de crédito com juros abusivos.' },
    { title: 'Direito do Consumidor (Consumidor e Fornecedor)', description: 'Defende os direitos dos consumidores em suas relações com fornecedores.', examples: 'Exemplos: cobrança indevida, propaganda enganosa, vício em produto ou serviço, negativação indevida.' },
  ];
  
  const gridContainer = document.querySelector('.areas-interactive-grid');
  const modal = document.getElementById('areaModal');
  const closeModalBtn = document.getElementById('closeModal');
  const modalTitle = document.getElementById('modalTitle');
  const modalDescription = document.getElementById('modalDescription');
  const modalExamples = document.getElementById('modalExamples');

  // Cria os botões dinamicamente
  areasData.forEach(area => {
    const button = document.createElement('button');
    button.className = 'area-button reveal';
    button.textContent = area.title;
    button.addEventListener('click', () => {
      modalTitle.textContent = area.title;
      modalDescription.textContent = area.description;
      modalExamples.textContent = area.examples;
      modal.style.display = 'flex';
    });
    gridContainer.appendChild(button);
  });
  
  // Função para fechar o modal
  const closeModal = () => {
    modal.style.display = 'none';
  };

  closeModalBtn.addEventListener('click', closeModal);
  modal.addEventListener('click', (event) => {
    if (event.target === modal) { // Fecha se clicar no fundo
      closeModal();
    }
  });


  // 3. ATUALIZA O ANO NO RODAPÉ
  const yearSpan = document.getElementById('y');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

});