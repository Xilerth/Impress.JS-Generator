var stringResultante="";
function resultado(){
  var datos = document.getElementById('resultadoArea').value;
  var e = JSON.parse(datos);
  
  for (x = 0; x < e.length; x++) { 
    stringResultante +='<div class="step" data-x="'+e[x].ejeX+'" data-y="'+e[x].ejeY+'" data-z="'+e[x].ejeZ+'" data-rotate-x="'+e[x].rotateX+'" data-rotate-y="'+e[x].rotateY+'"  data-scale="'+e[x].size+'">'+e[x].contenido+'</div>';
  }

}

function iniciar(){
 resultado();
 document.getElementById('menus').style.display = "none";
   document.getElementById('impress').innerHTML = stringResultante;
impress().init();
  
}