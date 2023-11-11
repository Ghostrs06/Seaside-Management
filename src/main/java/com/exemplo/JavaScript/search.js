document.addEventListener('DOMContentLoaded', function () {
    const inputCadastro = document.getElementById('inputCadastro');
    const tableRows = document.querySelectorAll('#table-produtos tbody tr');

    inputCadastro.addEventListener('input', function () {
        const searchText = inputCadastro.value.toLowerCase();

        tableRows.forEach(function (row) {
            const rowData = row.innerText.toLowerCase();

            if (rowData.includes(searchText)) {
                row.style.display = '';
            } else {
                row.style.display = 'none';
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const inputVendas = document.getElementById('inputVendas');
    const tableRows = document.querySelectorAll('#table-vendas tbody tr');

    inputVendas.addEventListener('input', function () {
        const searchText = inputVendas.value.toLowerCase();

        tableRows.forEach(function (row) {
            const rowData = row.innerText.toLowerCase();

            if (rowData.includes(searchText)) {
                row.style.display = '';
            } else {
                row.style.display = 'none';
            }
        });
    });
});
