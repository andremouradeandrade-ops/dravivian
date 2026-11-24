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
| WhatsApp, endereço, horários, registro, CNPJ, credenciais, formação | `src/data/site.ts` |
| Perguntas frequentes da Home e sinais capilares | `src/data/site.ts` |
| Tratamentos (cada um gera `/tratamentos/<slug>`) | `src/data/tratamentos.ts` |
| Cores, fontes e espaçamentos | `src/styles/global.css` (variáveis no `:root`) |
| Fotos | `src/assets/` |

**Atenção:** os dados atuais (registro, endereço, CNPJ, números, formação, respostas do FAQ e o depoimento) são **fictícios**, só para apresentação. Troque pelos reais antes de publicar.
Blocos "Foto a enviar" são trocados por `<Image src={...} />` quando as fotos chegarem.

## Páginas

- `/` Home
- `/tricologia` com autoteste que monta a mensagem de WhatsApp
- `/tratamentos/<slug>` modelo de página de tratamento (8 páginas)
- `/privacidade` texto base da LGPD, para revisão

## Publicar na Vercel

1. Em vercel.com, **Add New → Project** e importe este repositório.
2. A Vercel detecta Astro sozinha. Clique em **Deploy**.
3. Quando houver domínio, troque `site` em `astro.config.mjs`.
