function pesquisar(){
    // Obtém a seção HTML onde os resultados da pesquisa serão exibidos
    let section = document.getElementById("resultados-pesquisa");  
    let campoPesquisa = document.getElementById("campo-pesquisa").value;

    // mostrar oq esta sendo escrito na pesquisa no console
    console.log(campoPesquisa);

    if (!campoPesquisa){
        section.innerHTML = "<p>Ei, não esqueça de buscar o time que você quer encontrar na Summoner's Rift</p>";
        return;
    }

    campoPesquisa = campoPesquisa.toLowerCase();

    // Inicializa uma string vazia para armazenar os resultados da pesquisa
    let resultados = "";
    let elenco = "";
    let nomedoTime = "";
    let tags= "";

    // Itera sobre cada time no array 'timesLOL'
    for (let dado of timesLOL){

        elenco = dado.elenco.toLowerCase();

        nomedoTime = dado.nomeTime.toLowerCase();

        tags = dado.tags.toLowerCase();

        //se pesquisa inclui algo
        if (nomedoTime.includes(campoPesquisa) || elenco.includes(campoPesquisa) || tags.includes(campoPesquisa)){
            
        // Constrói o HTML para cada item da pesquisa
            resultados += `
            <div class="item-resultado">
                <h2>
                    <a href=${dado.redeSocial} target="_blank">${dado.nomeTime}</a>
                </h2>
                <p class="descricao-meta">
                    ${dado.descriçãoTime}
                </p>
                <p class="descricao-meta">
                    <strong>Elenco: </strong>${dado.elenco}
                </p><br>
                <a href=${dado.link} target="_blank">Conheça mais sobre a equipe</a>
            </div>
        `;
        }   
    };
    
    if (!resultados) {
        resultados = "<p>Ixi, parece que não encontramos nada em Summoner's Rift</p>";
    }


    // Atribui o HTML gerado para a seção de resultados
    section.innerHTML = resultados;
};



