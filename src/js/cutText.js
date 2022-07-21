function cutText() {
    const name = document.querySelectorAll(".info__full");
    const desc = document.querySelectorAll(".info__text");
    let done = "true";

    invokeForElem(name);
    invokeForElem(desc);

    function invokeForElem(nodeList) {
        let arr = Array. from(nodeList);
        
        for(let element in arr) {
            if(arr[element].clientHeight > 24) {
                filterText(arr[element]);
            }
        }
    }

    function filterText(elem) {
        let nameText = elem.textContent;
        let newWord = "";
        done = "true";
        
        for(let i = 0; nameText.length - 3 > i; i++) {
            newWord += nameText[i];
        }

        elem.textContent = newWord;

        if(elem.clientHeight > 24) {
            filterText(elem);
        }

        if(elem.clientHeight == 24 && done) {
            newWord = newWord.substring(0, newWord.length - 3);
            newWord += "..."; 
            elem.textContent = newWord;
            done = false;
        }
    }
}

export default cutText;