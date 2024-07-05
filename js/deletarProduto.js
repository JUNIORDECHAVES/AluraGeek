import atualizarPagina from "./index.js";
const deletarProdutor = async (idProduto) => {
    const url = `https://api-produtos-alurageek-tuy2.vercel.app/produtos/${idProduto}`;
    const deleta = {
        method: 'DELETE',
        headers: {
            'content-type': 'application/json'
        }
    }

    try {
        const response = await fetch(url, deleta);
        const responseData = await response.json();

        if (response.status === 200) {
            console.log(`Produto com ID ${idProduto} deletado com sucesso.`);
        } else {
            console.error(`Erro ao deletar produto: ${responseData.message}`);
        }
    } catch (error) {
        console.error('Erro na requisição:', error);
        console.log(`ocorreu um erro no ${error}`)
    }
    atualizarPagina()
}


export default deletarProdutor
