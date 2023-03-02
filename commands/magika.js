const { SlashCommandBuilder, EmbedBuilder } = require("discord.js")
const baseRoll = require("../scripts/baseRoll")

module.exports = {
  data: new SlashCommandBuilder()
    .setName("magika")
    .setDescription("Rolagem para efeitos de magika")
    .addIntegerOption((option) =>
      option.setName("arete").setDescription("Seu nível de Arete").setMinValue(1).setMaxValue(10).setRequired(true)
    )
    .addIntegerOption((option) =>
      option
        .setName("esfera")
        .setDescription("Nível da esfera mais alta do efeito")
        .setMinValue(1)
        .setMaxValue(5)
        .setRequired(true)
    )
    .addStringOption((option) =>
      option
        .setName("ambiente")
        .setRequired(true)
        .setDescription("Em que condições a mágika está sendo realizada")
        .addChoices(
          { name: "coincidente", value: "coincidente" },
          { name: "vulgar sem testemunhas", value: "vulgar_sem" },
          { name: "vulgar com testemunhas", value: "vulgar_com" }
        )
    )
    .addBooleanOption((option) => option.setName("especialização").setDescription("Possui especialização na rolagem?"))
    .addBooleanOption((option) =>
      option.setName("vontade").setDescription("Deseja gastar 1 ponto de Força de Vontade?")
    )
    .addIntegerOption((option) =>
      option
        .setName("quintessência")
        .setMaxValue(3)
        .setDescription("Quantos pontos de quintessência deseja gastar? Máx. 3")
    )
    .addIntegerOption((option) => option.setName("modificadores").setDescription("Outros modificadores aplicáveis")),

  async execute(interaction) {
    let paradoxo = 0
    let a = interaction.options.getInteger("arete")
    let d = interaction.options.getInteger("dificuldade")
    let s = interaction.options.getBoolean("especialização")
    let w = interaction.options.getBoolean("vontade")
    let m = interaction.options.getInteger("modificadores")
    let ambiente = interaction.options.getString("ambiente")
    let esfera = interaction.options.getInteger("esfera")
    let quintessencia = interaction.options.getInteger("quintessência")

    if (ambiente === "coincidente") {
      d = 3 + esfera
    }
    if (ambiente === "vulgar_sem") {
      d = 4 + esfera
    }
    if (ambiente === "vulgar_com") {
      d = 5 + esfera
    }

    if (quintessencia) {
      d -= quintessencia
    }

    let { pool, difficulty, baseResults, specializationResults, successes, finalResult } = baseRoll(a, d, s, w, m)

    if (finalResult === "falha crítica") {
      if (ambiente === "coincidente") paradoxo = esfera
      if (ambiente === "vulgar_sem") paradoxo = 1 + esfera
      if (ambiente === "vulgar_com") paradoxo = 2 + esfera * 2
    }
    if (finalResult !== "falha crítica") {
      if (ambiente === "vulgar_sem" || ambiente === "vulgar_com") {
        paradoxo = 1
      }
    }

    const embed = new EmbedBuilder()
      .setTitle("Rolagem para efeitos de magika")
      .setThumbnail("https://pbs.twimg.com/profile_images/982348786465820672/gE7nG5Df_400x400.jpg")
      .addFields(
        { name: "Parada de Dados:", value: `${pool}d10`, inline: true },
        { name: "Dificuldade:", value: `${difficulty}`, inline: true },
        { name: "Esfera mais alta:", value: `${esfera}` },
        { name: "Ambiente da magika:", value: `${ambiente}`, inline: true },
        { name: "Resultados:", value: `${baseResults.join(" - ")}` },
        { name: "Especialização:", value: `${s ? specializationResults.join(" - ") : "Não possui"}` },
        { name: "Sucessos:", value: `${successes}`, inline: true, inline: true },
        { name: "Força de Vontade?", value: `${w ? "Sim" : "Não"}`, inline: true },
        { name: "Quint. gasta:", value: `${quintessencia ? quintessencia : 0}`, inline: true },
        { name: "Paradoxo:", value: `${paradoxo}`, inline: true },
        { name: "A ação resultou em:", value: `${finalResult}` }
      )

    await interaction.reply({ content: "", embeds: [embed] })
  },
}
