const baseRoll = (pool, difficulty, specialization = false, will = false, modifiers = 0) => {
  finalResult = ""
  successes = will ? 1 : 0
  baseResults = []
  specializationResults = []

  for (let i = 0; i < pool; i++) {
    let roll = Math.floor(Math.random() * 10) + 1
    baseResults.push(roll)

    if (specialization) {
      while (roll === 10) {
        roll = Math.floor(Math.random() * 10) + 1
        specializationResults.push(roll)
      }
    }
  }

  baseResults.forEach((result) => {
    if (result >= difficulty) ++successes
    if (result === 1) --successes
  })
  specializationResults.forEach((result) => {
    if (result >= difficulty) ++successes
    if (result === 1) --successes
  })

  if (successes > 0) finalResult = "sucesso"
  if (successes === 0) finalResult = "falha"
  if (successes < 0) finalResult = "falha crítica"

  return { pool, difficulty, baseResults, specializationResults, successes, finalResult }
}

module.exports = baseRoll
