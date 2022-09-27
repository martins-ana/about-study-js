function exibirtexto (id, idbutton){
    console.log(id, idbutton);
    const textos = document.getElementsByClassName('menu__text');
    Array.from(textos).forEach(elemento => elemento.style.display = 'none');


    const elementoexibido = document.getElementById(id)
    elementoexibido.style.display = "block";



    const buttons = document.getElementsByClassName('button');
    Array.from(buttons).forEach(elemento => elemento.classList.remove('active'));

    const activebutton = document.getElementById(idbutton)
    activebutton.classList.add('active');
}