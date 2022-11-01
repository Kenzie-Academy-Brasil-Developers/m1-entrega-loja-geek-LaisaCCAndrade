const pinturas = [
    {
        nome: "O Grito",
        valor: `R$ 1.500,00`,
        imagem: "./assets/img/actions/1.jpeg"
    },
    {
        nome: "Mona Lisa",
        valor: `R$ 2.500,00`,
        imagem: "./assets/img/actions/2.jpeg"
    },
    {
        nome: "Noite Estrelada",
        valor: `R$ 1.700,00`,
        imagem: "./assets/img/actions/3.jpeg"
    },
    {
        nome: "Pessoas Sob a Chuva",
        valor: `R$ 1.500,00`,
        imagem: "./assets/img/actions/4.jpeg"
    },
    {
        nome: "Barco a Vela ao Mar",
        valor: `R$ 1.000,00`,
        imagem: "./assets/img/actions/5.jpeg"
    },
    {
        nome: "Arrebentação",
        valor: `R$ 1.900,00`,
        imagem: "./assets/img/actions/6.jpeg"
    },
    {
        nome: "A Casa Vermelha",
        valor: `R$ 1.200,00`,
        imagem: "./assets/img/actions/7.jpeg"
    },
]

const quadros = [
    {
        nome: "Folhas Douradas",
        valor: `R$ 800,00`,
        imagem: "./assets/img/painting/q1.jpeg"
    },
    {
        nome: "The Luxe",
        valor: `R$ 900,00`,
        imagem: "./assets/img/painting/q2.jpeg"
    },
    {
        nome: "Folhas e Cores",
        valor: `R$ 500,00`,
        imagem: "./assets/img/painting/q3.jpeg"
    },
    {
        nome: "O Grande Testamento",
        valor: `R$ 1.000,00`,
        imagem: "./assets/img/painting/q4.jpeg"
    },
    {
        nome: "Leão de Judá",
        valor: `R$ 1.200,00`,
        imagem: "./assets/img/painting/q5.jpeg"
    },
    {
        nome: "Mil Motivos",
        valor: `R$ 800,00`,
        imagem: "./assets/img/painting/q6.jpeg"
    },
    {
        nome: "Pôr do Sol na Praia",
        valor: `R$ 900,00`,
        imagem: "./assets/img/painting/q7.jpeg"
    },
]

function criandoCards(objeto)
{
    let li = document.createElement("li");
    li.classList.add("imagem");

    let img = document.createElement("img");

    let pNomes = document.createElement("p");
    pNomes.classList.add("nomeDoProduto");

    let pValores = document.createElement("p");
    pValores.classList.add("valores");

    let div = document.createElement("div");
    div.classList.add("descricao");

    let figure = document.createElement("figure");

    img.src = objeto.imagem;
    pNomes.innerText = objeto.nome;
    pValores.innerText = objeto.valor;
    
    div.append(pNomes, pValores);
    figure.append(img);
    li.append(figure, div);

    return li
}

function inserindoProdutos(arr)
{
    let pinturas = document.querySelector(".pinturas")
    for(let i = 0; i < arr.length; i++)
    {
        pinturas.append(criandoCards(arr[i]))
    }
}
inserindoProdutos(pinturas)

function insereProdutos(quadro)
{
    let quadros = document.querySelector(".quadros")
    for(let i = 0; i < quadro.length; i++)
    {
        quadros.append(criandoCards(quadro[i]))
    }
}
insereProdutos(quadros)