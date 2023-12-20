console.log("JS OK");

// Definisco le variabili

const fizz = "Fizz";
const buzz = "Buzz";

//recupero l'elemento per l'output in pagina

const field = document.getElementById("field")

// creo la formula "for" per generare i valori da 1 a 100

for (let i = 0; i < 100; i++) {
    
    // const span = document.createElement("span");
    let divGen = document.createElement ("div");
    let spanGen = document.createElement ("span");
    
    let numberGen = i + 1;
    
    if (numberGen % 5 === 0 && numberGen % 3 === 0) {
        numberGen = fizz + buzz;
        
        divGen.appendChild(spanGen);
        spanGen.append(numberGen);
        
        spanGen.classList.add("bg-lred")
    } 
    else if (numberGen % 5 === 0) {
        numberGen = buzz;
       
        divGen.appendChild(spanGen);
        spanGen.append(numberGen);
        
        spanGen.classList.add("bg-lyellow")
    } 
    else if (numberGen % 3 === 0) {
        numberGen = fizz;
       
        divGen.appendChild(spanGen);
        spanGen.append(numberGen);
        
        spanGen.classList.add("bg-lgreen")
    } else {
       
        divGen.appendChild(spanGen);
        spanGen.append(numberGen);
        
        spanGen.classList.add("bg-dgblue")
    }

    console.log("i= ", i, "Numero generato", numberGen);
    
    divGen.classList.add("col", "flex-center", "number","p-2");
    spanGen.classList.add("w-100","h-100", "flex-center", "br-50");
    
    field.appendChild(divGen);
    divGen.appendChild(spanGen);
}

