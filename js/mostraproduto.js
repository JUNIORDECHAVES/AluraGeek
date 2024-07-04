import deletarProdutor from "./deletarProduto.js";
const mostrarProdutos = async () => {
    try {
        const response = await fetch('https://api-produtos-alurageek-tuy2.vercel.app/produtos');
        const produtosData = await response.json();

        const meusProdutos = document.querySelector('.meus_produtos');
        meusProdutos.innerHTML = ''; // Limpa o conteúdo existente

        produtosData.forEach(produto => {
            // Cria o elemento "card"
            const card = document.createElement('div');
            card.classList.add('card');

            // Cria e configura a imagem do produto
            const cardImg = document.createElement('div');
            cardImg.classList.add('card_img');
            const imgCard = document.createElement('img');
            imgCard.classList.add('img_card');
            imgCard.src = produto.imagem;
            imgCard.alt = produto.nome;
            cardImg.appendChild(imgCard);

            // Cria o nome do produto
            const nomeProduto = document.createElement('span');
            nomeProduto.classList.add('nome');
            nomeProduto.textContent = produto.nome;

            // Cria a seção de valor e ícone de lixeira
            const valorLixeira = document.createElement('span');
            valorLixeira.classList.add('container__valor__icone-lixeira');
            const valor = document.createElement('span');
            valor.textContent = `$ ${produto.valor}`;
            const iconeLixeira = document.createElement('img');
            iconeLixeira.classList.add('icone_lixeira');
            iconeLixeira.src = 'imagens/icones/Vector.png';
            iconeLixeira.alt = 'Icone de lixeira';
            iconeLixeira.dataset.id = produto.id; // Adiciona o ID do produto como data-id
            valorLixeira.appendChild(valor);
            valorLixeira.appendChild(iconeLixeira);

            // Monta o card e insere na lista de produtos
            card.appendChild(cardImg);
            card.appendChild(nomeProduto);
            card.appendChild(valorLixeira);
            meusProdutos.appendChild(card);
            // Adiciona o evento de clique na lixeira
            iconeLixeira.addEventListener('click',() => deletarProdutor(produto.id));
        });
    } catch {
        console.error('Falha ao carregar os produtos.');
        return;
    }
};

export default mostrarProdutos;
