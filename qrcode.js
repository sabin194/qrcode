let qrContentInput = document.getElementById("qr-content");
let qrGenerationForm = document.getElementById("qr-generation-form");
let qrCode;

function generateQrCode(qrContent) {
    return new QRCode("qr-code", {
        text: qrContent,
        width: 256,
        height: 256,
        colorDark: "#000000",
        colorLight: "#ffffff",
        correctLevel: QRCode.CorrectLevel.H,
    });
}

qrGenerationForm.addEventListener("submit", function (event) {
    event.preventDefault();
    
    // Assuming qrContentInput.value contains a comma-separated list of links
    let qrContent = qrContentInput.value;
    
    // Split the links into an array
    let linksArray = qrContent.split(',');

    // Concatenate the links into a single string
    let concatenatedLinks = linksArray.join('');

    if (qrCode == null) {
        qrCode = generateQrCode(concatenatedLinks);
    } else {
        qrCode.makeCode(concatenatedLinks);
    }
});
