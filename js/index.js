import  mostrarProdutos  from "./mostraproduto.js";
const produto = document.querySelector('#nome_produto');
const valor = document.querySelector('#valor');
const imagem = document.querySelector('#imagem');
const btGuardar = document.querySelector('#botao_guarda');
const btLimpar = document.querySelector('#botao_limpar');

btGuardar.addEventListener('click', guardarProduto)
btLimpar.addEventListener('click', limparDados)

mostrarProdutos();


async function guardarProduto() {

    const produtoNovo = {
        nome: produto.value,
        valor: valor.value,
        imagem: imagem.value
    }

    const post = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(produtoNovo)
    };

    try {
        const response = await fetch('http://localhost:3000/produtos', post);
        const responseData = await response.json();

        return responseData;
    } catch (error) {
        console.error('Erro na requisição:', error);
    }
}


function limparDados() {
    document.querySelector('#nome_produto').value = '';
    document.querySelector('#valor').value = '';
    document.querySelector('#imagem').value = '';
}


