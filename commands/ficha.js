const { SlashCommandBuilder } = require("discord.js")
const { getCharacter, getCharacters } = require("../database/db")
const { embed } = require("./ficha_utils/embed")

let characters = [
  { name: "fulano", value: "one" },
  { name: "ciclano", value: "two" },
  { name: "beltrano", value: "three" },
]

let data = new SlashCommandBuilder()
  .setName("sheet")
  .setDescription("Ficha de personagem")
  .addStringOption((option) => option.setName("personagens").setRequired(true).setDescription(`Categories`))

characters.forEach((cat) => {
  data.options[0].addChoices(cat)
})

module.exports = {
  data: data,
  async execute(interaction) {
    await interaction.reply({ content: "", embeds: [embed] })
  },
}
