console.log("JS OK");

// Definisco le variabili

const fizz = "Fizz";
const buzz = "Buzz";

//recupero l'elemento per l'output in pagina

const field = document.getElementById("field");

const generateButton = document.getElementById("generate-button");

// AGGIUNTA FUNZIONE click sul button

generateButton.addEventListener("click", function() {

    generateButton.classList.add("d-none");


    //! -- METODO manipolazione del DOM --- 

    //! creo la formula "for" per generare i valori da 1 a 100

    for (let i = 0; i < 100; i++) {
        
        // creo il DIV e lo SPAN da inserire in html
        let divGen = document.createElement ("div");
        let spanGen = document.createElement ("span");
        
        // creo la variabile di riferimento del numero da 1 a 100
        let numberGen = i + 1;
        
        //! condizione 1
        if (numberGen % 5 === 0 && numberGen % 3 === 0) {
            numberGen = fizz + buzz;
            
            //inserisco lo span nel div
            divGen.appendChild(spanGen);
            //inserisco il numberGen nello span
            spanGen.append(numberGen);
            //aggiungo il background allo span
            spanGen.classList.add("bg-lred");
        } 

        //! condizione 2
        else if (numberGen % 5 === 0) {
            numberGen = buzz;
        
            //inserisco lo span nel div
            divGen.appendChild(spanGen);
            //inserisco il numberGen nello span
            spanGen.append(numberGen);
            //aggiungo il background allo span
            spanGen.classList.add("bg-lyellow");
        } 

        //! condizione 3
        else if (numberGen % 3 === 0) {
            numberGen = fizz;
        
            //inserisco lo span nel div
            divGen.appendChild(spanGen);
            //inserisco il numberGen nello span
            spanGen.append(numberGen);
            //aggiungo il background allo span
            spanGen.classList.add("bg-lgreen");
        } 
        
        //! condizione 4 (else)
        else {

        //inserisco lo span nel div
            divGen.appendChild(spanGen);
            //inserisco il numberGen nello span
            spanGen.append(numberGen);
            //aggiungo il background allo span
            spanGen.classList.add("bg-dgblue");
        }

        // log dei risultati
        console.log("i= ", i, "Numero generato", numberGen);
        
        // aggiungo classi agli elementi
        divGen.classList.add("col", "flex-center", "number","p-2");
        spanGen.classList.add("w-100","h-100", "flex-center", "br-50");
        
        //! carico il blocco in pagina!!!
        field.appendChild(divGen);
        divGen.appendChild(spanGen);
    }
    
    field.classList.remove("d-none");
})
/*
    //! -- METODO template literal --- 

    // TODO ------------ NON RIUSCITO!!!!
    
   //! creo la formula "for" per generare i valori da 1 a 100
   // creo il DIV e lo SPAN da inserire in html
   let divGen;

   for (let i = 0; i < 100; i++) {
       
       // creo la variabile di riferimento del numero da 1 a 100
       let numberGen = i + 1;
       
       divGen += "<div>";
       
       //! condizione 1
       if (numberGen % 5 === 0 && numberGen % 3 === 0) {
           numberGen = fizz + buzz;
           
           //inserisco lo span nel div 
           //inserisco il numberGen nello span 
           //aggiungo il background allo span
           divGen += `<span class="bg-lred"> ${numberGen} <\span>`;
        } 
        
        //! condizione 2
        else if (numberGen % 5 === 0) {
            divGen += "<div>";
            numberGen = buzz;
            
            //inserisco lo span nel div 
            //inserisco il numberGen nello span 
            //aggiungo il background allo span
            divGen += `<span class="bg-lyellow"> ${numberGen} <\span>`;
        } 
        
        //! condizione 3
        else if (numberGen % 3 === 0) {
            divGen += "<div>";
            numberGen = fizz;
            
            //inserisco lo span nel div 
            //inserisco il numberGen nello span 
            //aggiungo il background allo span
            divGen += `<span class="bg-lgreen"> ${numberGen} <\span>`;
        } 
        
        //! condizione 4 (else)
        else {
            divGen += "<div>";
            
            //inserisco lo span nel div 
            //inserisco il numberGen nello span 
            //aggiungo il background allo span
            divGen += `<span class="bg-dgblue"> ${numberGen} <\span>`;
        }

        divGen += "<\div>";
        field.innerhtml += divGen;

        console.log("i= ", i, "Numero generato", numberGen);
        
        divGen.classList.add("col", "flex-center", "number","p-2");
        spanGen.classList.add("w-100","h-100", "flex-center", "br-50");

        field.appendChild(divGen);
        divGen.appendChild(spanGen);
    }
    
    field.classList.remove("d-none");
}) */


