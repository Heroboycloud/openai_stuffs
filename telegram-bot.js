const Telegraf = require('telegraf');
const bot = new Telegraf('YOUR_BOT_TOKEN');
bot.hears('hello', (ctx) => {
  ctx.reply('Hello there! How are you doing?');
});
bot.command('start', (ctx) => {
  ctx.reply('Welcome to my bot! Here are some commands you can use: /help, /about');
});
bot.launch();
const keyboard = Telegraf.Extra
  .markdown()
  .markup((m) => m.keyboard([
    m.callbackButton('Button 1', 'button1'),
    m.callbackButton('Button 2', 'button2'),
    m.callbackButton('Button 3', 'button3'),
  ]));

bot.command('keyboard', (ctx) => {
  ctx.reply('Here is a keyboard with some buttons:', keyboard);
});
const menu = Telegraf.Extra
  .markdown()
  .markup((m) => m.inlineKeyboard([
    m.callbackButton('Menu item 1', 'item1'),
    m.callbackButton('Menu item 2', 'item2'),
    m.callbackButton('Menu item 3', 'item3'),
  ]));

bot.command('menu', (ctx) => {
  ctx.reply('Here is a menu with some items:', menu);
});
bot.on('inline_query', (ctx) => {
  // Get the inline query text
  const query = ctx.update.inline_query.query;

  // Perform a search using the query text
  const results = search(query);

  // Convert the search results into inline query results
const inlineQueryResults = results.map((result) => {
    return {
      type: 'article',
      id: result.id,
      title: result.title,
      input_message_content: {
        message_text: result.description,
      },
    };
  });