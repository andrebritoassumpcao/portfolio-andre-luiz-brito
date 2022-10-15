var button = document.getElementById("btn-seta");
var img = document.getElementById("img-btn");

button.addEventListener("click", function () {
  var projeto = document.querySelector(".projetos-descricao");
  projeto.classList.toggle("active");

  if (projeto.classList.contains("active")) {
    return img.setAttribute("src", "../../assets/icones/seta-redonda-cima.svg");
  }
  return img.setAttribute("src", "../../assets/icones/seta-redonda-baixo.svg");
});
