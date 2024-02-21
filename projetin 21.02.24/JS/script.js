function gravar(){

    let titulo = document.getElementById("titulo").value;

    let Escravo = document.getElementById("Escravo").value;

    let msg = document.getElementById("Texto").value;

    alert(titulo + " \n " +  msg + "\n" + Escravo);

    let textoMensagem = (titulo + "\n" + msg + "\n"+Escravo);

     document.getElementById("Assunto").innerText = titulo;
     document.getElementById("escravo").innerText = Escravo;
     document.getElementById("texto").innerText = msg;

     document.getElementById("titulo").value = "";
     document.getElementById("Escravo").value = "";
     document.getElementById("Texto").value = "";
}

function excluir(){
    alert("Dados deletados");
    document.getElementById("Assunto").innerText = "";
    document.getElementById("escravo").innerText = "";
    document.getElementById("texto").innerText = "";
}