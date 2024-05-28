---
layout: default
title: Review Page
permalink: reviewMaker
---
<head>
    <link rel="stylesheet" href="{{site.baseurl}}/assets/css/review.css">
    <meta charset="UTF-8">
</head>

## Write your review here

<br>
<div class="input-group">
    <input type="text" id="title" class="input-group__input" required />
    <label for="skatename" class="input-group__label">Title</label>
</div>
<div class="input-group">
    <input type="text" id="name" class="input-group__input" required />
    <label for="name" class="input-group__label">Name</label>
</div>
<div class="input-group">
    <input type="text" id="skatename" class="input-group__input" required />
    <label for="skatename" class="input-group__label">Skatepark Name</label>
</div>
<div class="input-group">
    <input type="text" id="address" class="input-group__input" required />
    <label for="address" class="input-group__label">Address of Skate Park</label>
</div>
<br>
<div class="input-group">
    <input type="number" id="rating" class="input-group__input" max="10" min="0" required />
    <span class="rating-label">/ 10</span>
</div>
<br>
<div class="input-group">
    <textarea id="Description" class="input-group__input" required style="height: 250px;"></textarea>
    <label for="Description" class="input-group__label">Description</label>
</div>
<div style="padding-bottom: 20px;">
        <!-- Add an input field for image upload -->
        <input type="file" id="image" accept="image/*" class="input-group__file" required />
</div>
<div class="input-group">
    <button onclick="post()" class="submit">Submit</button>
</div>


<script>
    document.addEventListener('DOMContentLoaded', function () {
        const skateparkUrl = "http://localhost:8085/api/skatepark/create";
        const imageUploadUrl = "http://localhost:8085/image";

        async function post() {
            const title = document.getElementById('title').value;
            const author = document.getElementById('name').value;
            const skatepark_name = document.getElementById('skatename').value;
            const address = document.getElementById('address').value;
            const rating = document.getElementById('rating').value;
            const description = document.getElementById('Description').value;

            let errors = 0;

            if (author === "") {
                document.getElementById('name').style.borderColor = "red";
                document.getElementById('name').classList.add("red-background");
                errors++;
            }

            if (skatepark_name === "") {
                document.getElementById('skatename').style.borderColor = "red";
                document.getElementById('skatename').classList.add("red-background");
                errors++;
            }

            if (address === "") {
                document.getElementById('address').style.borderColor = "red";
                document.getElementById('address').classList.add("red-background");
                errors++;
            }

            if (isNaN(rating) || rating < 0 || rating > 10) {
                document.getElementById('rating').style.borderColor = "red";
                document.getElementById('rating').classList.add("red-background");
                errors++;
            }

            if (description === "") {
                document.getElementById('Description').style.borderColor = "red";
                document.getElementById('Description').classList.add("red-background");
                errors++;
            }

            if (errors > 0) {
                return;
            }

            const skateparkData = {
                "skateparkName": skatepark_name,
                "author": author,
                "title": title,
                "address": address,
                "starRating": rating,
                "description": description,
                "totalLikes": 0
            };

            try {
                const skateparkResponse = await fetch(skateparkUrl, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(skateparkData)
                });

                if (skateparkResponse.ok) {
                    const skateparkData = await skateparkResponse.json();
                    console.log("Skatepark Response:", skateparkData);
                    

                    const formData = new FormData();
                    formData.append("username", skatepark_name);
                    formData.append("image", document.getElementById("image").files[0]);

                    const imageUploadResponse = await fetch(imageUploadUrl, {
                        method: "POST",
                        body: formData
                    });

                    if (imageUploadResponse.ok) {
                        console.log("Image uploaded successfully");
                    } else {
                        console.error("Image upload failed");
                    }
                } else {
                    console.error("Skatepark API request failed");
                }
            } catch (error) {
                console.error("Error:", error);
            }
        }

        document.querySelector('.submit').addEventListener('click', post);
    });
</script>

