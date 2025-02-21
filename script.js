document.addEventListener("DOMContentLoaded", function () {
    const motos = [
        { nome: "Honda PCX 2025", imagem: "img/gordin.png", preco: "R$ 15.000" },
        { nome: "Honda PCX Sport", imagem: "img/gordin 2.png", preco: "R$ 16.500" },
        { nome: "CAIO E GORDS", imagem: "img/gordin 3.png", preco: "R$ 100,00" }
    ];
    
    const motoLista = document.getElementById("moto-lista");
    if (motoLista) {
        motos.forEach(moto => {
            const motoDiv = document.createElement("div");
            motoDiv.classList.add("moto");
            motoDiv.innerHTML = `
                <img src="${moto.imagem}" alt="${moto.nome}">
                <h3>${moto.nome}</h3>
                <p>Preço: ${moto.preco}</p>
            `;
            motoLista.appendChild(motoDiv);
        });
    }
});
