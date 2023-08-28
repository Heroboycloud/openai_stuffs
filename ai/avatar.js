const fs = require('fs');
const request = require('request');
require("dotenv").config();
// Replace YOUR_API_KEY with your OpenAI API key
const API_KEY = process.env.OpenAI_API_KEY;

// Replace IMAGE_FILE with the path to the image file you want to use
const imageFile = '1.jpg';

// Read the image file into a buffer
const imageBuffer = fs.readFileSync(imageFile);

// Encode the image buffer in base64
const imageBase64 = new Buffer.from(imageBuffer).toString('base64');

// Set the request options
const options = {
  method: 'POST',
  url: 'https://api.openai.com/v1/images/generations',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${API_KEY}`
  },
  body: JSON.stringify({
    'model': 'image-alpha-001',
    'prompt': 'Generate an avatar image based on the following image:',
    'image': url
  })
};

// Send the request
request(options, function(error, response, body) {
  if (error) {
    console.log(error);
  } else {
    // The avatar image is returned as a base64-encoded string
    const avatarImageBase64 = 
    
    // Write the avatar image to a file
    fs.writeFileSync('avatar.jpg', avatarImageBase64, {encoding: 'base64'});
    
    console.log('Avatar image generated and saved to avatar.jpg');
  }
});