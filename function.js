
//1 - crie uma função que exiba uma mensagem no console
function mostrarConsole(){
  console.log("Mensagem no console")
  }
mostrarConsole();

//2 - crie uma função que receba o seu nome como (parâmetro) e exiba no console
function mostrarNome(nome){
  console.log("Nome: ", nome)
  }
mostrarNome("Mariele Fontana");

//3 - crie uma função que receba seu nome, idade, e estilo musical preferido (parâmetros) e exiba no console
function mostrarDados(nome, idade, musica){
  console.log("Nome: " + nome)
  console.log("Idade: " + idade)
  console.log("Musica: " + musica)
  }
mostrarDados("Mariele", 29, "Funk");

//4 - crie uma função que receba o seu filme favorito, musica favorita (parâmetros) e exiba no console
function mostrarFilmografia(filme, musica){
  console.log("FILME: " + filme + "  MUSICA: " +musica)
  }
mostrarFilmografia("Divertidamente", "Hep, I need somebody");

//5 - crie uma função que retorne o triplo do número recebido no parâmetro da função
function x3(numero){
  return (numero*3);
  }
x3(10);
