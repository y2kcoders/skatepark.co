---
layout: default
permalink: recent
title: Best Skateboard Brands
---


<html>
<head>
    <title>Skatepark Cards</title>
    <style>
        /* CSS code */
        .card {
            border: 1px solid #ccc;
            border-radius: 5px;
            margin: 10px;
            padding: 10px;
            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
            background-color: #f9f9f9;
        }
    </style>
</head>
<body>
    <div id="skatepark-cards">
        <!-- Cards will be dynamically added here -->
    </div>
    <script>
        document.addEventListener("DOMContentLoaded", function () {
    const skateparkCardsContainer = document.getElementById("skatepark-cards");
    // Define the request options
    const requestOptions = {
        method: 'GET', // Change the method to GET
        mode: 'no-cors',
        cache: 'no-cache',
        credentials: 'include',
        headers: {
            "Access-Control-Allow-Credentials": "true",
            "Access-Control-Allow-Origin": "*",
        },
    };
    // Use the fetch function with the modified request options
    fetch("https://y2kcoders.stu.nighthawkcodingsociety.com/api/skatepark/", requestOptions)
        .then(response => response.json())
        .then(data => {
            data.forEach(skatepark => {
                const card = document.createElement("div");
                card.className = "card";
                card.innerHTML = `
                    <h3>Skatepark Name: ${skatepark.skateparkName}</h3>
                    <p>Author: ${skatepark.author}</p>
                    <p>Title: ${skatepark.title}</p>
                    <p>Address: ${skatepark.address}</p>
                    <p>Star Rating: ${skatepark.starRating}</p>
                    <p>Description: ${skatepark.description}</p>
                    <p>Total Likes: ${skatepark.totalLikes}</p>
                `;
                skateparkCardsContainer.appendChild(card);
            });
        })
        .catch(error => console.error("Error fetching data:", error));
});
    </script>
</body>
</html>

