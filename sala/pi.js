const resultados = [
    {
        titulo: "Bolo de Banana",
        descricao: "Uma receita fofinha e deliciosa, perfeita para o café da tarde.",
        link: "bolo.html"
    },
    {
        titulo: "Sorvete de Banana",
        descricao: "Refrescante e saudável, feito apenas com bananas congeladas.",
        link: "sorvete.html"
    },
    {
        titulo: "Panquecas de Banana",
        descricao: "Perfeitas para o café da manhã, leves e cheias de sabor.",
        link: "panqueca.html"
    }
];

const pesquisaInput = document.querySelector('.pesquisa-input');
const resultadosLista = document.querySelector('.resultados-lista');

// Função para filtrar os resultados
function filtrarResultados(query) {
    resultadosLista.innerHTML = ''; // Limpa os resultados anteriores

    if (!query) {
        // Se a query estiver vazia, não exibe nenhum resultado
        return;
    }

    const resultadosFiltrados = resultados.filter(item => {
        // Filtra por título ou descrição
        return item.titulo.toLowerCase().includes(query.toLowerCase()) ||
               item.descricao.toLowerCase().includes(query.toLowerCase());
    });

    if (resultadosFiltrados.length === 0) {
        // Se não houver resultados, exibe uma mensagem
        resultadosLista.innerHTML = '<p class="sem-resultados">Nenhum resultado encontrado.</p>';
    } else {
        // Exibe os resultados filtrados
        resultadosFiltrados.forEach(item => {
            const resultadoItem = document.createElement('div');
            resultadoItem.classList.add('resultado-item');
            resultadoItem.innerHTML = `
                <h3>${item.titulo}</h3>
                <p>${item.descricao}</p>
                <a href="${item.link}">Ver Receita</a>
            `;
            resultadosLista.appendChild(resultadoItem);
        });
    }
}

// Adiciona um evento de input para acionar a pesquisa enquanto o usuário digita
pesquisaInput.addEventListener('input', (event) => {
    filtrarResultados(event.target.value);
});

// Evento de digitação no campo de pesquisa
pesquisaInput.addEventListener('input', (e) => {
    filtrarResultados(e.target.value);
});

<script src="pi.js"></script>