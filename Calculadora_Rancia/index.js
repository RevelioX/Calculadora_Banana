const botonRaiz = document.querySelector(".botonRaiz");

botonRaiz.addEventListener("click", () => {
    setTimeout(() => {
        const nuevoBoton = document.createElement("p");
        const botones = document.querySelector(".botones");
        nuevoBoton.textContent = "💥Usted Destrúyo la calculadora, mala persona💥💥💥💥💥💥💥💥";
        const explosiones = document.createElement("p");
        explosiones.textContent = "💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥"
        nuevoBoton.classList.add("botonMalo");
        botones.insertBefore(explosiones,botones.firstChild);
        botones.insertBefore(nuevoBoton,botones.firstChild);
    }, 2000);





        


})