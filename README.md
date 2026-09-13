# Meu portfólio

Eu sou Joice Alves, desenvolvedora front-end e estudante de Análise e Desenvolvimento de Sistemas. Criei este portfólio para apresentar minha trajetória, as tecnologias que utilizo e a forma como gosto de transformar ideias em experiências visuais funcionais e responsivas.

## O que eu utilizo

- React
- TypeScript
- Vite
- CSS
- Lucide React

## Como executar

Para executar o projeto localmente, eu preciso ter o Node.js instalado. Depois, uso:

```bash
npm install
npm run dev
```

Em seguida, acesso no navegador a URL indicada pelo Vite.

Para gerar a versão de produção, uso:

```bash
npm run build
```

## Publicação no GitHub Pages

O deploy é feito automaticamente pelo workflow em `.github/workflows/deploy.yml` a cada push na branch `main`.

Na configuração do repositório, em **Settings > Pages**, selecione **GitHub Actions** como origem do deploy. Não é necessário versionar a pasta `dist/`, pois ela é gerada pelo workflow.

## Estrutura principal

```text
src/
  App.tsx       # Eu organizo aqui o conteúdo e o comportamento da página
  main.tsx      # Este arquivo inicia a aplicação React
  styles.css    # Aqui ficam o layout, os temas e a responsividade
assets/         # Aqui guardo as imagens e o favicon do portfólio
```

## Sobre a página

Eu organizei a página em seções de apresentação, tecnologias e contato. Também adicionei um tema claro e escuro, que pode ser alternado pelo botão no topo e fica salvo no navegador para a próxima visita.

O favicon usa as iniciais `JA` e segue a paleta verde do portfólio.
