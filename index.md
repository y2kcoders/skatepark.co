---
layout: default
title: Student Blog
---

# Home Page

<div class="card-container">
    <div class="card" id="review">
        <h2>Skatepark Rater</h2>
        <p>lorem ipsum</p>
    </div>
    <div class="card" id="acc">
        <h2>Account</h2>
        <p>lorem ipsum</p>
    </div>
    <div class="card" id="brand">
        <h2>Brand Rating</h2>
        <p>lorem ipsum</p>
    </div>
</div>

<script>
    const Div1 = document.getElementById("review");
    const Div2 = document.getElementById("acc");
    const Div3 = document.getElementById("brand");
    
    Div1.addEventListener("click", function() {
        const url = "{{site.baseurl}}/review"; 
        window.location.href = url;
    });
    Div2.addEventListener("click", function() {
        const url2 = "{{site.baseurl}}/account"; 
        window.location.href = url2;
    });
    Div3.addEventListener("click", function() {
        const url3 = "{{site.baseurl}}/brand"; 
        window.location.href = url3;
    });
</script>