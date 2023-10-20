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
            console.log(data); // Log the fetched data to the console
        })
});
    </script>
</body>
</html>

