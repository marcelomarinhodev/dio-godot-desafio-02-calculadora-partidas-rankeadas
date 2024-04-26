function getPlayerScore(numWins, numLoses) {
    return numWins - numLoses;
}

function getRank(score) {
    if (score <= 10) return "Ferro";
    else if (score <= 20) return "Bronze";
    else if (score <= 50) return "Prata";
    else if (score <= 80) return "Ouro";
    else if (score <= 90) return "Diamante";
    else if (score <= 100) return "Lendário";
    else return "Imortal";
}

function getMessage(score, rank) {
    return `O Herói tem de saldo de ${score} está no nível de ${rank}`;
}

function printPlayerRankMessage(numWins, numLoses) {
    let score = getPlayerScore(numWins, numLoses);
    let rank = getRank(score);
    console.log(getMessage(score, rank));
}

printPlayerRankMessage(10, 4);
printPlayerRankMessage(20, 4);
printPlayerRankMessage(30, 4);
printPlayerRankMessage(40, 4);
printPlayerRankMessage(50, 4);
printPlayerRankMessage(60, 4);
printPlayerRankMessage(70, 4);
printPlayerRankMessage(80, 4);
printPlayerRankMessage(90, 4);
printPlayerRankMessage(100, 4);
printPlayerRankMessage(110, 4);
printPlayerRankMessage(1, 4);
printPlayerRankMessage(10, 0);