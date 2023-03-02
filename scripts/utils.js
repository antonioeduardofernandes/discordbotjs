// define scores as circles
let displayScore = (s) => {
    let score = ""
    for (let i = 0; i < s; i++) {
      score += "●"
    }
    return score
  }

  // define temporary scores as squares
  let displayTempScore = (s) => {
    let score = ""
    for (let i = 0; i < s; i++) {
      score += "□"
    }
    return score
  }

  // define temporary scores as squares
  let displayCheckedScore = (s) => {
    let score = ""
    for (let i = 0; i < s; i++) {
      score += "☒"
    }
    return score
  }

  module.exports = {displayScore,displayTempScore, displayCheckedScore}