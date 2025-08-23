# DoeMais Web

Frontend do **DoeMais**, uma plataforma para facilitar doações de forma simples, transparente e acessível.      

[`DoeMais.Api`](https://github.com/trinaldi/DoeMaisApi).

## Pré-requisitos

- Node.js **>= 18**  
- **pnpm** (recomendado) – ou npm/yarn  


## Instalação

```bash
git clone https://github.com/seuuser/doemais.web.git
cd doemais.web
pnpm install
```

## Configuração da API

Crie um arquivo .env.local na raiz com:

`VITE_API_BASE_URL=http://localhost:5002`

Ajuste a URL conforme o host/porta do doemais.api.


## Scripts

Rodar em dev:

    pnpm dev

Build de produção:

    pnpm build

Preview do build:

    pnpm preview



## Contribuindo

- Fork o projeto
- Crie uma branch: `git checkout -b feature/minha-feature`
- Commit suas mudanças: `git commit -m 'feat: minha nova feature'`
- Push: `git push origin feature/minha-feature`
- Abra um Pull Request 
