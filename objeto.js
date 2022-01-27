// Crie um objeto que receba ao menos três propriedades sobre você.
const serHumano = {
   nome: 'Mariele',
   idade: 28,
   cidade: 'Canoas' 
}

// Adicione uma nova propriedade sem alterar seu objeto inicial.
serHumano.fazEsporte="falso"

// Remova uma propriedade desse objeto.
delete serHumano.idade

//Mostre no console todas as propriedades desse objeto.
console.log(serHumano)

// Crie um array  chamado "cadastro" contendo ao menos 5 objetos. 
//Cada objeto deve receber as seguintes propriedades: nome,  idade,  telefone, amigos. 
//Na propriedade amigos, adicione ao menos 4 itens.  
let cadastro = [{
   nome: 'Mariele',
   idade: 28,
   telefone: 'Canoas' ,
   amigos: ['Casey Jones', 'Phil Lesh', 'August West', 'Maria carla']
},
{
   nome: 'Vinicius',
   idade: 35,
   telefone: 'Rio grande' ,
   amigos: ['Marlon', 'eduardo', 'Felipe', 'Jose']
},
{
   nome: 'Carol',
   idade: 26,
   telefone: 'Torres' ,
   amigos: ['Maiara', 'Eduarda', 'Carla', 'Silvia']
},
{
   nome: 'Caio',
   idade: 30,
   telefone: 'Canoas' ,
   amigos: ['Cesar', 'Mateus', 'Guilherme', 'Luis']
},
{
   nome: 'Milena',
   idade: 18,
   telefone: 'Canoas' ,
   amigos: ['Tiago', 'Juliane', 'Felipa', 'stephania', 'Sonia']
}];

// Mostre no console o nome de um amigo de cada lista.
console.log(cadastro[0].amigos[0])
console.log(cadastro[1].amigos[1])
console.log(cadastro[2].amigos[2])
console.log(cadastro[4].amigos[4])
