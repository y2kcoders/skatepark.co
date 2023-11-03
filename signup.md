---
layout: default
title: sign up
permalink: /signup
---

<h1> Sign Up Page</h1>

<div class="signcontain">
    <div class="signup">
        <div style="">
            <label class="signupL">Username</label>
            <input id = "username" type="text"/>
        </div>
        <div style="">
            <label class="signupL">Password</label>
            <input id = "password" type="password">
        </div>
        <div style="">
            <label class="signupL">Confirm Password</label>
            <input id = "confirm_password" type="password">
        </div>
        <div style="">
            <label class="signupL">Email</label>
            <input type="email" id="email" pattern=".+@globex\.com" size="30" required />
        </div>
        <div style="">
            <label class="signupL">Birth</label>
            <input id="birth" type="date">
        </div>
    </div>
    <br>
</div>
<div style="padding: 10px">
    <button id="signUPbutton" type="submit">sign up</button>
</div>
<div id="john"></div>
<script> 
function dateFormatter(date) {
  date = new Date(date);
  const date_string =
    ((date.getMonth() + 1).toString().length === 2
      ? date.getMonth() + 1
      : "0" + (date.getMonth() + 1).toString()) +
    "-" +
    (date.getDate().toString().length === 2
      ? date.getDate()
      : "0" + date.getDate().toString()) +
    "-" +
    date.getFullYear();
  return date_string;
}
function signup() {
    var password = document.getElementById("password").value;
    var confirm_password = document.getElementById("confirm_password").value;
    var username = document.getElementById("username").value;
    var birth = document.getElementById('birth').value;
    var email = document.getElementById('email').value;
    const login_url = "https://y2kcoders.stu.nighthawkcodingsociety.com/api/person/username";
const url = "https://y2kcoders.stu.nighthawkcodingsociety.com/api/person/post";
dob = dateFormatter(birth);
fetch(login_url)
            .then(response => response.json())
                .then(data => {
                    console.log(data);
                    for (var i = 0; i < data.length; i++) {
                        if (data[i] === username) {
                            alert("Username is already existed");
                        }
                    }
                })
    .then(data => {
        // Assuming 'data' is an array of usernames
        data.forEach(user => {
            if (user === username) {
                alert("Username already exists");
                return;
            }
        });
    })
    .catch(error => {
        console.error('Error:', error);
    });
    if(username.length === 0){
        alert("please enter your username");
        return;
    }
    if(password.length === 0){
        alert("please enter your password");
        return;
    }
    if (dob === "") {
        alert("Please write your birth");
        return;
    }
    const post_url = url + "?email=" + email + "&name=" + username + "&password=" + password + "&dob=" + dob;
    if (password == confirm_password) {
        fetch(post_url, {method: "POST", headers: {"Content-Type": "application/json"}})
            .then(response => {
                if (response.status !== 200) {
                const errorMsg = 'Database create error: ' + response.status;
                console.log(errorMsg);
                return;
                }
                // response contains valid result
                response.json().then(data => {
                    console.log(data);
                    //add a table row for the new/created userid
                })
            })
    } else {
        alert("password is not matched");
    }
}
document.getElementById('signUPbutton').addEventListener('click', signup);
</script>

