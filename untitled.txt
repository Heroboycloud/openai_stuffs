const openai = require('openai');

openai.apiKey = "YOUR_API_KEY";

// Set the text to be converted to speech
const text = "Hello, welcome to the text-to-speech app powered by the OpenAI API.";

// Set the voice to use for the speech
const voice = "samantha";

openai.Synthesis.create({
  engine: "davinci",
  prompt: text,
  voice: voice
}, function(error, response) {
  if (error) {
    console.log(error);
  } else {
    console.log(response.data.url);
  }
});
/* The OpenAI API supports a variety of voices for text-to-speech synthesis, including:

davinci: A male voice with an American accent.
samantha: A female voice with an American accent.
davinci_high_fidelity: A male voice with an American accent, optimized for high-fidelity audio.
samantha_high_fidelity: A female voice with an American accent, optimized for high-fidelity audio. */