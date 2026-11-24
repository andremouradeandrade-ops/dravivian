// Dados da Dra. Vivian em um só lugar.
// Confirme os canais de contato e a região com a Dra. Vivian antes da publicação.

export const site = {
  nome: 'Dra. Vivian Caravaggi Kiss',
  nomeCurto: 'Dra. Vivian Kiss',
  especialidade: 'Tricologia e harmonização facial',
  slogan: 'Sua essência em evidência',
  whatsapp: '5511945872177',
  whatsappExibicao: '(11) 94587-2177',
  instagram: 'https://www.instagram.com/draviviankiss/',
  instagramExibicao: '@draviviankiss',
  regiao: 'ABC Paulista · SP',
};

export const wa = (mensagem = 'Olá, Dra. Vivian! Vim pelo site e gostaria de agendar uma avaliação.') =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(mensagem)}`;

export const menu = [
  { href: '/#tratamentos', rotulo: 'Tratamentos', secao: 'tratamentos' },
  { href: '/#sobre', rotulo: 'Sobre', secao: 'sobre' },
  { href: '/tricologia', rotulo: 'Tricologia', secao: 'tricologia' },
  { href: '/#duvidas', rotulo: 'Dúvidas', secao: 'duvidas' },
  { href: '/#contato', rotulo: 'Contato', secao: 'contato' },
];

export const faqHome = [
  { q: 'A harmonização deixa o rosto artificial?', a: 'O objetivo é o oposto: realçar, não transformar. O planejamento respeita as suas proporções, e o melhor resultado é aquele que não denuncia o procedimento.' },
  { q: 'Preciso de avaliação antes de um procedimento?', a: 'Sim. É na avaliação que entendemos seus objetivos, sua anatomia e seu histórico para indicar o que faz sentido para você.' },
  { q: 'Os procedimentos doem?', a: 'O desconforto costuma ser leve. Usamos anestésico tópico e técnicas que deixam a aplicação mais confortável.' },
  { q: 'Preciso me afastar das atividades depois?', a: 'Na maioria dos casos, não. Você volta à rotina no mesmo dia, seguindo alguns cuidados que explicamos na consulta.' },
  { q: 'Quanto tempo dura o efeito da toxina botulínica?', a: 'Em geral, de 4 a 6 meses, variando conforme o organismo, a região tratada e os hábitos de cada pessoa.' },
  { q: 'O que é tricologia clínica integrativa?', a: 'É o cuidado do couro cabeludo e dos fios olhando para o todo: além do cabelo, são investigados hábitos, rotina e fatores internos que podem influenciar a queda.' },
  { q: 'Tratamento capilar tem resultado rápido?', a: 'O ciclo do fio é lento, então a evolução é acompanhada ao longo de semanas e meses. O plano e a frequência das sessões são definidos na consulta.' },
  { q: 'Quanto custa? Atende convênio?', a: 'Consulte os canais de atendimento para informações sobre valores, convênios e reembolso.' },
  { q: 'Como faço para agendar?', a: 'Pelo WhatsApp (11) 94587-2177. O atendimento é individual e com hora marcada.' },
];

export const sinaisCapilares = [
  'Queda acima do normal no banho ou no travesseiro',
  'Fios mais finos e sem volume',
  'Entradas ou risca mais aparentes',
  'Couro cabeludo oleoso, sensível ou com coceira',
  'Descamação ou caspa persistente',
  'Cabelo que parou de crescer',
  'Queda após estresse, gestação ou dieta',
  'Histórico de calvície na família',
];
