


var produto1 = {imagem: '<img src="./imagens/produto1.png" alt="Descrição" width>', 
    nome_produto: "Smart TV Samsung 55 Polegadas Crystal UHD 4K U8600F Gaming Hub",
    preco: "R$ 2.799,00",
    decricao_produto: "A TV Tudo em 1 da Samsung vai muito além. É TV, videogame, karaokê e ainda oferece uma variedade de canais gratuitos. O melhor custo benefício para seu dia-a-dia e com tecnologia de ponta."
}

var produto2 = {imagem: "./imagens/produto2.avif", 
    nome_produto: "Smart TV Samsung 55 Polegadas Crystal UHD 4K U8600F Gaming Hub",
    preco: "R$ 2.799,00",
    decricao_produto: "A TV Tudo em 1 da Samsung vai muito além. É TV, videogame, karaokê e ainda oferece uma variedade de canais gratuitos. O melhor custo benefício para seu dia-a-dia e com tecnologia de ponta."
}


document.getElementById("imagem1").innerHTML = produto1.imagem

function detalhesProduto(p) {
    alert(p)
}

