---
layout: default
title: Review Page
permalink: review
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

<div class="input-group">
    <button onclick="post()" class="submit">Submit</button>
</div>


<script>
    // Wait for the page to fully load
    document.addEventListener('DOMContentLoaded', function () {
        // Define the API URL
        const url = "https://y2kcoders.stu.nighthawkcodingsociety.com/api/skatepark/create";

        // Function to handle form submission
        async function post() {
            // Get form input values
            var title = document.getElementById('title').value;
            var author = document.getElementById('name').value;
            var skatepark_name = document.getElementById('skatename').value;
            var address = document.getElementById('address').value;
            var rating = document.getElementById('rating').value;
            var description = document.getElementById('Description').value;

            // Initialize an error counter
            let errors = 0;

            // Validate form inputs
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

            // Check for errors and return if any
            if (errors > 0) {
                return;
            }

            // Create a data object to send to the server
            const data = {
                "skateparkName": skatepark_name,
                "author": author,
                "title": title,
                "address": address,
                "starRating": rating,
                "description": description,
                "totalLikes": 0
            };

            // Send the data to the server
            fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            })
                .then(response => {
                    if (!response.ok) {
                        throw new Error("Network response was not ok");
                    }
                    return response.json();
                })
                .then(data => {
                    console.log("Response data:", data);
                    // You can redirect the user or display a success message
                })
                .catch(error => {
                    console.error("Fetch error:", error);
                    // You can show an error message to the user
                });
        }

        // Attach the post function to the button click event
        document.querySelector('.submit').addEventListener('click', post);
    });
</script>

