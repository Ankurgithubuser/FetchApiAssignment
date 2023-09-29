function Greet(name){
    return new Promise((resolve) => {
        const greeting =`Hello ,${name}`;
        resolve(greeting);
        
    })

}

Greet("Mithun!").then((greeting)=>console.log(greeting))