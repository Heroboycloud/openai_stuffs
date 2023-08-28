const openai = require('openai');

openai.apiKey = "YOUR_API_KEY";

// Load the image to be recognized
const imageData = fs.readFileSync("image.jpg");

// Use the OpenAI API to recognize objects in the image
openai.ImageModel.create({
  model: "image-alpha-001",
  data: Buffer.from(imageData).toString("base64"),
}, function(error, response) {
  if (error) {
    console.log(error);
  } else {
    console.log(response.data.captions);
  }
});