// Cada item gera uma página em /tratamentos/<slug>.
// Para adicionar um tratamento, copie um bloco e ajuste os textos.

export type Grupo = 'Rosto' | 'Pele' | 'Cabelo';

export interface Tratamento {
  slug: string;
  nome: string;
  titulo: [string, string]; // [parte normal, parte em itálico cobre]
  grupo: Grupo;
  area: string;
  resumo: string;
  paraQuem: string;
  duracao: string;
  recuperacao: string;
  efeito: string;
  oQueE: string[];
  indicacoes: { t: string; d: string }[];
  passos: { t: string; d: string }[];
  antes: string[];
  depois: string[];
  faq: { q: string; a: string }[];
}

const CONFIRMAR = '[a confirmar]';
const passosPadrao = [
  { t: 'Avaliação', d: 'Análise dos seus objetivos, da anatomia e do histórico de saúde.' },
  { t: 'Planejamento', d: 'Definição da técnica e dos produtos para um resultado natural.' },
  { t: 'Procedimento', d: 'Realizado em consultório, com conforto e segurança.' },
  { t: 'Retorno', d: 'Reavaliação para conferir o resultado e ajustar, se preciso.' },
];
const antesPadrao = ['[Cuidado antes do procedimento, a definir pela Dra.]', 'Conte na avaliação sobre medicamentos e procedimentos recentes.'];
const depoisPadrao = ['[Cuidado após o procedimento, a definir pela Dra.]', 'O retorno avalia o resultado e, se necessário, faz ajustes.'];

