---
layout: default
title: account
baseurl: account
---



<a id="login" ></a>

<script>
    username = sessionStorage.getItem("uid");
    const loginh2 = document.getElementById('login');
    if (username == null) {
      loginh2.innerHTML = `
        <a href="https://y2kcoders.github.io/skatepark.co/login" class="log"">Login</a> | <a href="https://y2kcoders.github.io/skatepark.co/signup" class="sign">Signup</a>
      `;
    }
    else {
      loginh2.innerHTML = `
      <a href="https://y2kcoders.github.io/skatepark.co/logout"style ="color: white;">Logout</a>
      <h6 id="welcome">Welcome ${username} to skatepark.co</h6>`;
    }
</script>