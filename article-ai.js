const openai = require('openai');

openai.apiKey = "YOUR_API_KEY";
openai.Completion.create({
  model: "davinci",
  prompt: "Write an article about the benefits of exercise",
  max_tokens: 2048,
}, function(error, response) {
  if (error) {
    console.log(error);
  } else {
    console.log(response.data.text);
  }
});