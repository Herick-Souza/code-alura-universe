function pesquisar() {
    // Seleciona a seção onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");
    console.log(section); // Loga a seção no console para fins de depuração

    let campoPesquisa = document.getElementById("campo-pesquisa").value
    console.log(campoPesquisa);

    if(!campoPesquisa){

        section.innerHTML = "<p>Nada foi encontrado. Digite o nome de um Atleta</p>"
        return        
}

    campoPesquisa = campoPesquisa.toLowerCase()
  
    // Inicializa uma string vazia para armazenar os resultados HTML
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";
  
    // Itera sobre os dados da pesquisa e cria o HTML para cada resultado
    for (let dado of dados) {

        titulo = dado.titulo.toLocaleLowerCase()
        descricao = dado.descricao.toLocaleLowerCase()
        tags = dado.tags.toLocaleLowerCase()

        if(titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
            resultados += `
            <div class="item-resultado">
              <h2>${dado.titulo}</h2>
              <p class="descricao-meta">${dado.descricao}</p>
              <a href="${dado.links}" target="_blank">Instagram</a>
            </div>
          `;
        }

        console.log(dado.titulo.includes(campoPesquisa))
}

    if(!resultados){
        resultados = "<p>Nada foi Encontrado</p>"
    }
  
    // Insere os resultados HTML na seção
    section.innerHTML = resultados;
}