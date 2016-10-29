//impress().init();
var jsonArray = [];
var jsonImpress;
var stringResultante ="";
$('.editor').trumbowyg({
 lang: 'es', // Idioma (es.min.js incluido)
  btns: [
          ['bold', 'italic', 'underline', 'strikethrough'],
          ['superscript', 'subscript'],
          ['justifyLeft', 'justifyCenter', 'justifyRight', 'justifyFull'],
          ['unorderedList', 'orderedList'],
          ['link', 'insertImage'],
          ['horizontalRule', 'removeformat'],
          ['viewHTML'],
          ['fullscreen']
        ],

});
function escapeRegExp(str) {
  return str.replace(/"/g, "'");
}
function generar(){
 var contenido = $('#area').trumbowyg('html');
 var ejeX = $('#ejeX').val();
   var ejeY = $('#ejeY').val();
   var ejeZ = $('#ejeZ').val();
   var rotateX = $('#rotateX').val();
   var rotateY = $('#rotateY').val();
   var size = $('#size').val();
  /*
  contenido = contenido.replace("\"", "'");
  */
  contenido = escapeRegExp(contenido);
  /* var stringResultante ='<div class="step" data-x="'+ejeX+'" data-y="'+ejeY+'" data-z="'+ejeZ+'" data-rotate-x="'+rotateX+'" data-rotate-y="'+rotateY+'"  data-scale="'+size+'">'+contenido+'</div>';*/
  var stringJson = '{"contenido" : "'+contenido+'","ejeX" : "'+ejeX+'","ejeY" : "'+ejeY+'","ejeZ" : "'+ejeZ+'","rotateX": "'+rotateX+'","rotateY": "'+rotateY+'","size" : "'+size+'"}';

  console.log(stringJson);
  
 
  jsonArray.push(stringJson);
  toJson();
     document.getElementById('resultadoArea').innerHTML = jsonImpress;

 /*   
  document.getElementById('resultadoArea').innerHTML += stringJson + "\n" ;
  document.getElementById('impress').innerHTML += stringResultante;*/
  }
function toJson(){
  jsonImpress = "[";
  var i = 0
  for (i = 0; i < jsonArray.length-1; i++) { 
    jsonImpress += jsonArray[i]+",";
}
   jsonImpress += jsonArray[i]+"]";
  console.log(jsonImpress);
}
function resultado(){
  var e = JSON.parse(jsonImpress);
  for (x = 0; x < jsonArray.length; x++) { 
    stringResultante +='<div class="step" data-x="'+e[x].ejeX+'" data-y="'+e[x].ejeY+'" data-z="'+e[x].ejeZ+'" data-rotate-x="'+e[x].rotateX+'" data-rotate-y="'+e[x].rotateY+'"  data-scale="'+e[x].size+'">'+e[x].contenido+'</div>';
  }

}

function iniciar(){
  resultado();
 document.getElementById('menus').style.display = "none";
   document.getElementById('impress').innerHTML = stringResultante;
impress().init();
  
}

function exportJson(){
  
  var copyTextarea = document.querySelector('#resultadoArea');
  copyTextarea.select();

  try {
    var successful = document.execCommand('copy');
    var msg = successful ? 'successful' : 'unsuccessful';
    console.log('Copying text command was ' + msg);
  } catch (err) {
    console.log('Oops, unable to copy');
  }

}