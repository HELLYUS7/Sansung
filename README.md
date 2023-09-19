# Este é meu exemplo de como fazer um carrinho de compras, usando JS puro ;)

Primeiro professora, vamos começar com a estrutura geral do código JavaScript:

```javascript
// Função para adicionar um item ao carrinho
function addToCart(nome, preco) {
    const item = {
        nome,
        preco,
    };
    carrinhoItens.push(item);
    atualizarCarrinho(); // Chame uma função para atualizar a exibição do carrinho na página
}

// Função para remover um item do carrinho
function removerDoCarrinho(item) {
    const index = carrinhoItens.indexOf(item);
    if (index !== -1) {
        carrinhoItens.splice(index, 1);
        atualizarCarrinho();
    }
}

// Função para atualizar a exibição do carrinho
function atualizarCarrinho() {
    const carrinho = document.getElementById('carrinho');

    // Limpe o conteúdo atual do carrinho
    carrinho.innerHTML = '';

    // Adicione os itens do carrinho ao carrinho
    carrinhoItens.forEach((item) => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('product-carrinho', 'displayFlex', 'flexRow');

        const removeButton = document.createElement('button');
        removeButton.textContent = 'X';
        removeButton.classList.add('bt-remover');
        // Adicione um evento de clique para remover o item do carrinho
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

// Resto do código ...
```

1. **addToCart(nome, preco)**: Esta função é chamada quando o botão "Adicionar ao carrinho" é clicado. Ela recebe o nome e o preço do produto como argumentos. Em seguida, cria um objeto `item` com essas informações e o adiciona ao array `carrinhoItens`. Em seguida, chama a função `atualizarCarrinho()` para atualizar a exibição do carrinho na página.

2. **removerDoCarrinho(item)**: Esta função é chamada quando o botão "X" em um item do carrinho é clicado. Ela recebe o item a ser removido como argumento e o remove do array `carrinhoItens`. Em seguida, chama a função `atualizarCarrinho()` para atualizar a exibição do carrinho na página.

3. **atualizarCarrinho()**: Esta função atualiza a exibição do carrinho na página. Primeiro, obtém o elemento HTML do carrinho pelo ID "carrinho". Em seguida, limpa o conteúdo atual do carrinho (remove todos os itens). Depois, itera pelos itens no array `carrinhoItens`, cria elementos HTML para cada item (incluindo um botão para removê-lo) e os adiciona ao carrinho.

Lembre-se de que, para fazer esse código funcionar, você precisa ter a estrutura HTML correta com um contêiner para os produtos e um para o carrinho, como você já tem no seu código HTML. Certifique-se também de ter os elementos corretamente identificados com IDs, como "produtos" para o contêiner de produtos e "carrinho" para o carrinho de compras.

Além disso, o código JavaScript cria um array `carrinhoItens` para armazenar os itens no carrinho e um loop para adicionar produtos à página. Certifique-se de adicionar produtos ao seu array `produtos` com as informações corretas.
