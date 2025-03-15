let QRtext = document.getElementById("qrText");
let QRimg = document.getElementById("qrImg");
let ImgBox = document.getElementById("imgBox");

function generatorQR(){
    QRimg.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + QRtext.value;
}
