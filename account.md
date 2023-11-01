---
layout: default
title: account
baseurl: account
---

# Log in to your account to see your reviews



<a class="log" id="log">Log In</a>

<a class="sign" href="{{site.baseurl}}/signup">Sign Up</a>


<h2 id="login" ></h2>

<script>
    username = sessionStorage.getItem("uid");
    const loginh2 = document.getElementById('login');
    if (username == null) {
      loginh2.innerHTML = `
        <a href="https://y2kcoders.github.io/skatepark.co/login" style="color: white;">Login</a> | <a href="https://y2kcoders.github.io/skatepark.co/signup" style="color: white;">Signup</a>
      `;
    }
    else {
      loginh2.innerHTML = `
      <a href="https://y2kcoders.github.io/skatepark.co/logout"style ="color: white;">Logout</a>
      <h6 id="welcome">Welcome ${username} to skatepark.co</h6>`;
    }
    const Div1 = document.getElementById("review");
    const Div2 = document.getElementById("acc");
    const Div3 = document.getElementById("brand");
    
    Div1.addEventListener("click", function() {
        const url = "{{site.baseurl}}/reviewMaker"; 
        window.location.href = url;
    });
    Div2.addEventListener("click", function() {
        const url2 = "{{site.baseurl}}/account"; 
        window.location.href = url2;
    });
    Div3.addEventListener("click", function() {
        const url3 = "{{site.baseurl}}/chat-board"; 
        window.location.href = url3;
    });
</script>