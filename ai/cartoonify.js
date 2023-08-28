const { Configuration, OpenAIApi } = require("openai");
require('dotenv').config();
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

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
console.log(completion.data.choices[0].text);

  
  return completion.data.choices;
  
}

