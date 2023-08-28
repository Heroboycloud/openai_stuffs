const openai = require('openai');

openai.apiKey = "YOUR_API_KEY";

const stock = "AAPL";
const period = "1d";

openai.Completion.create({
  model: "davinci",
  prompt: `What will be the price of ${stock} stock in the next ${period}?`,
  max_tokens: 256,
}, function(error, response) {
  if (error) {
    console.log(error);
  } else {
    console.log(response.text);
  }
});