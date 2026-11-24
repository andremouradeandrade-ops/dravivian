import type { ImageMetadata } from 'astro';
import rosto from '../assets/rosto.webp';
import pele from '../assets/pele.webp';
import cabelo from '../assets/cabelo.webp';
import toxina from '../assets/toxina-botulinica.webp';
import labios from '../assets/preenchimento-labial.webp';
import perfil from '../assets/harmonizacao-do-perfil.webp';
import fullFace from '../assets/full-face.webp';
import microagulhamento from '../assets/microagulhamento-capilar.webp';
import regeneracao from '../assets/regeneracao-personalizada.webp';
import consulta from '../assets/tricologia-consulta.webp';
import type { Tratamento } from './tratamentos';

export interface Foto {
  src: ImageMetadata;
  alt: string;
}

export const fotos = {
  Rosto: { src: rosto, alt: 'Retrato de uma mulher em três quartos' },
  Cabelo: { src: consulta, alt: 'Separação dos fios com pente para observar o couro cabeludo' },
} satisfies Record<string, Foto>;

const fotosPorTratamento: Partial<Record<string, Foto>> = {
  'full-face': { src: fullFace, alt: 'Retrato frontal com o rosto inteiro em destaque' },
  'toxina-botulinica': { src: toxina, alt: 'Detalhe da testa e das sobrancelhas de uma mulher' },
  'preenchimento-labial': { src: labios, alt: 'Detalhe dos lábios de uma mulher' },
  'harmonizacao-do-perfil': { src: perfil, alt: 'Retrato de perfil com destaque para nariz, lábios e queixo' },
  bioestimuladores: { src: pele, alt: 'Detalhe da textura da pele na face' },
  'regeneracao-personalizada': { src: regeneracao, alt: 'Conta-gotas de vidro sobre um recipiente transparente' },
  'tricologia-integrativa': { src: cabelo, alt: 'Avaliação do couro cabeludo com um tricoscópio' },
  'microagulhamento-capilar': { src: microagulhamento, alt: 'Dispositivo de microagulhamento com tampa ao lado de uma mecha de cabelo' },
};

export const fotoDoTratamento = ({ slug }: Tratamento): Foto => {
  const foto = fotosPorTratamento[slug];
  if (!foto) throw new Error(`Inclua uma imagem para o tratamento "${slug}".`);
  return foto;
};
