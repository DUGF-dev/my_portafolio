function addRecommendation() {
  // Recibe el mensaje de la nueva recomendación
  let recommendation = document.getElementById("new_recommendation");
  // Si el usuario ha dejado una recomendación, mostrar a pop-up
  if (recommendation.value != null && recommendation.value.trim() != "") {
    console.log("New recommendation added");
    
    //Call showPopup here
    showPopup(true);

    // Crea un nuevo elemento 'recomendación' y establece su valor en el mensaje del usuario.
    var element = document.createElement("div");
    element.setAttribute("class","recommendation");
    element.innerHTML = "\<span\>&#8220;\</span\>" + recommendation.value + "\<span\>&#8221;\</span\>";
    // Añade este elemento al final de la lista de recomendaciones.
    document.getElementById("all_recommendations").appendChild(element); 
    
    // Restablecer el valor del área de texto
    recommendation.value = "";
  }
}

function showPopup(bool) {
  if (bool) {
    document.getElementById('popup').style.visibility = 'visible'
  } else {
    document.getElementById('popup').style.visibility = 'hidden'
  }
}
