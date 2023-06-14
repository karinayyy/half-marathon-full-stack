const houseMixin = {
    wordReplace(wordToReplace, newWord) {
        this.description = this.description.replace(wordToReplace, newWord);
    },
    wordInsertAfter(wordToFind, wordToInsert) {
        this.description = this.description.replace(
            wordToFind,
            wordToFind + " " + wordToInsert
        );
    },
    wordDelete(wordToDelete) {
        this.description = this.description.replace(wordToDelete, "");
    },
    wordEncrypt() {
        this.description = this.description.replace(/[A-Za-z]/g, (char) => {
            let encryptedChar = char.charCodeAt(0) + 13;
            if (
                (char <= "Z" && encryptedChar > "Z".charCodeAt(0)) ||
                (char <= "z" && encryptedChar > "z".charCodeAt(0))
            ) {
                encryptedChar -= 26;
            }
            return String.fromCharCode(encryptedChar);
        });
    },
    wordDecrypt() {
        this.description = this.description.replace(/[A-Za-z]/g, (char) => {
            let decryptedChar = char.charCodeAt(0) - 13;
            if (
                (char >= "A" && decryptedChar < "A".charCodeAt(0)) ||
                (char >= "a" && decryptedChar < "a".charCodeAt(0))
            ) {
                decryptedChar += 26;
            }
            return String.fromCharCode(decryptedChar);
        });
    },
};
