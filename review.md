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
<div class="rate">
    <input type="radio" id="star5" name="rate" value="5" />
    <label for="star5" title="text">5 stars</label>
    <input type="radio" id="star4" name="rate" value="4" />
    <label for="star4" title="text">4 stars</label>
    <input type="radio" id="star3" name="rate" value="3" />
    <label for="star3" title="text">3 stars</label>
    <input type="radio" id="star2" name="rate" value="2" />
    <label for="star2" title="text">2 stars</label>
    <input type="radio" id="star1" name="rate" value="1" />
    <label for="star1" title="text">1 star</label>
</div>
<br>
<br>
<div class="input-group">
    <textarea id="Description" class="input-group__input" required style="height: 250px;"></textarea>
    <label for="Description" class="input-group__label">Description</label>
</div>
<div class="input-group">
    <button class="submit" id="submit">Submit</button>
</div>


