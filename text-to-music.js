const openai = require('openai');

openai.apiKey = "YOUR_API_KEY";

const prompt = "A romantic song about love and longing";

openai.Completion.create({
  openai.Completion.create({
  model: "music-alpha-001",
  prompt: prompt,
  max_tokens: 2048,
}, function(error, response) {
  if (error) {
    console.log(error);
  } else {
    console.log(response.text);
  }
});