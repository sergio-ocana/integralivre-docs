import { defineConfig } from "vitepress";

export default defineConfig({
  lang: "pt-BR",
  title: "Integralivre BESS",
  description:
    "Simulador gratuito de viabilidade econômica de projetos de armazenamento de energia (BESS)",
  base: "/integralivre-docs/",
  cleanUrls: true,
  themeConfig: {
    nav: [
      { text: "Início", link: "/" },
      { text: "Guia do usuário", link: "/guia/" },
      { text: "Perguntas frequentes", link: "/guia/faq" },
    ],
    sidebar: [
      {
        text: "Guia do usuário",
        items: [
          { text: "O que é o Integralivre BESS", link: "/guia/" },
          { text: "Como fazer uma simulação", link: "/guia/simular" },
          { text: "Área do integrador", link: "/guia/integradores" },
          { text: "Perguntas frequentes", link: "/guia/faq" },
        ],
      },
    ],
    footer: {
      message: "Documentação de usuário — Integralivre BESS",
    },
    outline: { label: "Nesta página" },
    docFooter: { prev: "Anterior", next: "Próxima" },
  },
});
