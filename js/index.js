import mostrarProdutos from "./mostraproduto.js";
const produto = document.querySelector('#nome_produto');
const valor = document.querySelector('#valor');
const imagem = document.querySelector('#imagem');
const btGuardar = document.querySelector('#botao_guarda');
const btLimpar = document.querySelector('#botao_limpar');

btGuardar.addEventListener('click', guardarProduto)
btLimpar.addEventListener('click', limparDados)

mostrarProdutos();


async function guardarProduto() {

    if (produto.value === '' || valor.value === '' || imagem.value === '') {
        alert('Todos os campos são obrigatórios!');
        return;
    }


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
        const response = await fetch('https://api-produtos-alurageek-tuy2.vercel.app/produtos', post);
        const responseData = await response.json();

    } catch (error) {
        console.error('Erro na requisição:', error);
    }
    atualizarPagina()
}


function limparDados() {
    document.querySelector('#nome_produto').value = '';
    document.querySelector('#valor').value = '';
    document.querySelector('#imagem').value = '';
}

function atualizarPagina() {
    window.location.reload(true);
}

export default atualizarPagina