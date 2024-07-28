let imgBox = document.getElementById("imgBox");
let qrImage = document.getElementById("qrImage");
let qrText = document.getElementById("qrText");
let downloadButton = document.getElementById("downloadButton");

function generateQR() {
    if (qrText.value.length > 0) {
        let qrData = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrText.value;
        qrImage.src = qrData;
        imgBox.classList.add("show-img");

        // Enable the download button
        downloadButton.style.display = "block";
    } else {
        qrText.classList.add("error");
        setTimeout(() => {
            qrText.classList.remove("error");
        }, 1000);
    }
}

function downloadQR() {
    let canvas = document.createElement("canvas");
    let context = canvas.getContext("2d");
    let img = new Image();
    img.crossOrigin = "anonymous";
    img.src = qrImage.src;
    img.onload = function() {
        canvas.width = img.width;
        canvas.height = img.height;
        context.drawImage(img, 0, 0);
        let link = document.createElement('a');
        link.download = 'qrcode.png';
        link.href = canvas.toDataURL("image/png");
        link.click();
    };
}
