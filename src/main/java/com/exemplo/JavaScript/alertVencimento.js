function verificarProdutosProximosVencimento() {
    const linhasProdutos = document.querySelectorAll('table tbody tr');

    const limiteDias = 7;

    linhasProdutos.forEach(function (linhaProduto) {
        const dataVencimento = linhaProduto.querySelector('td:nth-child(5)').textContent;

        const dataVencimentoDate = new Date(dataVencimento);

        const dataAtual = new Date();

        const diferencaTempo = dataVencimentoDate.getTime() - dataAtual.getTime();

        const diasRestantes = Math.ceil(diferencaTempo / (1000 * 60 * 60 * 24));

        if (diasRestantes <= limiteDias) {
            const nomeProduto = linhaProduto.querySelector('td:nth-child(2)').textContent;
            const codigoProduto = linhaProduto.querySelector('td:nth-child(3)').textContent;
            alert(`Produto perto do vencimento!\nNome: ${nomeProduto}\nCódigo: ${codigoProduto}\nData de Vencimento: ${dataVencimento}`);
        }
    });
}

window.onload = verificarProdutosProximosVencimento;

