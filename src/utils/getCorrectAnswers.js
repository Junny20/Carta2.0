const getCorrectAnswers = (correctAnswer) => {
    const correctWordList = correctAnswer
      .split(",")
      .map((element) => element.trim().toLowerCase());

    let finalCorrectWordList = [];

    if (correctWordList[0].includes("to ")) {
      correctWordList.forEach((element) => {
        if (element.includes("to ")) {
          finalCorrectWordList.push(element.slice(3));
        } else {
          finalCorrectWordList.push("to " + element);
        }
      });
      finalCorrectWordList.push(...correctWordList);
    } else {
      correctWordList.forEach((element) => {
        if (element.includes("(") && element.includes(")")) {
          const index = element.indexOf("(");
          finalCorrectWordList.push(element.slice(0, index).trim(), element)
        } else {
          finalCorrectWordList.push(element);
        }
      })
    }

    finalCorrectWordList.push(correctAnswer);

    if (correctAnswer.slice(-4).includes("(") && correctAnswer.slice(-4).includes(")")) {
      finalCorrectWordList.push(correctAnswer.slice(0, -5));
    }

    return finalCorrectWordList;
}

export default getCorrectAnswers;