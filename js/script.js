var name = "naranja";
var pass = "123";
var user = document.getElementById("userName");

document.getElementById('register').addEventListener('submit',datos)


function datos() {
/*   alert('Hola desde datos'); */
  var nombre = document.getElementById("nombre").value;
  var cont = document.getElementById("pass").value;

  if (nombre == name && cont == pass) {
    localStorage.setItem("nombre", name);
    redirect();
    alert("Bienvenida");
  } else {
    alert("Ingrese datos");
  }
}

function redirect() {
  window.location.href = "./pages/home.html";
  if (localStorage.getItem("name")) {
    var nombreTemp = localStorage.getItem("name");
    user.innerHTML = nombreTemp;
  }
  console.log(nombreTemp);
}

