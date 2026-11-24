# Site Dra. Vivian Kiss

Site em [Astro](https://astro.build), estático, pronto para a Vercel.

## Rodar no computador

```bash
npm install
npm run dev      # abre em http://localhost:4321
npm run build    # gera a pasta dist/
```

## Onde editar

| O quê | Arquivo |
|---|---|
| WhatsApp, Instagram e informações institucionais | `src/data/site.ts` |
| Perguntas frequentes da Home e sinais capilares | `src/data/site.ts` |
| Tratamentos (cada um gera `/tratamentos/<slug>`) | `src/data/tratamentos.ts` |
| Cores, fontes e espaçamentos | `src/styles/global.css` (variáveis no `:root`) |
| Fotos | `src/assets/` |

Confirme os canais de contato, a localização, os dados profissionais e o conteúdo clínico com a Dra. Vivian antes de publicar.
As fotos geradas são identificadas como ilustrativas. As fotos dos tratamentos são organizadas por área em `src/data/fotos.ts`.

## Páginas

- `/` Home
- `/tricologia` com autoteste que monta a mensagem de WhatsApp
- `/tratamentos/<slug>` modelo de página de tratamento (8 páginas)
- `/privacidade` texto base da LGPD, para revisão

## Publicar na Vercel

1. Em vercel.com, **Add New → Project** e importe este repositório.
2. A Vercel detecta Astro sozinha. Clique em **Deploy**.
3. Quando houver domínio, troque `site` em `astro.config.mjs`.
