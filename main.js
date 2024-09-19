let aleatorio=Math.round(Math.random()*100);
    
    let minum, intentos;
    
    minum=0;
    
    intentos=0
    
    do {
        minum=prompt("Introduce un numero entre 0 y 100");
    
        if(aleatorio>minum){ 
            
            alert("mas alto");
            
            
        }else if(aleatorio<minum) {
            
            alert("Mas bajo");
            
        }
        intentos++;

    
    }while(aleatorio!=minum);
 
    document.write("Correcto, Has consumido " + intentos + " intentos");
    ;