/*
Function uses (read,write) to select text input and output elements 
#read: text input element's ID, #write: text output element's ID
*/

const chatGPT = async (read, write) => {

  // Select input text area element with query selector
  var payload = { body: document.querySelector('#' + read).value }

  // ChatGPT API endpoint on AWS Lambda
  await fetch('https://5j6m7iqxyvecntpl6g3ncsbk6m0zwdxo.lambda-url.us-east-1.on.aws/',
    {
      method: 'POST',
      headers: {
        'Accept': 'application.json',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      },
      body: JSON.stringify(payload),
    })
    .then(response => response.json())
    .then(data => {
      document.querySelector('#' + write).innerHTML = data['body']
    })
}