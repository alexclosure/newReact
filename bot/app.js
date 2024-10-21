import { Telegraf, Markup } from "telegraf";
const token = "7678121966:AAGGyK7XgBCVaAH_KEZe0Z_4QWi429YdeFc";
const webAppURL = "https://lizard-pro.web.app/";

const bot = new Telegraf(token);

bot.command("start", (ctx) => {
  ctx.reply(
    "Салам аллейкум",
    Markup.inlineKeyboard([
      Markup.button.webApp("Жмав", `${webAppURL}?ref=${ctx.payload}`),
    ])
  );
});
bot.launch();
