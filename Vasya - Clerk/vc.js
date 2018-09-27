
let tickets = (peopleInLine) => {
    const pocket = {
        bill25: 0,
        bill50: 0
    };
    let answer  = 'YES';
    for (let index = 0; index < peopleInLine.length; index++) {
        const bill = peopleInLine[index];
        const change = bill - 25;
        if (change === 25) {
            if (pocket.bill25 === 0) {
                answer = 'NO';
                break;
            } else {
                pocket.bill25 -= 1;
            }
        }
        if (change === 50) {
            if (pocket.bill50 === 0 && pocket.bill25 <= 1) {
                answer = 'NO';
                break;
            } else if (pocket.bill50 >= 1) {
                pocket.bill50 -= 1;
            } else if (pocket.bill25 >= 2) {
                pocket.bill25 -= 2;
            }
        }
        if (change === 75) {
            if ((pocket.bill50 === 0 && pocket.bill25 <= 2) || (pocket.bill50 >= 1 && pocket.bill25 === 0)) {
                answer = 'NO';
                break;
            } else if (pocket.bill50 >= 1 && pocket.bill25 >= 1) {
                pocket.bill50 -= 1;
                pocket.bill25 -= 1;
            } else if (pocket.bill25 >= 3) {
                pocket.bill25 -= 3;
            }
        }
        if (bill === 25) {
            pocket.bill25 += 1;
        }
        if (bill === 50) {
            pocket.bill50 += 1;
        }
    }
    return answer;
};

module.exports = tickets;
