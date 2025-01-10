let idList = [];
let awarded = [];
let N = 0;

ids = document.getElementById("IDs");
randButton = document.getElementById("rand");
delButton = document.getElementById("del");
result = document.getElementById("results");

function outputStr() {
    let str = "";
    for (let i = 0; i < awarded.length; i++) {
        str += awarded[i] + "<br/>";
    }
    return str;
}

ids.onchange = function getID() {
    str = this.value;
    idList = str.trim().split(/\s+/);
    N = idList.length;
}

delButton.onclick = function del() {
    if (awarded.length > 0) {
        idList.push(awarded.pop());
        N += 1;
        result.innerHTML = outputStr();
    }
}

randButton.onclick = function rand() {
    if (idList.length > 0) {
        award = Math.floor(Math.random() * N);
        awarded.push(idList[award]);
        if (award == 0) {
            idList.shift();
        } else if (award == N - 1) {
            idList.pop();
        } else {
            idList = idList.slice(0, award).concat(idList.slice(award + 1, N));
        }
        N -= 1;
        result.innerHTML = outputStr();
    }
}