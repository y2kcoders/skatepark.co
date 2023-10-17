---
layout: default
permalink: /chat-board
title: Chat Board
---


# Chat Board
<html>
<head>
  <style>

    .chatbox {
      width: 710px;
      background-color: #597377;
      border-radius: 20px;
      padding: 20px;
      box-shadow: 8px 8px 16px #171717, -8px -8px 16px #171717;
      margin: auto;
      display: flex;
      flex-direction: column-reverse;
      position: absolute;
      top: 100px;
    }
    
    .message {
      margin-bottom: 10px;
      position: relative;
    }
    
    .user {
      color: #9BC53D;
      font-weight: bold;
      display: inline-block;
    }
    
    .user-message {
      display: inline-block;
      margin-left: 5px;
    }
    
    .timestamp {
      font-size: 0.8em;
      color: #888;
      position: absolute;
      right: 0;
      bottom: 0;
    }
    
    input[type="text"] {
      width: 95%;
      padding: 12px;
      border: none;
      border-radius: 10px;
      background-color: #f7f7f7;
      box-shadow: inset 6px 6px 12px #d9d9d9, inset -6px -6px 12px #597377;
    }
    
    button {
      padding: 12px;
      margin-top: 10px;
      background-color: #404E4D;
      color: #fff;
      border: none;
      border-radius: 10px;
      cursor: pointer;
      box-shadow: 6px 6px 12px #404E4D, -6px -6px 12px #404E4D;
      width: 30%;
    }

    .username-box {
      width: 300px;
      background-color: #597377;
      border-radius: 20px;
      padding: 20px;
      box-shadow: 8px 8px 16px #171717, -8px -8px 16px #171717;
      position: absolute;
      top: 793px;
      left: 110%;
    }

    .username-input {
      width: 95%;
      padding: 8px;
      border: none;
      border-radius: 10px;
      background-color: #fff;
      box-shadow: inset 4px 4px 8px #597377, inset -4px -4px 8px #597377;
    }

    .submit-username {
      padding: 8px;
      background-color: #404E4D;
      color: #fff;
      border: none;
      border-radius: 10px;
      cursor: pointer;
      box-shadow: 4px 4px 8px #404E4D, -4px -4px 8px #404E4D;
    }
  </style>
</head>
<body>
  <div class="chatbox">
    <div id="messages">
    </div>
    <div>
      <input type="text" id="input-message" placeholder="Type your message..." />
      <button onclick="sendMessage()">Send</button>
    </div>
  </div>

  <div class="username-box">
    <input type="text" id="username-input" placeholder="Enter your username..." />
    <button class="submit-username" onclick="submitUsername()">Submit</button>
  </div>
  

  <script>
    function sendMessage() {
      // Retrieve the input message
      var inputMessage = document.getElementById('input-message').value;

      // Clear the input field
      document.getElementById('input-message').value = '';

      // Create a new message element
      var messageElement = document.createElement('div');
      messageElement.classList.add('message');

      // Create user element
      var userElement = document.createElement('span');
      userElement.classList.add('user');
      userElement.textContent = getSelectedUsername() + ': ';

      // Create user message element
      var userMessageElement = document.createElement('span');
      userMessageElement.classList.add('user-message');
      userMessageElement.textContent = inputMessage;

      // Create timestamp element
      var timestampElement = document.createElement('span');
      timestampElement.classList.add('timestamp');
      timestampElement.textContent = getCurrentTime();

      // Append user, user message, and timestamp elements to the message element
      messageElement.appendChild(userElement);
      messageElement.appendChild(userMessageElement);
      messageElement.appendChild(timestampElement);

      // Append the message element to the messages container
      var messagesContainer = document.getElementById('messages');
      messagesContainer.appendChild(messageElement);

      // Check the number of messages and delete the oldest if more than 21
      var messages = messagesContainer.getElementsByClassName('message');
      if (messages.length > 19) {
        messagesContainer.removeChild(messages[0]);
      }

      // Scroll to the bottom to show the latest message
      messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }

    function submitUsername() {
      var username = document.getElementById('username-input').value;
      localStorage.setItem('selectedUsername', username);
    }

    function getSelectedUsername() {
      return localStorage.getItem('selectedUsername') || 'Anonymous';
    }

    function getCurrentTime() {
      var now = new Date();
      var hours = now.getHours();
      var minutes = now.getMinutes();
      var ampm = hours >= 12 ? 'PM' : 'AM';
      hours = hours % 12;
      hours = hours ? hours : 12;
      minutes = minutes < 10 ? '0' + minutes : minutes;
      var currentTime = hours + ':' + minutes + ' ' + ampm;
      return currentTime;
    }
  </script>
</body>
</html>


