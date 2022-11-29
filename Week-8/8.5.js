const findJudge = (N, trust) => {
    let countList = {}
    let beingCountList = {}

    for (let i = 1; i <= N; i++) {
        countList[i] = 0
        beingCountList[i] = 0
    }

    for (let val of trust) {
        countList[val[0]]++;
        beingCountList[val[1]]++;
    }

    let judge = 0
    for (key in countList) {
        if (countList[key] === 0) {
            judge = key;
        }
    }

    if (beingCountList[judge] === N - 1) {
        return judge
    }
    
    else {
        return -1
    }

}

console.log(findJudge(3, [[1, 3], [2, 3]]));