const { Configuration, OpenAIApi } = require("openai");
require('dotenv').config();
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

const cartoonifyParams = {
"model": "image-alpha-001",
"prompt": "Cartoonify the following image:",
"image": imageUrl
}


async completeText(prompt){
const completion = await openai.createCompletion({
  model: "text-davinci-002",
  prompt: "Hello world",
  temperature: 0.6
}
{
  timeout: 1000
}
 );
console.log(response.data.url);

  
  return completion.data.choices;
  
}

