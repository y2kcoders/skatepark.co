---
layout: default
title: SKATEPARK.CO
---

# ‎ 





<div class="card-container">
    <div class="card" id="review">
        <h2>Skatepark Posts</h2>
        <p>Want to post about a skate park?</p>
    </div>
    <div class="card" id="acc">
        <h2>Account</h2>
        <p>sign in, sign up, or view your account.</p>
    </div>
    <div class="card" id="brand">
        <h2>Brand Rating</h2>
        <p>Rate Brands. </p>
    </div>
</div>

<script>
    const Div1 = document.getElementById("review");
    const Div2 = document.getElementById("acc");
    const Div3 = document.getElementById("brand");
    
    Div1.addEventListener("click", function() {
        const url = "{{site.baseurl}}/posts"; 
        window.location.href = url;
    });
    Div2.addEventListener("click", function() {
        const url2 = "{{site.baseurl}}/account"; 
        window.location.href = url2;
    });
    Div3.addEventListener("click", function() {
        const url3 = "{{site.baseurl}}/brand-review"; 
        window.location.href = url3;
    });
</script>