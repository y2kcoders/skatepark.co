---
layout: default
title: Review Page
permalink: review
---
<head>
    <link rel="stylesheet" href="{{site.baseurl}}/assets/css/review.css">
    <meta charset="UTF-8">
    <script src="{{site.baseurl}}/assets/js/review.js"></script>
</head>

## Write your review here

<br>
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
    <button onclick="post()" class="submit" id="submit">Submit</button>
</div>