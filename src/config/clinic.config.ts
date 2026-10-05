/**
 * Centralização oficial de configurações da clínica odontológica
 * Dra. Kelen Carla Fernandez Rocha - CROSP 118603
 *
 * Todas as informações ausentes ou pendentes de validação pelo cliente
 * estão expressamente catalogadas em `pendingItems`.
 */

export interface TreatmentInfo {
  slug: string;
  name: string;
  shortDescription: string;
  heroHeadline: string;
  whatIsIt: string;
  whenToConsider: string[];
  evaluationProcess: string[];
  stagesAndCare: { title: string; text: string }[];
  limitationsAndEthics: string;
  faqs: { question: string; answer: string }[];
  responsibleDentist: string;
  crosp: string;
}

export const clinicConfig = {
  name: 'Dra. Kelen Carla Fernandez Rocha',
  cro: 'CROSP 118603',
  technicalResponsible: 'Dra. Kelen Carla Fernandez Rocha - Cirurgiã-Dentista (CROSP 118603)',
  specialtyTagline: 'Cirurgiã-Dentista em Guaianases - São Paulo/SP',
  siteUrl: 'https://drakelenodonto.com.br', // Configurável
  canonicalBase: 'https://drakelenodonto.com.br',

  address: {
    street: 'Rua Hipólito de Camargo, 65',
    neighborhood: 'Vila Minerva / Guaianases',
    city: 'São Paulo',
    state: 'SP',
    postalCode: '08410-030',
    fullFormatted: 'Rua Hipólito de Camargo, 65 - Vila Minerva, Guaianases, São Paulo - SP, CEP 08410-030',
    landmarks: 'Em frente ao comércio central de Guaianases, próximo à Estação Guaianases da CPTM e ao Supermercado Semar.',
    mapsUrl: 'https://www.google.com/maps/place/R.+Hip%C3%B3lito+de+Camargo,+65+-+Vila+Minerva,+S%C3%A3o+Paulo+-+SP,+08410-030/@-23.544192,-46.417517,17z',
    mapsEmbedUrl: 'https://www.google.com/maps?q=Rua+Hip%C3%B3lito+de+Camargo,+65+-+Vila+Minerva,+S%C3%A3o+Paulo+-+SP,+08410-030&hl=pt-BR&z=16&output=embed',
    coordinates: {
      latitude: -23.544192,
      longitude: -46.417517,
    },
  },

  contact: {
    whatsappNumber: '5511988119693',
    whatsappFormatted: '(11) 98811-9693',
    whatsappUrl: 'https://wa.me/5511988119693?text=Ol%C3%A1%2C+gostaria+de+solicitar+informa%C3%A7%C3%B5es+sobre+atendimento+odontol%C3%B3gico+na+cl%C3%ADnica+da+Dra.+Kelen.',
    phonePrimary: '1125537002',
    phonePrimaryFormatted: '(11) 2553-7002',
    phoneSecondary: '1125535395',
    phoneSecondaryFormatted: '(11) 2553-5395',
    email: 'contato@drakelenodonto.com.br', // Configurável
  },

  hours: {
    displayWeekdays: 'Segunda a Sexta: 09:00 às 18:30',
    displaySaturday: 'Sábado: 09:00 às 17:00',
    displaySunday: 'Domingo: Fechado',
    openingHoursSpecification: [
      {
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '18:30',
      },
      {
        dayOfWeek: ['Saturday'],
        opens: '09:00',
        closes: '17:00',
      },
    ],
  },

  social: {
    instagramUrl: '', // Pendente de fornecimento
    instagramHandle: '',
  },

  images: {
    heroDentist: '/images/hero-recepcao-clinica.jpg',
    facadeReal: '/images/fachada-clinica-guaianases.png',
    mapReal: '/images/localizacao-mapa-guaianases.png',
    ogImageDefault: '/images/hero-recepcao-clinica.jpg',
  },

  /**
   * Registro transparente de pendências conforme diretrizes éticas e contratuais.
   * Não publicamos placeholders como fatos reais.
   */
  pendingAudit: {
    convenios: 'Atendimento particular com emissão de recibo para reembolso. Lista de convênios credenciados pendente de confirmação pela clínica.',
    registroClinicaPJ: 'Aguardando cadastro de pessoa jurídica/CRO PJ se existente; atendimento técnico e responsabilidade sob CROSP 118603 (PF).',
    redesSociais: 'Link oficial do perfil do Instagram aguardando confirmação do titular.',
    fotosInternas: 'Fotos da fachada física e localização geográfica verificadas no local; fotos do consultório e esterilização serão adicionadas após autorização fotográfica.',
  },

  /**
   * Configuração de telemetria e privacidade
   */
  analytics: {
    gtmId: '', // Ex: 'GTM-XXXXXXX' (bloqueado até inserção e consentimento)
    ga4Id: '', // Ex: 'G-XXXXXXXXXX'
    googleAdsId: '', // Ex: 'AW-XXXXXXXXX'
    metaPixelEnabled: false, // DESATIVADO por padrão conforme diretriz de conformidade médica
  },

  treatments: [
    {
      slug: 'clinica-geral',
      name: 'Clínica Geral Odontológica',
      shortDescription: 'Prevenção, diagnóstico bucal completo, restaurações em resina e tratamentos para a manutenção da saúde dos dentes e gengivas.',
      heroHeadline: 'Cuidados essenciais e preventivos para toda a família em Guaianases',
      whatIsIt: 'A clínica geral é o alicerce de qualquer tratamento odontológico. Envolve avaliação clínica detalhada, exames preventivos, limpeza profilática, raspagem de tártaro, restaurações de dentes com cárie e alívio de desconfortos bucais.',
      whenToConsider: [
        'Sensibilidade ao ingerir alimentos frios, quentes ou doces.',
        'Dor de dente súbita ou incômodo ao mastigar.',
        'Presença de sangramento gengival durante a escovação ou uso de fio dental.',
        'Necessidade de substituição ou reparo em restaurações antigas.',
        'Check-up periódico preventivo (recomendado a cada 6 meses).',
      ],
      evaluationProcess: [
        'Anamnese detalhada do histórico de saúde do paciente.',
        'Exame visual cuidadoso de dentes, gengiva, língua e tecidos moles.',
        'Identificação de lesões de cárie iniciais e depósitos de biofilme dental.',
        'Indicação de exames complementares radiográficos quando necessário.',
        'Planejamento transparente das intervenções prioritárias e preventivas.',
      ],
      stagesAndCare: [
        {
          title: 'Remoção de tártaro e profilaxia',
          text: 'Higienização profissional cuidadosa para remoção de placa bacteriana mineralizada, prevenindo gengivite e periodontite.',
        },
        {
          title: 'Restaurações estéticas diretas',
          text: 'Eliminação segura do tecido cariado com aplicação de resinas compostas da cor natural do elemento dental.',
        },
        {
          title: 'Orientação de higiene oral',
          text: 'Instruções personalizadas sobre técnicas de escovação, uso correto do fio dental e cuidados específicos para o seu perfil.',
        },
      ],
      limitationsAndEthics: 'Procedimentos clínicos gerais requerem avaliação prévia individualizada. Não existem garantias universais de ausência de dor em todos os quadros inflamatórios, mas são adotadas técnicas anestésicas modernas e condutas humanizadas para o máximo conforto.',
      faqs: [
        {
          question: 'De quanto em quanto tempo devo fazer uma limpeza no dentista?',
          answer: 'O intervalo recomendado normalmente é a cada 6 meses, porém pacientes com predisposição a cálculo dental ou periodontite podem necessitar de acompanhamento em intervalos menores a critério do profissional.',
        },
        {
          question: 'Dói fazer uma restauração de cárie?',
          answer: 'A restauração é realizada com anestesia local sempre que indicado para garantir o conforto do paciente durante o atendimento.',
        },
        {
          question: 'O que fazer em caso de dor de dente súbita?',
          answer: 'Entre em contato imediatamente com nossa clínica pelo WhatsApp ou telefone para que possamos orientar e buscar um horário prioritário para avaliação de urgência.',
        },
      ],
      responsibleDentist: 'Dra. Kelen Carla Fernandez Rocha',
      crosp: 'CROSP 118603',
    },
    {
      slug: 'odontologia-estetica',
      name: 'Odontologia Estética',
      shortDescription: 'Harmonia do sorriso através de clareamento dental supervisionado, restaurações estéticas e facetas, sempre preservando a biologia dental.',
      heroHeadline: 'Harmonização do sorriso com responsabilidade biológica e estética natural',
      whatIsIt: 'A odontologia estética busca integrar função mastigatória correta e beleza do sorriso. Abrange procedimentos conservadores como o clareamento dental sob supervisão profissional, remodelação estética de dentes com resina composta e restaurações cerâmicas quando clinicamente indicadas.',
      whenToConsider: [
        'Dentes amarelados ou manchados por pigmentação alimentar, tabagismo ou envelhecimento natural.',
        'Pequenas fraturas, lascas ou dentes com formatos irregulares.',
        'Espaçamentos (diastemas) que causam insatisfação funcional ou estética.',
        'Desejo de um sorriso mais uniforme com respeito às proporções faciais.',
      ],
      evaluationProcess: [
        'Avaliação minuciosa da integridade dos dentes e tecidos periodontais (gengivas saudáveis são pré-requisito).',
        'Registro fotográfico e análise das características anatômicas faciais.',
        'Discussão realista de expectativas e apresentação das opções menos invasivas disponíveis.',
        'Planejamento detalhado do tratamento antes de qualquer intervenção.',
      ],
      stagesAndCare: [
        {
          title: 'Adequação bucal prévia',
          text: 'Tratamento de qualquer cárie ou inflamação gengival antes de iniciar procedimentos estéticos.',
        },
        {
          title: 'Clareamento dental supervisionado',
          text: 'Procedimento com géis clareadores seguros e dosagens controladas (caseiro monitorado ou de consultório), sem agressão ao esmalte dental.',
        },
        {
          title: 'Manutenção e cuidados diários',
          text: 'Orientações pós-tratamento para prolongar os resultados e manter a estabilidade de cor.',
        },
      ],
      limitationsAndEthics: 'Conforme normas éticas do Conselho Federal de Odontologia (CFO), a estética odontológica não promete resultados milagrosos ou padronizados. O grau de clareamento e a longevidade dos procedimentos variam de acordo com a biologia de cada paciente, espessura do esmalte e hábitos de vida.',
      faqs: [
        {
          question: 'O clareamento dental enfraquece os dentes?',
          answer: 'Quando realizado com supervisão profissional e produtos regulamentados pela ANVISA, o clareamento age apenas nos pigmentos da dentina, sem enfraquecer ou desgastar a estrutura saudável do dente.',
        },
        {
          question: 'É comum ter sensibilidade durante o clareamento?',
          answer: 'Alguns pacientes podem apresentar sensibilidade transitória. O dentista ajusta a concentração do gel clareador e prescreve dessensibilizantes tópicos adequados para minimizar qualquer desconforto.',
        },
        {
          question: 'Qualquer pessoa pode fazer facetas ou clareamento?',
          answer: 'Não. É indispensável ter gengivas e dentes livres de infecções. Pacientes com bruxismo severo não tratado ou perda óssea avançada precisam de planejamento específico.',
        },
      ],
      responsibleDentist: 'Dra. Kelen Carla Fernandez Rocha',
      crosp: 'CROSP 118603',
    },
    {
      slug: 'ortodontia',
      name: 'Ortodontia',
      shortDescription: 'Diagnóstico e correção do alinhamento dental e oclusão (mordida), melhorando a mastigação, respiração e estética do sorriso.',
      heroHeadline: 'Alinhamento dos dentes e equilíbrio da mastigação para crianças, jovens e adultos',
      whatIsIt: 'A ortodontia é a especialidade responsável pela prevenção, diagnóstico e tratamento de dentes mal posicionados e alterações no desenvolvimento das arcadas dentárias. Um alinhamento correto não melhora apenas a aparência, mas facilita a higienização bucal e previne dores articulares na mandíbula.',
      whenToConsider: [
        'Dentes apinhados (tortos ou sobrepostos).',
        'Mordida aberta, mordida cruzada ou sobremordida pronunciada.',
        'Dificuldade para mastigar ou fechar os lábios com naturalidade.',
        'Perda precoce de dentes de leite em crianças ou espaçamentos excessivos.',
        'Dores na musculatura facial e articulação temporomandibular (ATM) relacionadas a desajustes na mordida.',
      ],
      evaluationProcess: [
        'Exame clínico postural e oclusal minucioso.',
        'Solicitação de documentação ortodôntica completa (radiografia panorâmica, telerradiografia, modelos de estudo e fotos intra e extraorais).',
        'Estudo cefalométrico detalhado para determinar o tipo ideal de mecânica ortodôntica.',
        'Apresentação do plano de tratamento e estimativa fundamentada das fases de correção.',
      ],
      stagesAndCare: [
        {
          title: 'Planejamento e instalação',
          text: 'Definição do aparelho mais indicado (fixo metálico, estético ou alinhadores conforme o caso) e colagem precisa dos bráquetes.',
        },
        {
          title: 'Manutenções periódicas mensais',
          text: 'Ativações controladas das forças ortodônticas para movimentação biológica e progressiva dos dentes.',
        },
        {
          title: 'Fase de contenção',
          text: 'Instalação de aparelhos de contenção após o alinhamento para estabilizar os dentes na nova posição definitiva.',
        },
      ],
      limitationsAndEthics: 'O tempo total de tratamento ortodôntico varia conforme a complexidade individual do caso, a resposta biológica óssea do paciente e o comparecimento pontual às manutenções mensais. Não é ético prometer prazos universais ou resultados instantâneos.',
      faqs: [
        {
          question: 'Existe idade limite para usar aparelho ortodôntico?',
          answer: 'Não há limite de idade. Adultos com gengivas e suporte ósseo saudáveis podem realizar o tratamento ortodôntico com ótimos resultados funcionais e estéticos.',
        },
        {
          question: 'O aparelho dói para colocar?',
          answer: 'A colocação é indolor. Nos primeiros dias após a ativação, pode haver um desconforto leve devido à adaptação dos tecidos e movimentação dos dentes, que diminui gradualmente.',
        },
        {
          question: 'Por que a contenção é obrigatória após o aparelho?',
          answer: 'Os tecidos e fibras periodontais guardam memória elástica. A contenção é indispensável para evitar que os dentes retornem à posição desalinhada anterior.',
        },
      ],
      responsibleDentist: 'Dra. Kelen Carla Fernandez Rocha',
      crosp: 'CROSP 118603',
    },
    {
      slug: 'cirurgia-odontologica',
      name: 'Cirurgia Odontológica',
      shortDescription: 'Procedimentos cirúrgicos bucais ambulatoriais, exodontias (extrações dentárias convencionais e dentes inclusos/siso) com biossegurança e pós-operatório assistido.',
      heroHeadline: 'Procedimentos cirúrgicos ambulatoriais seguros e com acolhimento em Guaianases',
      whatIsIt: 'A cirurgia odontológica ambulatorial envolve intervenções pontuais realizadas em consultório sob anestesia local, como a extração de dentes que não podem ser restaurados, remoção de terceiros molares (dentes do siso inclusos ou semi-inclusos), frenectomias e pequenas correções de tecidos moles e ósseos.',
      whenToConsider: [
        'Dentes do siso com dor recorrente, inflamação gengival (pericoronarite) ou falta de espaço na arcada.',
        'Dentes severamente destruídos por cárie ou fratura sem possibilidade de reabilitação conservadora.',
        'Indicação ortodôntica para ganho de espaço após planejamento.',
        'Freios labiais ou linguais alterados que atrapalham a fala, mastigação ou espaçamento dos dentes.',
      ],
      evaluationProcess: [
        'Análise criteriosa da saúde geral do paciente, controle de hipertensão, diabetes, uso de medicamentos e alergias.',
        'Avaliação de radiografias panorâmicas e, quando necessário, tomografia computadorizada para checar a proximidade com nervos e seios maxilares.',
        'Explicação detalhada sobre o procedimento cirúrgico, riscos, benefícios e alternativas terapêuticas.',
        'Orientações pré-operatórias claras para garantir a segurança do procedimento.',
      ],
      stagesAndCare: [
        {
          title: 'Procedimento sob anestesia local eficaz',
          text: 'Técnica cirúrgica delicada e minimamente invasiva, buscando preservar o osso circundante e minimizar o edema tecidual.',
        },
        {
          title: 'Sutura e medicação profilática',
          text: 'Fechamento adequado do sítio cirúrgico e prescrição de analgésicos e anti-inflamatórios apropriados para o pós-operatório.',
        },
        {
          title: 'Acompanhamento e remoção de pontos',
          text: 'Consulta de retorno para avaliação da cicatrização e retirada dos pontos de sutura no tempo correto.',
        },
      ],
      limitationsAndEthics: 'Cirurgias bucais são procedimentos invasivos que exigem repouso, alimentação adequada e adesão estrita às orientações pós-operatórias pelo paciente. Toda extração deve ser justificada por diagnóstico clínico comprovado.',
      faqs: [
        {
          question: 'Todo dente do siso precisa ser extraído?',
          answer: 'Não. Sisos completamente erupcionados, bem posicionados na arcada e fáceis de higienizar podem ser mantidos. A extração é indicada quando há dor, impacção prejudicial a dentes vizinhos ou infecções recorrentes.',
        },
        {
          question: 'Quanto tempo dura o repouso após uma cirurgia de siso?',
          answer: 'Em geral, recomenda-se repouso relativo de 48 a 72 horas, evitando esforço físico intenso, exposição solar e alimentos quentes nos primeiros dias.',
        },
        {
          question: 'O que devo comer após uma cirurgia na boca?',
          answer: 'Alimentos pastosos ou líquidos, mornos ou frios (como sopas batidas em temperatura ambiente, iogurtes, purês e vitaminas) para não traumatizar a área operada.',
        },
      ],
      responsibleDentist: 'Dra. Kelen Carla Fernandez Rocha',
      crosp: 'CROSP 118603',
    },
  ],

  educationalArticles: [
    {
      slug: 'quando-procurar-avaliacao-odontologica',
      title: 'Quando procurar uma avaliação odontológica? Sinais que você não deve ignorar',
      summary: 'Descubra os principais alertas bucais que indicam a necessidade de consultar um cirurgião-dentista antes que o problema se agrave.',
      publishDate: '2026-03-15',
      reviewDate: '2026-09-20',
      author: 'Dra. Kelen Carla Fernandez Rocha',
      cro: 'CROSP 118603',
      readingTime: '4 min',
      contentSections: [
        {
          heading: 'A importância de não esperar a dor aparecer',
          body: 'Muitos problemas bucais, como lesões de cárie iniciais e gengivite, desenvolvem-se de forma silenciosa e sem dor. Quando a dor se torna aguda, frequentemente o problema já atingiu a polpa dental (nervo do dente) ou gerou infecção localizada.',
        },
        {
          heading: 'Principais sinais de alerta',
          list: [
            'Sangramento ao escovar ou passar fio dental: gengiva saudável não sangra.',
            'Sensibilidade incomum ao frio, calor ou alimentos ácidos.',
            'Mau hálito persistente mesmo após boa escovação.',
            'Estalos, estalidos ou cansaço na mandíbula ao mastigar ou acordar.',
            'Pequenas feridas na boca que não cicatrizam em mais de 14 dias.',
          ],
        },
        {
          heading: 'Prevenção é o melhor caminho para a saúde e economia',
          body: 'Consultas preventivas regulares a cada 6 meses permitem diagnósticos precoces, tratamentos mais simples, rápidos e econômicos, além de manter o sorriso saudável ao longo de toda a vida.',
        },
      ],
    },
    {
      slug: 'cuidados-com-a-saude-bucal-no-dia-a-dia',
      title: 'Guia prático de higiene bucal diária: escovação, fio dental e prevenção',
      summary: 'Dicas fundamentais e comprovadas cientificamente para proteger seus dentes contra cáries e doenças periodontais em casa.',
      publishDate: '2026-02-10',
      reviewDate: '2026-08-30',
      author: 'Dra. Kelen Carla Fernandez Rocha',
      cro: 'CROSP 118603',
      readingTime: '5 min',
      contentSections: [
        {
          heading: 'Como escolher a escova e o creme dental corretos',
          body: 'Dê preferência a escovas de cabeça pequena ou média com cerdas macias ou extramacias, que limpam sem agredir a gengiva nem desgastar o esmalte. O creme dental deve conter flúor (pelo menos 1.000 a 1.450 ppm) para garantir a remineralização do esmalte.',
        },
        {
          heading: 'O papel indispensável do fio dental',
          body: 'A escova alcança apenas cerca de 60% da superfície dos dentes. Os 40% restantes estão nas áreas entre os dentes (interproximais), onde a placa bacteriana se acumula facilmente. O uso diário do fio dental antes da escovação noturna é essencial.',
        },
        {
          heading: 'A escovação da língua',
          body: 'A saburra lingual (camada esbranquiçada na superfície da língua) é uma das maiores causas de halitose e abrigo de bactérias. Limpar a língua delicadamente com a escova ou um raspador lingual completa a higienização.',
        },
      ],
    },
    {
      slug: 'como-funciona-o-primeiro-atendimento',
      title: 'Como funciona a primeira consulta odontológica na clínica da Dra. Kelen',
      summary: 'Entenda o passo a passo acolhedor da sua primeira visita, desde a conversa inicial até o planejamento do seu tratamento em Guaianases.',
      publishDate: '2026-01-20',
      reviewDate: '2026-09-10',
      author: 'Dra. Kelen Carla Fernandez Rocha',
      cro: 'CROSP 118603',
      readingTime: '3 min',
      contentSections: [
        {
          heading: '1. Recepção acolhedora e escuta ativa',
          body: 'No primeiro atendimento, nossa prioridade é ouvir você com calma. Conversamos sobre sua queixa principal, se sente algum incômodo, seus medos ou experiências anteriores e seu histórico geral de saúde.',
        },
        {
          heading: '2. Avaliação clínica detalhada e sem pressa',
          body: 'Realizamos um exame visual cuidadoso de toda a cavidade oral. Avaliamos a integridade dos dentes, a saúde gengival, a oclusão e os tecidos moles da boca.',
        },
        {
          heading: '3. Planejamento transparente e esclarecimento de dúvidas',
          body: 'Apresentamos um plano de tratamento claro, com as etapas necessárias, ordem de prioridade e orientações detalhadas. Você tem total liberdade para tirar dúvidas antes de qualquer decisão.',
        },
      ],
    },
  ],
};
