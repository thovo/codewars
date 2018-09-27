function toWeirdCase(string) {
    return Array.prototype.map.call(string, (e, i) => {
        let result = [];
        let fakeIndex = i;
        if (e === " ") {
            result.push(e);
            fakeIndex +=1;
        }
        else if (fakeIndex % 2 === 0) result.push(e.toUpperCase());
        else result.push(e.toLowerCase());
        return result;
    }).join(""); 
}
toWeirdCase("This is a test");