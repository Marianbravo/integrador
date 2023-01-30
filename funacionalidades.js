function cambiarTexto(){
    let txt = document.getElementById('listaLateral1');
    let txt2 = document.getElementById('titulo2a');
    if(txt.style.display != 'none'){
        txt.style.display = 'none';
        txt2.innerHTML = 'Localidad &#8680;';
    }else{
        txt.style.display = 'block';
        txt2.innerHTML = 'Localidad &#8681;';
    }  
}
