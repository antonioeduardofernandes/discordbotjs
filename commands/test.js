const { SlashCommandBuilder } = require("discord.js")

const categories = [
  { name: "commands", value: "commands" },
  { name: "weebpack", value: "weebpack" },
  { name: "games", value: "games" },
  { name: "bot", value: "bot" },
  { name: "config", value: "config" },
]

let data = new SlashCommandBuilder()
  .setName("teste")
  .setDescription("Display bot commands")
  .addStringOption((option) => option.setName("category").setDescription(`Categories`))

categories.forEach((cat) => {
  data.options[0].addChoices(cat)
})

module.exports = {
  data: data,
  async execute(interaction) {
    await interaction.reply({ content: "" })
  },
}
