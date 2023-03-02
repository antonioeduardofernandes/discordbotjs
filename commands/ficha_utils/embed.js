const { EmbedBuilder } = require("discord.js")
const { displayScore, displayTempScore, displayCheckedScore } = require("../../scripts/utils")

module.exports.embed = new EmbedBuilder()
  .setColor(0x0099ff)
  .setTitle("NOME DO PERSONAGEM")
  .setThumbnail("https://pbs.twimg.com/profile_images/982348786465820672/gE7nG5Df_400x400.jpg")
  .addFields({ name: `_Tradicao, Natureza, Comportamento_`, value: " " })
  .addFields(
    { name: "⎓⎓⎓⎓⎓⎓⎓⎓⎓⎓⎓⎓⎓⎓ Atributos ⎓⎓⎓⎓⎓⎓⎓⎓⎓⎓⎓⎓⎓", value: " " },
    {
      name: "Fisicos",
      value: `Forca ${displayScore(3)} \n Destreza ${displayScore(2)} \n Vigor ${displayScore(4)} `,
      inline: true,
    },
    {
      name: "Sociais",
      value: `Forca ${displayScore(3)} \n Destreza ${displayScore(2)} \n Vigor ${displayScore(4)} `,
      inline: true,
    },
    {
      name: "Mentais",
      value: `Forca ${displayScore(3)} \n Destreza ${displayScore(2)} \n Vigor ${displayScore(4)} `,
      inline: true,
    }
  )
  .addFields(
    { name: "⎓⎓⎓⎓⎓⎓⎓⎓⎓⎓⎓⎓⎓⎓ Habilidades ⎓⎓⎓⎓⎓⎓⎓⎓⎓⎓⎓⎓⎓", value: " " },
    {
      name: "Talentos",
      value: `Forca ${displayScore(3)}\n Destreza ${displayScore(2)}\n Vigor ${displayScore(4)}\nForca ${displayScore(
        3
      )}\n Destreza ${displayScore(2)}\n Vigor ${displayScore(4)}\nForca ${displayScore(3)}\n Destreza ${displayScore(
        2
      )}\n Vigor ${displayScore(4)}\nForca ${displayScore(3)}\n Destreza ${displayScore(2)}\n `,
      inline: true,
    },
    {
      name: "Pericias",
      value: `Forca ${displayScore(3)}\n Destreza ${displayScore(2)}\n Vigor ${displayScore(4)}\nForca ${displayScore(
        3
      )}\n Destreza ${displayScore(2)}\n Vigor ${displayScore(4)}\nForca ${displayScore(3)}\n Destreza ${displayScore(
        2
      )}\n Vigor ${displayScore(4)}\nForca ${displayScore(3)}\n Destreza ${displayScore(2)}\n `,
      inline: true,
    },
    {
      name: "Conhecimentos",
      value: `Forca ${displayScore(3)}\n Destreza ${displayScore(2)}\n Vigor ${displayScore(4)}\nForca ${displayScore(
        3
      )}\n Destreza ${displayScore(2)}\n Vigor ${displayScore(4)}\nForca ${displayScore(3)}\n Destreza ${displayScore(
        2
      )}\n Vigor ${displayScore(4)}\nForca ${displayScore(3)}\n Destreza ${displayScore(2)}\n `,
      inline: true,
    }
  )
  .addFields(
    { name: "⎓⎓⎓⎓⎓⎓⎓⎓⎓⎓⎓⎓⎓⎓ Antecedentes ⎓⎓⎓⎓⎓⎓⎓⎓⎓⎓⎓⎓⎓", value: " " },
    { name: " ", value: `Arcanum ${displayScore(4)}\n Aliados ${displayScore(2)}\n `, inline: true }
  )
  .addFields(
    { name: "⎓⎓⎓⎓⎓⎓⎓⎓⎓⎓⎓⎓⎓⎓ Esferas ⎓⎓⎓⎓⎓⎓⎓⎓⎓⎓⎓⎓⎓", value: " " },
    {
      name: " ",
      value: `Correspond ${displayScore(4)}\n Entropia ${displayScore(2)}\n Forcas ${displayScore(2)}`,
      inline: true,
    },
    {
      name: " ",
      value: `Vida ${displayScore(4)}\n Mente ${displayScore(2)}\n Materia ${displayScore(2)}`,
      inline: true,
    },
    {
      name: " ",
      value: `Primordio ${displayScore(4)}\n Espirito ${displayScore(2)}\n Tempo ${displayScore(2)}`,
      inline: true,
    }
  )
  .addFields(
    { name: "⎓⎓⎓⎓⎓⎓⎓⎓⎓⎓⎓⎓⎓⎓ Outros ⎓⎓⎓⎓⎓⎓⎓⎓⎓⎓⎓⎓⎓", value: " " },
    { name: " ", value: `Arete ${displayScore(4)}\n ` },
    { name: " ", value: `Forca de vontade 3\n (3)\n` },
    { name: " ", value: `Quintessencia 3\n Paradoxo 4\n` },
    { name: "Vitalidade", value: `Ferido(-1)` }
  )
