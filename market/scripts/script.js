const produtos = document.getElementById('products');

for (let i = 0; i <= 10; i++) {
    produtos.appendChild(createProduto('S23', '234'))
}

function createProduto(nome, valor) {
    let element = document.createElement(
        <div class='product-div displayFlex flexColumn'>
            <img src="assets/galaxy-image.jpg" />
            <span class="desc nome">Galaxy S3 Ultra</span>
            <span class="desc preco">R$ 5.000,00</span>
            <button>Adicionar ao carrinho</button>
        </div>);
    return element
}