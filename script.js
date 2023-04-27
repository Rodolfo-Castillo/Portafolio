//Función que me aplica el estilo a la opciòn seleccionada y quita la previamente seleccionada
function seleccionar(link) {
    var opciones = document.querySelectorAll("#links  a");
    console.log(opciones);
    opciones[0].className = "";
    opciones[1].className = "";
    opciones[2].className = "";
    opciones[3].className = "";
    opciones[4].className = "";
    link.className = "seleccionado";

    //Hacemos desaparecer el menu una vez que se ha seleccionado una opcion
    //en modo responsive
    var x = document.getElementById("nav");
    x.className = "";
}

//función que muestra el menu responsive
function responsiveMenu() {
    var x = document.getElementById("nav");
    if (x.className === "") {
        x.className = "responsive";
    } else {
        x.className = "";
    }
}

//detecto el scrolling para aplicar la animación del la barra de habilidades
window.onscroll = function () {
    efectoHabilidades();
};

//funcion que aplica la animación de la barra de habilidades
function efectoHabilidades() {
    var skills = document.getElementById("skills");
    var distancia_skills =
        window.innerHeight - skills.getBoundingClientRect().top;
    if (distancia_skills >= 300) {
        document.getElementById("html").classList.add("barra-progreso1");
        document.getElementById("js").classList.add("barra-progreso2");
        document.getElementById("vue2").classList.add("barra-progreso3");
        document.getElementById("react").classList.add("barra-progreso4");
        document.getElementById("bd").classList.add("barra-progreso5");
        document.getElementById("express").classList.add("barra-progreso6");
        document.getElementById("vue3").classList.add("barra-progreso7");
        document.getElementById("pinia").classList.add("barra-progreso8");
        // document.getElementById("bd").classList.add("barra-progreso5");
        // document.getElementById("bd").classList.add("barra-progreso5");
    }
}

async function sendMail(e) {
    //e.preventDefault();
    var from = document.getElementById("from").value;
    var email = document.getElementById("email").value;
    var subject = document.getElementById("subject").value;
    var message = document.getElementById("body").value;
    const response = await emailjs.send("service_4e30z1g", "template_vb7ypm6", {
        from_name: from,
        to_name: "Rodolfo Hernandez Castillo",
        message: message,
        email_id: email,
    });
    if (response.t.status === 200) {
        alert(
            "Correo enviado con exito, a la brevedad me comunicare con usted."
        );
    } else {
        alert("Algo salió mal.");
    }
}
