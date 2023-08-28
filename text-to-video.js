const openai = require('openai');

openai.apiKey = "YOUR_API_KEY";

const text = "This is the text that you want to convert into a video.";

openai.Completion.create({
  model: "davinci",
  prompt: `Create a video from the following text: "${text}"`,
  max_tokens: 2048,
  temperature: 0.8,
  frequency_penalty: 0,
  presence_penalty: 0,
  top_p: 1,
}, function(error, response) {
  if (error) {
    console.log(error);
  } else {
    console.log(response.data.url);
  }
});