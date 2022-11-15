const toggleCardExpansion = function (id) {
  var projeto = document.getElementById(`projetos-descricao-${id}`);
  console.log(projeto);
  projeto.classList.toggle("active");
  var img = document.getElementById(`button-img-${id}`);

  if (projeto.classList.contains("active")) {
    return img.setAttribute("src", "./assets/icones/seta-redonda-cima.svg");
  }
  return img.setAttribute("src", "./assets/icones/seta-redonda-baixo.svg");
};
