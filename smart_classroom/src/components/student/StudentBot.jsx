import React from 'react'
import './StudentBot.css'
function StudentBot() {
    

function sendMessage() {
const apiKey = "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"; //shaloo api
// const apiKey = "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"; //prem key
// const apiKey ="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";
  var message = document.getElementById("message-input");
  if (!message.value) {
    message.style.border = "1px solid red";
    return;
  }
  message.style.border = "none";

  var status = document.getElementById("status");
  var btnSubmit = document.getElementById("btn-submit");

  status.style.display = "block";
  status.innerHTML = "@smartclassroom is writing....";
  btnSubmit.disabled = true;
  btnSubmit.style.cursor = "not-allowed";
  message.disabled = true;

  fetch("https://api.openai.com/v1/completions", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model: "text-davinci-003",
      prompt: message.value,
      max_tokens: 2048,
      temperature: 0.5,
    }),
  })
    .then((response) => response.json())
    .then((response) => {
      let r = response.choices[0]["text"];
      status.style.display = "none";
      showHistory(message.value, r);
    })
    .catch((e) => {
      console.log(`Error -> ${e}`);
      status.innerHTML = "Please make sure about your access key is all set";
    })
    .finally(() => {
      btnSubmit.disabled = false;
      btnSubmit.style.cursor = "pointer";
      message.disabled = false;
      message.value = "";
    });
}

function showHistory(message, response) {
  var historyBox = document.getElementById("history");

  // My message
  var boxMyMessage = document.createElement("div");
  boxMyMessage.className = "box-my-message";

  var myMessage = document.createElement("p");
  myMessage.className = "my-message";
  myMessage.innerHTML = message;

  boxMyMessage.appendChild(myMessage);

  historyBox.appendChild(boxMyMessage);

  // Response message
  var boxResponseMessage = document.createElement("div");
  boxResponseMessage.className = "box-response-message";

  var chatResponse = document.createElement("p");
  chatResponse.className = "response-message";
  chatResponse.innerHTML = response;

  boxResponseMessage.appendChild(chatResponse);

  historyBox.appendChild(boxResponseMessage);

  // Levar scroll para o final
  historyBox.scrollTop = historyBox.scrollHeight;
}

  return (
    <div className='bot-main'>
        <div className="box-questions">
      <div className="header-bot">
        <h4>Smart classroom Student Bot</h4>
      </div>
      <p id="status"></p>
      <div id="history"></div>
      <div className="footer-bot">
        <input
          type="text"
          id="message-input"
          placeholder="@smartclassroom is ready to help"
        />
        <button className="btn-submit button-bot" id="btn-submit" onClick={sendMessage}>
          Send Doubt
        </button>
      </div>
    </div>
    </div>
  )
}

export default StudentBot