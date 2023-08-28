const openai = require('openai');

openai.apiKey = "YOUR_API_KEY";

const translate = async (text, sourceLanguage, targetLanguage) => {
  try {
    // Use the OpenAI API to translate the text
    const response = await openai.Translation.create({
      model: "text-davinci-002",
      prompt: text,
      temperature: 0.7,
      top_p: 1,
      max_tokens: 2048,
      n: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
      stop: ".",
      source_language: sourceLanguage,
      target_language: targetLanguage,
    });

    // Return the translated text
    return response.data.choices[0].text;
  } catch (error) {
    console.error(error);
  }
};

// Example usage: translate "Hello, world!" from English to French
translate("Hello, world!", "en", "fr").then(translatedText => console.log(translatedText));