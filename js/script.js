console.log("JS OK");

// Definisco le variabili

const divGen = document.createElement ("div");


// creo la formula "for" per generare i valori da 1 a 100

for (let i = 0; i < 100; i++) {
    let numberGen = i + 1;
    
    if (numberGen % 3 === 0) {
        numberGen = "Fizz"
    }
    console.log("i= ", i, "Numero generato", numberGen);
    
}

