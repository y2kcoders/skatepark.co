<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
</head>
<style>
 .button {
    display: flex;
    justify-content: center;
}
label {
    cursor: pointer;
    font-size: 1em;
}
#chooseFile {
    visibility: hidden;
}
.buttonContainer {
    width: 15%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 10px;
    background-color: black;
    color: white;
    border-radius: 30px;
    padding: 10px;
    font-size: 0.8em;
    cursor: pointer;
}
</style>
<body>
    <div class="container">
        <div class="image-upload" id="image-upload">
            <form method="post" enctype="multipart/form-data">
                <div class="button">
                    <label for="chooseFile">
                        👉 CLICK HERE! 👈
                    </label>
                </div>
                <input type="file" id="chooseFile" name="chooseFile" accept="image/*" onchange="loadFile(this)">
            </form>
            <div class="fileContainer">
                <div class="fileInput">
                    <p>FILE NAME: </p>
                    <p id="fileName"></p>
                </div>
                <div class="buttonContainer">
                    <div class="submitButton" id="submitButton">SUBMIT</div>
                </div>
            </div>
        </div>
        <div class="image-show" id="image-show"></div>
    </div>
    <script>
var submit = document.getElementById('submitButton');
submit.onclick = showImage;    
username = sessionStorage.getItem("uid");
const imageUploadUrl = "https://y2kcoders.stu.nighthawkcodingsociety.com/image";
function showImage() {
    var newImage = document.getElementById('image-show').lastElementChild;
    newImage.style.visibility = "visible";
    document.getElementById('image-upload').style.visibility = 'hidden';
    document.getElementById('fileName').textContent = null; 
    const imageUploadResponse = await fetch(imageUploadUrl, {
        method: "POST",
        body: {"username": username, "image": document.getElementById("image").files[0]}
    });
    if (imageUploadResponse.ok) {
        console.log("Image uploaded successfully");
    } else {
        console.error("Image upload failed");
    }
}
function loadFile(input) {
    var file = input.files[0];
    var name = document.getElementById('fileName');
    name.textContent = file.name;
    var newImage = document.createElement("img");
    newImage.setAttribute("class", 'img');
    newImage.src = URL.createObjectURL(file);   
    newImage.style.width = "70%";
    newImage.style.height = "70%";
    newImage.style.visibility = "hidden";  
    newImage.style.objectFit = "contain";
    var container = document.getElementById('image-show');
    container.appendChild(newImage);
};
    </script>
</body>