function addWords(obj, wrds) {
    clearObj(obj);

    let wordsArray = wrds.trim().split(' ').filter(word => !obj.words.includes(word));
    obj.words = obj.words.concat(wordsArray).join(' ');
}

function clearObj(obj) {
    let arr = obj.words.split(' ').filter(Boolean);
    let arrWithoutRepeat = [...new Set(arr)];
    delete obj.words;
    obj.words = arrWithoutRepeat;
}

function removeWords(obj, wrds) {
    clearObj(obj);
    const wordsArray = wrds.trim().split(' ').filter(Boolean);
    obj.words = (obj.words || '')
        .filter(word => !wordsArray.includes(word))
        .join(' ');
}

function changeWords(obj, oldWrds, newWrds) {
    removeWords(obj, oldWrds);
    addWords(obj, newWrds);
}