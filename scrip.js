const modal = document.getElementById("miModal");
const imgModal = document.getElementById("imgModal");
const infoModal = document.getElementById("infoModal");
const btnCerrar = document.querySelector(".cerrar");

// Seleccionamos todas las imágenes de la galería
document.querySelectorAll(".foto-min").forEach(img => {
  img.addEventListener("click", () => {
    // 1. Mostrar el modal
    modal.style.display = "block";
    
    // 2. Pasar la imagen al modal
    imgModal.src = img.src; 
    
    // 3. Buscar el texto oculto que está dentro de su misma tarjeta
    const contenedorPadre = img.parentElement;
    const contenidoTexto = contenedorPadre.querySelector(".texto-oculto").innerHTML;
    
    // 4. Copiar ese HTML (título y párrafo) dentro del modal
    infoModal.innerHTML = contenidoTexto; 
  });
});

// Cerrar el modal al hacer clic en la (X)
btnCerrar.onclick = () => {
  modal.style.display = "none";
};

// Cerrar el modal al hacer clic fuera de la caja blanca
window.onclick = (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
  }
};