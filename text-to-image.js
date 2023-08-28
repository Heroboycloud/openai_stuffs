const openai = require('openai');

openai.apiKey = "YOUR_API_KEY";

async function createImageText(prompt,format,size, language="en"){
let response= await openai.Completion.create({
  model: "image-alpha-001",
  prompt: "A tree with a swing hanging from one of its branches",
   format: format, //to specify the format of the generated image. Possible values are png, jpeg, and svg.
   size: size,
   language: language,// English, French, German, Spanish, and more.
   style : style, /* supports a variety of styles, including abstract, cartoon, impressionist, and more. abstract: Abstract style
cartoon: Cartoon style
realistic: Realistic style
impressionist: Impressionist style
watercolor: Watercolor style
sketch: Sketch style */
   temperature: 0,
   n: 1,
  max_tokens: 256,
}, function(error, response) {
  if (error) {
    console.log(error);
  } else {
    console.log(response.data.url);
  }
}
function saveFile(url,path){
  /*Instead of just displaying the URL of the generated image, you can use the Node.js fs module to save the image to a file. You can use the request module to download the image and the fs.writeFile method to save it to a file. */
}