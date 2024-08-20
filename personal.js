function cifra(a){
    var original;
    var ori;
    var lar = 0;
    var tx ="";
    original = document.getElementById(a).value;
    lar = original.length;
    for (i=0;i<lar;i++){
        if(original[i]=="e"){
            tx=tx+"enter";
        }
        else if (original[i]=="i"){
            tx=tx+"imes";
        }
        else if(original[i]=="a"){
            tx=tx+"ai";
        }
        else if(original[i]=="o"){
            tx=tx+"ober";
        }
        else if(original[i]=="u"){
            tx=tx+"ufat";
        }
        else tx=tx+original[i];
    }
    document.getElementById("img1").style.display="none";
    document.getElementById("tx").style.display="block";
    document.getElementById("tx").value=tx;
    document.getElementById("inicial").value = ""
    
}
function decifra(a){
    var original;
    var ori;
    var lar = 0;
    var mas = 0;
    var tx ="";
    original = document.getElementById(a).value;
    lar = original.length;
    
    for (i=0;i<lar;i++){
        mas=0;
        if(original[i]=="e" && original.substring(i,(i+5))=="enter"){
            /* tx=tx+"enter";*/
            tx=tx+"e";
            mas=4;
        }
        else if (original[i]=="i"  && original.substring(i,(i+4))=="imes"){
            /* tx=tx+"imes"; */
            tx=tx+"i";
            mas=3;
        }
        else if(original[i]=="a" && original.substring(i,(i+2))=="ai"){
            /*tx=tx+"ai";*/
            tx=tx+"a";
            mas=1
        }
        else if(original[i]=="o" && original.substring(i,(i+4))=="ober"){
            /*tx=tx+"ober";*/
            tx=tx+"o";
            mas=3;
        }
        else if(original[i]=="u" && original.substring(i,(i+4))=="ufat"){
            /*tx=tx+"ufat";*/
            tx=tx+"u";
            mas=3
        }
        else{ tx=tx+original[i];
        }
        i=i+mas;
    }
    document.getElementById("tx").value=tx;
    document.getElementById("inicial").value = ""
}
function copiar(a){
    var copia ="";
    copia=document.getElementById(a);
    copia.select();
    document.execCommand("copy");
}
