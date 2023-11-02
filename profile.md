<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <style>
        /* Your CSS styles here */
    </style>
</head>
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
        var username = sessionStorage.getItem("uid");
        const imageUploadUrl = "https://y2kcoders.stu.nighthawkcodingsociety.com/image";
        async function showImage() {
            var newImage = document.getElementById('image-show').lastElementChild;
            newImage.style.visibility = "visible";
            document.getElementById('image-upload').style.visibility = 'hidden';
            document.getElementById('fileName').textContent = null;
            const file = document.getElementById("chooseFile").files[0];
            const formData = new FormData();
            formData.append('username', username);
            formData.append('image', file);
            try {
                const imageUploadResponse = await fetch(imageUploadUrl, {
                    method: "POST",
                    body: formData
                });
                if (imageUploadResponse.ok) {
                    console.log("Image uploaded successfully");
                } else {
                    console.error("Image upload failed");
                }
            } catch (error) {
                console.error("Error uploading image:", error);
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
        }
    </script>
</body>
</html>
