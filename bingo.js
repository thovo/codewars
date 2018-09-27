function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}

function getCard() {
    let BCol = new Set();
    let ICol = new Set();
    let NCol = new Set();
    let GCol = new Set();
    let OCol = new Set();
    while(BCol.length < 5){
        BCol.add(getRandomArbitrary(1,15));
    }
    while(ICol.length < 5){
        ICol.add(getRandomArbitrary(16,30));
    }
    while(GCol.length < 5){
        GCol.add(getRandomArbitrary(31,45));
    }
    while(NCol.length < 5){
        NCol.add(getRandomArbitrary(46,60));
    }
    while(OCol.length < 5){
        OCol.add(getRandomArbitrary(61,75));
    }

    
}