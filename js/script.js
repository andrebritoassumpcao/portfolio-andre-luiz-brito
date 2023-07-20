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

const myImgs = document.querySelectorAll(".image-p");

myImgs.forEach((myImg) => {
    let myLink;

    if (myImg.alt === "imagem01") {
        myLink = "https://coliveiraimoveis.com/";
    } else if (myImg.alt === "imagem02") {
        myLink =
            "https://pokedex-andrebrito-m2xrneh91-andrebritoassumpcao.vercel.app/";
    } else if (myImg.alt === "imagem03") {
        myLink = "https://clock-wine.vercel.app/";
    } else if (myImg.alt === "imagem04") {
        myLink = "https://andrebrito-dsmovie.netlify.app/";
    } else if (myImg.alt === "imagem05") {
        myLink = "https://aluratube-andrebrito.netlify.app/";
    } else if (myImg.alt === "imagem06") {
        myLink = "https://e-commerce-game-store.vercel.app/";
    } else if (myImg.alt === "imagem07") {
        myLink = "https://codepen.io/andrebritoassumpcao/full/qBQYEBN";
    }

    myImg.addEventListener("click", function () {
        window.open(myLink, "_blank");
    });
});
