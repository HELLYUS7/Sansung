document.getElementById('bt-carrinho').addEventListener('click', ()=>{
    document.getElementById('carrinho').classList.toggle('hidden');
});

function addToCart(nome, preco) {
    const item = {
        nome,
        preco,
    };
    carrinhoItens.push(item);
    atualizarCarrinho();
}

function removerDoCarrinho(item) {
    const index = carrinhoItens.indexOf(item);
    if (index !== -1) {
        carrinhoItens.splice(index, 1);
        atualizarCarrinho();
    }
}

function atualizarCarrinho() {
    const carrinho = document.getElementById('items-cart');

    carrinho.innerHTML = '';

    carrinhoItens.forEach((item) => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('product-carrinho', 'displayFlex', 'flexRow');

        const removeButton = document.createElement('button');
        removeButton.textContent = 'X';
        removeButton.classList.add('bt-remover');
        removeButton.addEventListener('click', () => {
            removerDoCarrinho(item);
        });

        const nome = document.createElement('span');
        nome.classList.add('desc');
        nome.textContent = item.nome;

        const valor = document.createElement('span');
        valor.classList.add('valor');
        valor.textContent = item.preco;

        productDiv.appendChild(removeButton);
        productDiv.appendChild(nome);
        productDiv.appendChild(valor);

        carrinho.appendChild(productDiv);
    });
}

const produtosContainer = document.getElementById('produtos');

const produtos = [
    {
        nome: 'Galaxy S3 Ultra',
        preco: 'R$ 5.000,00',
        imagem: 'assets/galaxy-image.jpg'
    },
    {
        nome: 'Galaxy Zflip 5',
        preco: 'R$ 6.000,00',
        imagem: 'assets/flip3.webp'
    },
    {
        nome: 'Galaxy S3 Ultra',
        preco: 'R$ 5.000,00',
        imagem: 'assets/galaxy-image.jpg'
    },
    {
        nome: 'Galaxy S3 Ultra',
        preco: 'R$ 5.000,00',
        imagem: 'assets/galaxy-image.jpg'
    },
    {
        nome: 'Galaxy S3 Ultra',
        preco: 'R$ 5.000,00',
        imagem: 'assets/galaxy-image.jpg'
    },
    {
        nome: 'Galaxy S3 Ultra',
        preco: 'R$ 5.000,00',
        imagem: 'assets/galaxy-image.jpg'
    },
    {
        nome: 'Galaxy S3 Ultra',
        preco: 'R$ 5.000,00',
        imagem: 'assets/galaxy-image.jpg'
    },
    {
        nome: 'Galaxy S3 Ultra',
        preco: 'R$ 5.000,00',
        imagem: 'assets/galaxy-image.jpg'
    },
    {
        nome: 'Galaxy S3 Ultra',
        preco: 'R$ 5.000,00',
        imagem: 'assets/galaxy-image.jpg'
    },
];


const carrinhoItens = [];

produtos.forEach((produto) => {
    const productDiv = document.createElement('div');
    productDiv.classList.add('product-div', 'displayFlex', 'flexColumn');

    const img = document.createElement('img');
    img.src = produto.imagem;

    const nome = document.createElement('span');
    nome.classList.add('desc', 'nome');
    nome.textContent = produto.nome;

    const preco = document.createElement('span');
    preco.classList.add('desc', 'preco');
    preco.textContent = produto.preco;

    const button = document.createElement('button');
    button.textContent = 'Adicionar ao carrinho';
    button.classList.add('add-to-cart');
    button.addEventListener('click', () => {
        addToCart(produto.nome, produto.preco);
    });

    productDiv.appendChild(img);
    productDiv.appendChild(nome);
    productDiv.appendChild(preco);
    productDiv.appendChild(button);

    produtosContainer.appendChild(productDiv);
});
