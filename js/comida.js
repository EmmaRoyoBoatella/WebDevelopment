document.querySelectorAll(".imagen-seccion2 img, .imagen2-seccion2 img, .imagen3-seccion2 img, .video4 video").forEach(el=>{
    el. addEventListener("click", function(ev){
        ev. stopPropagation();
        this.parentNode.classList.add("active");
    })
});

document.querySelectorAll(".imagen-seccion2, .imagen2-seccion2, .imagen3-seccion2, .video4").forEach(el=>{
    el.addEventListener("click", function(ev){
        this. classList.remove("active"); 
        console. log("Click");
    })
})


window.onload = function() {
    document.getElementById('banner').style.display = 'block';
};


document.getElementById('cerrarBanner').onclick = function() {
    document.getElementById('banner').style.display = 'none';
};

