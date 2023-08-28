const openai = require('openai');

openai.apiKey = "YOUR_API_KEY";

const createNewsletter = (prompt, maxTokens) => {
  openai.Completion.create({
    model: "text-davinci-002",
    prompt: prompt,
    max_tokens: maxTokens,
  }, function(error, response) {
    if (error) {
      console.log(error);
    } else {
      console.log(response.text);
    }
  });
}

// Example usage: create a newsletter with a prompt of "Top stories this week" and a maximum of 1000 tokens
createNewsletter("Top stories this week", 1000);