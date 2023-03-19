/** Problem Number 30 on LeedCode (Hard)

  You are given a string s and an array of strings words of the same length. Return all 
 starting indices of substring(s) in s that is a concatenation of each word in words 
 exactly once, in any order, and without any intervening characters.
 */

const findSubstring = (str, words) => {

    let result = [];
    const wordCount = new Map();
    words.forEach(word => {
        if (!wordCount.get(word)) {
            wordCount.set(word, 0);
        }
        wordCount.set(word, wordCount.get(word) + 1);
    });
    let chunk = words[0].length;
    let chunkCount = words.length;
    let idxLimit = chunk * chunkCount;
    for (let i = 0; i <= str.length - idxLimit; i += 1) {
        let wordsCopy = new Map(wordCount);
        for (let j = 0; j < chunkCount; j += 1) {
            let curChunk = str.slice(i + j * chunk, i + j * chunk + chunk)
            let numOccurences = wordsCopy.get(curChunk);

            if (!numOccurences) {
                break;
            }
            wordsCopy.set(curChunk, wordsCopy.get(curChunk) - 1);

            if (j === chunkCount - 1) {
                result.push(i);
            }
        }
    }
    return result;
};