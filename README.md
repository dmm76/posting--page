# Posting — Simulador de Post (HTML + CSS + JS)

Crie um post com **título** e **conteúdo**, envie via **POST** para a API pública **JSONPlaceholder** e veja o **resultado renderizado** na mesma página.

**Live demo:** _(adicione quando publicar)_  
`https://dmm76.github.io/posting--page/`

**Repositório:**  
`https://github.com/dmm76/posting--page`

---

## ✨ Funcionalidades

- Formulário com **título** (contador de caracteres) e **conteúdo**
- Envio `fetch(POST)` para `https://jsonplaceholder.typicode.com/posts`
- **Renderização** do retorno (título, corpo e ID gerado)
- Feedback de **carregando**, **sucesso** e **erro**
- Acessibilidade básica: `labels`, `aria-live`, `aria-describedby`

---

## 🛠️ Tecnologias

- HTML semântico
- CSS leve (layout responsivo)
- JavaScript Vanilla (DOM + fetch)

---

## 🚀 Como executar

1. Baixe/clonar este repositório.
2. Abra `index.html` no navegador  
   _ou_ use **VS Code + Live Server** (recomendado).

**Deploy com GitHub Pages:**  
Settings → Pages → _Deploy from a branch_ → `main` / **root**.

---

## 🔌 API (POST)

Endpoint: `https://jsonplaceholder.typicode.com/posts`  
Headers: `Content-type: application/json; charset=UTF-8`

Body (exigido):

```json
{
  "title": "Seu título",
  "body": "Seu conteúdo",
  "userId": 1
}
```

posting--page/
├─ index.html # marcação e regiões de renderização
├─ style.css # layout, responsividade e estados
└─ main.js # seletores, submit, fetch e render
