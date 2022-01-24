//1 - Criar um loop que conte de 1 até 10 usando FOR
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

//2 - Criar um loop que conte de 10 até 1 usando WHILE
let i = 10;
while (i >= 1) {
   console.log(i);
  i--;
}

//3 - Criar um loop que conte todos os números ímpares de 1 até 100
let cont = 1 ;
    while (cont < 100) {
        if (!(cont%2 == 0)){
          console.log(cont);
        }
        cont = cont + 1;
    }

//4- Criar um loop que conte todos os números pares de 0 a 100
let cont = 0 ;
    while (cont < 100) {
        console.log(cont);
        cont = cont + 2;
    }
