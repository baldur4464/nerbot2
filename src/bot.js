require('dotenv').config();
const { Client } = require('discord.js');
const { registerCommands, registerEvents } = require('./utils/registry');
const client = new Client();
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/djsdashboard', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
(async () => {
  client.commands = new Map();
  client.events = new Map();
  await registerCommands(client, '../commands');
  await registerEvents(client, '../events');
  await client.login(process.env.DISCORD_BOT_TOKEN);
})();

