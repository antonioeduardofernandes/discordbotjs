const { SlashCommandBuilder, EmbedBuilder } = require("discord.js")
const baseRoll = require("../scripts/baseRoll")

module.exports = {
  data: new SlashCommandBuilder()
    .setName("rolagem")
    .setDescription("Realiza uma rolagem simples")
    .addIntegerOption((option) =>
      option.setName("dados").setDescription("Quantidade de dados da parada").setMinValue(1).setRequired(true)
    )
    .addIntegerOption((option) =>
      option.setName("dificuldade").setDescription("Dificuldade da rolagem").setMaxValue(10).setRequired(true)
    )
    .addBooleanOption((option) => option.setName("especialização").setDescription("Possui especialização na rolagem?"))
    .addBooleanOption((option) =>
      option.setName("vontade").setDescription("Deseja gastar 1 ponto de Força de Vontade?")
    )
    .addIntegerOption((option) => option.setName("modificadores").setDescription("Outros modificadores aplicáveis")),
  async execute(interaction) {
    const p = interaction.options.getInteger("dados")
    const d = interaction.options.getInteger("dificuldade")
    const s = interaction.options.getBoolean("especialização")
    const w = interaction.options.getBoolean("vontade")
    const m = interaction.options.getInteger("modificadores")

    let { pool, difficulty, baseResults, specializationResults, successes, finalResult } = baseRoll(p, d, s, w, m)

    const embed = new EmbedBuilder()
      .setColor(0x0099ff)
      .setTitle("Rolagem Simples")
      .setThumbnail("https://pbs.twimg.com/profile_images/982348786465820672/gE7nG5Df_400x400.jpg")
      .addFields(
        { name: "Parada de Dados:", value: `${pool}d10`, inline:true },
        { name: "Dificuldade:", value: `${difficulty}`, inline:true },
        { name: "Resultados:", value: `${baseResults.join(" - ")}` },
        { name: "Especialização:", value: `${s ? specializationResults.join(" - ") : "Não possui"}` },
        { name: "Sucessos Obtidos:", value: `${successes}`, inline:true },
        { name: "Gasto de Força de Vontade:", value: `${w ? "Sim" : "Não"}`, inline:true },
        { name: "A ação resultou em:", value: `${finalResult}` }
      )

    await interaction.reply({content:"", embeds: [embed] })
  },
}