export const tratamentos: Tratamento[] = [
  {
    slug: 'full-face', nome: 'Full face', titulo: ['Full', 'face'], grupo: 'Rosto', area: 'Harmonização facial',
    resumo: 'Planejamento do rosto como um todo, tratando cada região em equilíbrio com as demais para um resultado harmônico e natural.',
    paraQuem: 'Quem deseja um cuidado completo, em vez de pontos isolados.',
    duracao: CONFIRMAR, recuperacao: CONFIRMAR, efeito: CONFIRMAR,
    oQueE: ['Em vez de tratar um ponto isolado, o full face olha para o rosto inteiro: proporções, sustentação, contorno e qualidade da pele.', 'O plano pode combinar técnicas em etapas, sempre com o objetivo de realçar e não transformar.'],
    indicacoes: [
      { t: 'Equilíbrio do rosto', d: 'Para quem sente que algo está desproporcional, sem saber o quê.' },
      { t: 'Sinais de cansaço', d: 'Perda de sustentação e volume com o tempo.' },
      { t: 'Contorno', d: 'Mandíbula, mento e maçãs do rosto mais definidos.' },
      { t: 'Plano de longo prazo', d: 'Cuidado em etapas, com acompanhamento.' },
    ],
    passos: passosPadrao, antes: antesPadrao, depois: depoisPadrao,
    faq: [{ q: 'É feito tudo em uma sessão?', a: '[Resposta da Dra. sobre etapas do full face.]' }],
  },
  {
    slug: 'toxina-botulinica', nome: 'Toxina botulínica', titulo: ['Toxina', 'botulínica'], grupo: 'Rosto', area: 'Harmonização facial',
    resumo: 'Suaviza linhas de expressão da testa, da glabela e ao redor dos olhos, preservando a naturalidade dos movimentos.',
    paraQuem: 'Quem quer suavizar rugas de expressão.',
    duracao: CONFIRMAR, recuperacao: CONFIRMAR, efeito: '4 a 6 meses, em geral',
    oQueE: ['A toxina botulínica relaxa temporariamente os músculos responsáveis pelas linhas de expressão. A pele por cima fica mais lisa, e o rosto continua expressivo.', 'O objetivo é suavizar, não congelar. A dose e os pontos de aplicação são definidos para o seu rosto, depois de observar como você se expressa.'],
    indicacoes: [
      { t: 'Linhas da testa', d: 'Rugas horizontais que aparecem ao levantar as sobrancelhas.' },
      { t: 'Glabela', d: 'As linhas entre as sobrancelhas, que passam ar de cansaço ou bravo.' },
      { t: 'Pés de galinha', d: 'Linhas ao redor dos olhos que surgem ao sorrir.' },
      { t: 'Prevenção', d: 'Para quem quer evitar que as linhas se aprofundem, conforme avaliação.' },
    ],
    passos: passosPadrao, antes: antesPadrao, depois: depoisPadrao,
    faq: [
      { q: 'Vou ficar com o rosto paralisado?', a: 'Não é esse o objetivo. A dose é planejada para suavizar as linhas mantendo a sua expressão.' },
      { q: 'Quanto tempo dura?', a: 'Em geral, de 4 a 6 meses, variando conforme o organismo, a região tratada e os hábitos de cada pessoa.' },
      { q: 'Quando vejo o resultado?', a: '[Resposta da Dra. sobre o prazo para o efeito aparecer.]' },
      { q: 'Dói?', a: '[Resposta da Dra. sobre conforto durante a aplicação.]' },
    ],
  },
  {
    slug: 'preenchimento-labial', nome: 'Preenchimento labial', titulo: ['Preenchimento', 'labial'], grupo: 'Rosto', area: 'Harmonização facial',
    resumo: 'Contorno, hidratação e volume na medida do seu rosto. É sobre realçar.',
    paraQuem: 'Quem busca lábios mais definidos sem exagero.',
    duracao: CONFIRMAR, recuperacao: CONFIRMAR, efeito: CONFIRMAR,
    oQueE: ['O preenchimento labial trabalha contorno, hidratação e volume de forma proporcional ao rosto.', 'A quantidade e a técnica são escolhidas para manter a naturalidade.'],
    indicacoes: [
      { t: 'Contorno', d: 'Lábios mais definidos.' },
      { t: 'Hidratação', d: 'Melhora da textura dos lábios.' },
      { t: 'Volume', d: 'Na medida certa para o seu rosto.' },
      { t: 'Simetria', d: 'Correção de pequenas assimetrias.' },
    ],
    passos: passosPadrao, antes: antesPadrao, depois: depoisPadrao,
    faq: [{ q: 'Fica artificial?', a: 'O planejamento busca proporção com o restante do rosto, para um resultado natural.' }],
  },
  {
    slug: 'harmonizacao-do-perfil', nome: 'Harmonização do perfil', titulo: ['Harmonização do', 'perfil'], grupo: 'Rosto', area: 'Harmonização facial',
    resumo: 'Nariz, lábios e mento planejados em conjunto para equilibrar as proporções do perfil.',
    paraQuem: 'Quem deseja um perfil mais equilibrado.',
    duracao: CONFIRMAR, recuperacao: CONFIRMAR, efeito: CONFIRMAR,
    oQueE: ['O perfil é avaliado como um conjunto: nariz, lábios e mento precisam conversar entre si.', 'O plano define o que tratar e em que ordem.'],
    indicacoes: [
      { t: 'Nariz', d: 'Ajustes sutis de contorno.' },
      { t: 'Mento', d: 'Projeção e definição do queixo.' },
      { t: 'Lábios', d: 'Proporção com o restante do perfil.' },
      { t: 'Mandíbula', d: 'Contorno mais definido.' },
    ],
    passos: passosPadrao, antes: antesPadrao, depois: depoisPadrao,
    faq: [{ q: 'Preciso tratar todas as regiões?', a: 'Não necessariamente. A avaliação indica o que faz sentido para você.' }],
  },
  {
    slug: 'bioestimuladores', nome: 'Bioestimuladores', titulo: ['Bioestimuladores de', 'colágeno'], grupo: 'Pele', area: 'Estética avançada',
    resumo: 'Estímulo à produção natural de colágeno para firmeza e qualidade da pele ao longo do tempo.',
    paraQuem: 'Quem nota perda de firmeza e quer prevenir o envelhecimento.',
    duracao: CONFIRMAR, recuperacao: CONFIRMAR, efeito: CONFIRMAR,
    oQueE: ['Os bioestimuladores estimulam o próprio organismo a produzir colágeno.', 'O resultado aparece de forma gradual, com melhora da firmeza e da qualidade da pele.'],
    indicacoes: [
      { t: 'Flacidez', d: 'Perda de firmeza no rosto.' },
      { t: 'Prevenção', d: 'Cuidado antes que a flacidez avance.' },
      { t: 'Qualidade da pele', d: 'Textura e viço.' },
      { t: 'Contorno', d: 'Sustentação do rosto.' },
    ],
    passos: passosPadrao, antes: antesPadrao, depois: depoisPadrao,
    faq: [{ q: 'O resultado é imediato?', a: 'Não. O colágeno é produzido aos poucos, então a melhora é gradual.' }],
  },
  {
    slug: 'regeneracao-personalizada', nome: 'Regeneração personalizada', titulo: ['Regeneração', 'personalizada'], grupo: 'Pele', area: 'Estética regenerativa',
    resumo: 'Protocolos pensados para a necessidade de cada paciente, com foco em qualidade da pele e dos tecidos.',
    paraQuem: 'Quem busca um cuidado regenerativo sob medida.',
    duracao: CONFIRMAR, recuperacao: CONFIRMAR, efeito: CONFIRMAR,
    oQueE: ['Protocolos regenerativos montados a partir da avaliação da sua pele.', '[Texto a revisar pela Dra. Vivian.]'],
    indicacoes: [
      { t: 'Textura', d: 'Pele mais uniforme.' },
      { t: 'Viço', d: 'Aspecto mais saudável.' },
      { t: 'Recuperação', d: 'Cuidado com os tecidos.' },
      { t: 'Manutenção', d: 'Rotina de cuidado contínuo.' },
    ],
    passos: passosPadrao, antes: antesPadrao, depois: depoisPadrao,
    faq: [{ q: 'Quantas sessões são necessárias?', a: '[Resposta da Dra.]' }],
  },
  {
    slug: 'tricologia-integrativa', nome: 'Tricologia integrativa', titulo: ['Avaliação', 'capilar'], grupo: 'Cabelo', area: 'Saúde capilar',
    resumo: 'Avaliação do couro cabeludo, dos fios, dos hábitos e de fatores internos que podem estar por trás da queda.',
    paraQuem: 'Quem percebe queda, afinamento ou mudança nos fios.',
    duracao: CONFIRMAR, recuperacao: 'Sem afastamento', efeito: 'Acompanhado em retornos',
    oQueE: ['A consulta de tricologia olha para o couro cabeludo, os fios, os hábitos e fatores internos.', 'Com isso, o plano trata a origem da queda, e não só o sintoma.'],
    indicacoes: [
      { t: 'Queda', d: 'Acima do normal no banho ou no travesseiro.' },
      { t: 'Afinamento', d: 'Fios mais finos e sem volume.' },
      { t: 'Couro cabeludo', d: 'Oleosidade, sensibilidade ou coceira.' },
      { t: 'Prevenção', d: 'Histórico de calvície na família.' },
    ],
    passos: passosPadrao, antes: antesPadrao, depois: depoisPadrao,
    faq: [{ q: 'Preciso levar exames?', a: '[Resposta da Dra. sobre exames na primeira consulta.]' }],
  },
  {
    slug: 'microagulhamento-capilar', nome: 'Microagulhamento capilar', titulo: ['Microagulhamento', 'capilar'], grupo: 'Cabelo', area: 'Saúde capilar',
    resumo: 'Procedimento no couro cabeludo que potencializa a ação dos ativos indicados no seu tratamento.',
    paraQuem: 'Pacientes em tratamento capilar, conforme indicação.',
    duracao: CONFIRMAR, recuperacao: CONFIRMAR, efeito: 'Acompanhado em retornos',
    oQueE: ['O microagulhamento cria microcanais no couro cabeludo, que ajudam os ativos do tratamento a agir melhor.', 'Ele faz parte de um plano maior, definido na consulta de tricologia.'],
    indicacoes: [
      { t: 'Queda', d: 'Como parte do tratamento indicado.' },
      { t: 'Afinamento', d: 'Estímulo ao couro cabeludo.' },
      { t: 'Potencializar ativos', d: 'Melhor ação dos produtos indicados.' },
      { t: 'Acompanhamento', d: 'Sessões programadas no plano.' },
    ],
    passos: passosPadrao, antes: antesPadrao, depois: depoisPadrao,
    faq: [{ q: 'Quantas sessões?', a: 'A frequência é definida na consulta de tricologia.' }],
  },
];

export const porSlug = (slug: string) => tratamentos.find((t) => t.slug === slug);
