class Contador{
    constructor(contadorId,btnId){
        this.contador = 0;
        this.contadorTxt = document.getElementById(contadorId);
        this.btnId = document.getElementById(btnId);

        this.listeners();

    }

    listeners(){
        document.body.addEventListener("click",()=>{
            this.incrementarContador();
            this.actualizarContador();
        });

        this.btnId.addEventListener("click",()=>{
            this.reiniciarContador();
            this.actualizarContador();
        });
    }

    incrementarContador(){
        this.contador++;
    }

    reiniciarContador(){
        this.contador = -1;
    }

    actualizarContador(){
        if (this.contador === 0){
            this.contadorTxt.style.display = "none";
            this.btnId.style.display = "none";
        } else {
            this.contadorTxt.style.display = "inline";
            this.btnId.style.display = "inline";
            this.contadorTxt.innerText = `Click nº ${this.contador}`;
        }
    }
    

}
