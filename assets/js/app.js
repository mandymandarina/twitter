
const boton = document.getElementById("btn");
boton.addEventListener("click", ()=> {

  let comments = document.getElementById("comment").value;


  document.getElementById("comment").value =" ";


  const cont = document.getElementById("cont");

  const newComments = document.createElement("div");

  const chck =document.createElement("input");
  chck.type = "checkbox";

  const heart = document.createElement("i");
  heart.classList.add('fas','fa-heart','heart');

  const trash = document.createElement("i");
  trash.classList.add('fas','fa-trash','trash');

//nodos de texto del texarea
  let textNewComment= document.createTextNode(comments);

  const contenedorElemento = document.createElement("p");
  contenedorElemento.appendChild(textNewComment);
  newComments.appendChild(chck);
  newComments.appendChild(trash);
  newComments.appendChild(heart);
  newComments.appendChild(contenedorElemento);

  cont.appendChild(newComments);
})