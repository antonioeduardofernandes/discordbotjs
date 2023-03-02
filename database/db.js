const mongoose = require("mongoose")
const Character = require("./characterModel")
const { dbpass } = require("../config.json")

// Connect to the database
// mongoose
//   .connect(`mongodb+srv://admin:${dbpass}@cluster0.kcqek8o.mongodb.net/?retryWrites=true&w=majority`)
//   .then(() => {
//     console.log("Connected to MongoDB")
//   })
//   .catch((err) => {
//     console.log("Unable to connect to MongoDB Database.\nError: " + err)
//   })

const newChar = new Character({
  nome: "Leone",
  jogador: 387372272849256459,
  natureza: "sobrevivente",
  comportamento: "mártir",
  essencia: "padrão",
  tradicao: "Eutanatos",
  arete: 3,
  vontade: 10,
  quintessencia: 0,
  paradoxo: 0,
  antecedentes: [{ arcanum: 3 }, { avatar: 3 }, { recursos: 1 }, { sonho: 1 }],
  atributos: {
    forca: { valor: 2, especializacoes: [] },
    destreza: { valor: 2, especializacoes: [] },
    vigor: { valor: 2, especializacoes: [] },
    carisma: { valor: 4, especializacoes: [] },
    manipulacao: { valor: 3, especializacoes: [] },
    aparencia: { valor: 3, especializacoes: [] },
    percepcao: { valor: 3, especializacoes: [] },
    inteligencia: { valor: 3, especializacoes: [] },
    raciocinio: { valor: 2, especializacoes: [] },
  },
  habilidades: {
    talentos: {
      prontidao: { valor: 1, especializacoes: [] },
      esportes: { valor: 1, especializacoes: [] },
      consciencia: { valor: 3, especializacoes: [] },
      briga: { valor: 1, especializacoes: [] },
      esquiva: { valor: 2, especializacoes: [] },
      expressao: { valor: 1, especializacoes: [] },
      intimidacao: { valor: 0, especializacoes: [] },
      lideranca: { valor: 0, especializacoes: [] },
      manha: { valor: 0, especializacoes: [] },
      labia: { valor: 0, especializacoes: [] },
    },
    pericias: {
      oficios: { valor: 0, especializacoes: [] },
      conducao: { valor: 0, especializacoes: [] },
      etiqueta: { valor: 0, especializacoes: [] },
      armas_de_fogo: { valor: 0, especializacoes: [] },
      meditacao: { valor: 3, especializacoes: [] },
      armas_brancas: { valor: 1, especializacoes: [] },
      atuacao: { valor: 0, especializacoes: [] },
      furtividade: { valor: 1, especializacoes: [] },
      sobrevivencia: { valor: 1, especializacoes: [] },
      tecnologia: { valor: 0, especializacoes: [] },
    },
    conhecimentos: {
      academicos: { valor: 3, especializacoes: [] },
      computador: { valor: 1, especializacoes: [] },
      cosmologia: { valor: 3, especializacoes: [] },
      enigmas: { valor: 2, especializacoes: [] },
      investigacao: { valor: 1, especializacoes: [] },
      direito: { valor: 0, especializacoes: [] },
      linguistica: { valor: 2, especializacoes: [] },
      medicina: { valor: 1, especializacoes: [] },
      ocultismo: { valor: 2, especializacoes: [] },
      ciencias: { valor: 1, especializacoes: [] },
    },
  },
  esferas: {
    correspondencia: { valor: 1, especializacoes: [] },
    entropia: { valor: 0, especializacoes: [] },
    forcas: { valor: 1, especializacoes: [] },
    vida: { valor: 1, especializacoes: [] },
    mente: { valor: 2, especializacoes: [] },
    materia: { valor: 0, especializacoes: [] },
    primordio: { valor: 0, especializacoes: [] },
    espirito: { valor: 2, especializacoes: [] },
    tempo: { valor: 0, especializacoes: [] },
  },
})

// newChar.save()

const getCharacter = async (id) => {
  let char = Character.find({ jogador: id })
  return char
}

const getCharacters = async () => {
  let list = Character.find()
  return list
}

module.exports = { getCharacter, getCharacters }
