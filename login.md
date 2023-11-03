---
layout: default
title: login
permalink: /login
---

</div> -->
<div class="shadow">
<div id="logininfo"></div>
</div>
<script>
    function loginPage() {
        username = sessionStorage.getItem("uid");
        const newRow = document.getElementById('logininfo');
        var space = document.getElementById("spacing");
        var head = document.getElementById("loginHead");
        if (username == null) {
            newRow.innerHTML = `
                <h1 style="color: black;" id="L">Login</h1><br>
                <input type="text" placeholder="Username" id = "username" style="color: black; padding: 10px;"><br>
                <input type="password" placeholder="Password" id = "password" style="color: black; padding: 10px;"><br>
                <p></p>
                <p id="message"></p>
                <button style="padding: 5px; color: black; flex: 50%" onclick="location.href='https://y2kcoders.github.io/skatepark.co/signup'">Login</button>
                <button style="padding: 5px; color: black; flex: 50%" onclick="location.href='https://y2kcoders.github.io/skatepark.co/signup'">Signup</button>
            `;
        }
        else {
            document.getElementById("spacing").style.padding="50px";
            head = head.style.display = "block";
            newRow.innerHTML = `
            <div>Hello ${username} welcome back</div>
            `;
        }
    }
    loginPage();
    var sessionData = "uid"
function login() {
    const login_url = "https://y2kcoders.stu.nighthawkcodingsociety.com/api/person/";
    const password = document.getElementById("password").value;
    const username = document.getElementById("username").value;
    fetch(login_url)
        .then(response => response.json())
            .then(data => {
                console.log(data);
                var i = 0;
                while (true) {
                    if (i >= data.length) {
                        alert("username or password is incorrect");
                        break;
                    }
                    if (data[i]["name"] === username && data[i]["password"]===password) {
                        if (sessionStorage.getItem("uid") == null) {
                            sessionStorage.setItem("uid", data[i]["name"]);
                        }
                        location.href = "/skatepark.co/";
                        break;
                    }
                    else {
                        i += 1;
                    }
                }
            })
}
</script>