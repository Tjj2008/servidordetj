function openModelsPopup() {
    document.getElementById("models-popup").style.display = "flex";
}


function openSubPopup(model) {
    document.getElementById("sub-model-title").innerHTML = model;
    document.getElementById("sub-models-popup").style.display = "flex";
}


function openImagePopup(imageSrc) {
    var modelTitle = document.getElementById("sub-model-title").innerHTML;
    document.getElementById("image-model-title").innerHTML = modelTitle;
    document.getElementById("image-model").src = imageSrc;
    document.getElementById("image-popup").style.display = "flex";
}


function closePopup() {
    document.getElementById("models-popup").style.display = "none";
    document.getElementById("sub-models-popup").style.display = "none";
    document.getElementById("image-popup").style.display = "none";
}


function closeImagePopup() {
    document.getElementById("image-popup").style.display = "none";
}


function comprarauto(){
    document.getElementById("comprar")
}