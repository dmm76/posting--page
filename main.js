// Seletores (inputs)
const form = document.querySelector("#post-form");
const titulo = document.querySelector("#titulo");
const conteudo = document.querySelector("#conteudo");
const btnEnviar = document.querySelector("#btn-enviar");
const contador = document.querySelector("#contador");
const msg = document.querySelector("#msg");

// Seletores (renderização)
const renderTitulo = document.querySelector("#renderizador-titulo");
const renderConteudo = document.querySelector("#renderizador-conteudo");
const renderMeta = document.querySelector("#renderizador-meta");

// Contador de caracteres do título
function atualizarContador() {
  const max = titulo.getAttribute("maxlength")
    ? Number(titulo.getAttribute("maxlength"))
    : 120;
  contador.textContent = `${titulo.value.length}/${max}`;
}
titulo.addEventListener("input", atualizarContador);
atualizarContador();

// Submit do formulário
form.addEventListener("submit", async (e) => {
  e.preventDefault();

  // Validação simples
  if (!titulo.value.trim() || !conteudo.value.trim()) {
    msg.textContent = "Preencha título e conteúdo.";
    msg.style.color = "#b91c1c";
    return;
  }

  // Objeto exigido pelo enunciado
  const data = {
    title: titulo.value.trim(),
    body: conteudo.value.trim(),
    userId: 1,
  };

  // Estado de carregamento
  btnEnviar.disabled = true;
  msg.textContent = "Enviando...";
  msg.style.color = "#475569";

  try {
    const resp = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-type": "application/json; charset=UTF-8" },
    });

    if (!resp.ok) throw new Error(`Falha no POST (${resp.status})`);
    const json = await resp.json();

    // Renderização do retorno
    renderTitulo.innerHTML = json.title;
    renderConteudo.textContent = json.body;
    renderMeta.textContent = `ID gerado: ${json.id} • userId: ${json.userId}`;

    msg.textContent = "Post enviado com sucesso!";
    msg.style.color = "#166534";

    // (Opcional) limpar formulário
    form.reset();
    atualizarContador();

    // Focar no resultado
    document.querySelector("#resultado").scrollIntoView({ behavior: "smooth" });
  } catch (err) {
    console.error(err);
    msg.textContent = "Não foi possível enviar. Tente novamente.";
    msg.style.color = "#b91c1c";
  } finally {
    btnEnviar.disabled = false;
  }
});
