# ASTECH — Site institucional

Site one-page para a ASTECH, consultoria e treinamentos em tecnologia. Estático (HTML, CSS e JS puros), sem build ou dependências de instalação.

## Estrutura

```bash
astech/
├── index.html                  # Estrutura e conteúdo do site
├── css/
│   └── style.css               # Estilos (tema light, tokens em :root)
├── js/
│   └── main.js                 # Menu mobile, scroll reveal, contadores, terminal, formulário
└── assets/
    └── project-management.png  # Favicon
```

## Como visualizar

Basta abrir o `index.html` diretamente no navegador, ou servir a pasta com um servidor local:

```bash
npx serve .
# ou
python -m http.server 8080
```

## Seções da home

1. **Navbar** — logo à esquerda, menu à direita (fixa no topo)
2. **Hero** — chamada principal com terminal animado
3. **Logos** — empresas atendidas (prova social)
4. **Serviços** — o que a ASTECH faz
5. **Processo** — como o trabalho é conduzido
6. **Portfólio** — amostra de projetos entregues
7. **Stack** — tecnologias dominadas
8. **Sobre** — quem somos, valores e estatísticas
9. **Time** — equipe
10. **Depoimentos** — feedback de clientes
11. **CTA** — chamada para contato
12. **Contato** — formulário e informações
13. **Footer**

## Personalização

- **Cores e tipografia**: variáveis em `:root` no topo de `css/style.css` (`--accent`, `--bg`, `--text`, `--font`, etc.)
- **Textos**: todo o conteúdo (serviços, portfólio, depoimentos, equipe, estatísticas) está em `index.html` como placeholder e pode ser substituído por conteúdo real
- **Favicon**: troque `assets/project-management.png` por outro arquivo e atualize o `<link rel="icon">` no `<head>` do `index.html`

## Formulário de contato

O formulário em `#contato` hoje só exibe uma mensagem de confirmação local (`js/main.js`) e **não envia e-mail de verdade**. Para funcionar em produção, é preciso integrá-lo a um serviço (ex.: Formspree, EmailJS) ou a um endpoint próprio.

## Stack técnico

- HTML5 + CSS3 (sem framework)
- JavaScript vanilla (IntersectionObserver para animações)
- Fonte [JetBrains Mono](https://www.jetbrains.com/lp/mono/) via Google Fonts
