const openai = require('openai');

openai.apiKey = "YOUR_API_KEY";

// Set the model and prompt for the API call
const model = "davinci-002";
const prompt = "List the top 5 news stories from the past week";

openai.Completion.create({
  model: model,
  prompt: prompt,
  max_tokens: 256,
}, function(error, response) {
  if (error) {
    console.log(error);
  } else {
    // Split the response into an array of news stories
    const newsStories = response.text.split("\n");

    // Print the top 5 news stories
    console.log("Top 5 news stories from the past week:");
    for (let i = 0; i < 5; i++) {
      console.log(`${i + 1}. ${newsStories[i]}`);
    }
  }
});