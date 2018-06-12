
const boton = document.getElementById("btn");
boton.addEventListener("click", ()=> {

  let comments = document.getElementById("comment").value;
  
  document.getElementById("comment").value =" ";

  const cont = document.getElementById("cont");

  

  const newComments = document.createElement("div");

  if(comments.legnth === 0 || comments === null){
    btn.style.display = 'none';
    
  }

  const chck =document.createElement("input");
  chck.type = "checkbox";

  const heart = document.createElement("i");
  heart.classList.add('fas','fa-heart','heart');

  const trash = document.createElement("i");
  trash.classList.add('fas','fa-trash','trash');

  const comment = document.createElement("i");
  comment.classList.add('fas','fa-comment','comment');

//nodos de texto del texarea
  let textNewComment= document.createTextNode(comments);

  const contenedorElemento = document.createElement("p");
  contenedorElemento.appendChild(textNewComment);
  newComments.appendChild(chck);
  newComments.appendChild(trash);
  newComments.appendChild(heart);
  newComments.appendChild(comment);
  newComments.appendChild(contenedorElemento);

  cont.appendChild(newComments);
})

function contar() {
  var max = "500";
  var cadena = document.getElementById("comment").value;
  var longitud = cadena.length;

    if(longitud <= max) {
         document.getElementById("contador").value = max-longitud;
    } else {
         document.getElementById("comment").value = cadena.substr(0, max);
    }
}

