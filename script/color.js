document.addEventListener("DOMContentLoaded", () => {
  let modoOscuro = window.localStorage.getItem("modoOscuro") === "true";
  let modoContraste = window.localStorage.getItem("modoContraste") === "true";

  console.log(modoOscuro + " - " + modoContraste);
  
  if(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches){
    modoOscuro = true;
  }

  actualizarModo(modoOscuro);
  actualizarContraste(modoContraste);

  window.localStorage.setItem("modoOscuro", modoOscuro);
  window.localStorage.setItem("modoContraste", modoContraste);
});

function cambiar_modo() {
  let modoOscuro = window.localStorage.getItem("modoOscuro") === "true";
  modoOscuro = !modoOscuro;
  window.localStorage.setItem("modoOscuro", modoOscuro);
  actualizarModo(modoOscuro);
}

function cambiar_contraste() {
  let modoContraste = window.localStorage.getItem("modoContraste") === "true";
  modoContraste = !modoContraste;
  window.localStorage.setItem("modoContraste", modoContraste);
  actualizarContraste(modoContraste);
}

function actualizarModo(modoOscuro) {
  let img = document.getElementById('logo');
  if (modoOscuro) {
    document.body.classList.add("modo-nocturno");
    document.body.classList.remove("modo-diurno");
    img.src = 'img/logo/logo-rosa.png';
  } else {
    document.body.classList.add("modo-diurno");
    document.body.classList.remove("modo-nocturno");
    img.src = 'img/logo/logo-rosa.png';
  }

  document.getElementById("img-modo").classList.toggle("invertir", modoOscuro);
  document.getElementById("img-contraste").classList.toggle("invertir", modoOscuro);

  let modoContraste = window.localStorage.getItem("modoContraste") === "true";
  actualizarContraste(modoContraste);
}

function actualizarContraste(modoContraste) {
  document.body.classList.remove("modo-con-diurno", "modo-con-nocturno");

  let modoOscuro = window.localStorage.getItem("modoOscuro") === "true";
  let img = document.getElementById('logo');
  if (modoContraste) {
    if (modoOscuro) {
      document.body.classList.add("modo-con-nocturno");
      img.src = 'img/logo/logo-blanco.png';
    } else {
      document.body.classList.add("modo-con-diurno");
      img.src = 'img/logo/logo-negro.png';
    }
  }
}
