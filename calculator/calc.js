
let tr = ' ';
const addData = (i) => {
    tr += i;
    let a = tr.charAt(0)
    if
        (a == '' || a == '+' || a == '*' || a == '/') {
        tr = '';
        return;
    } else {
        document.getElementById("no").value = tr;
    }

}

function getans() {
    let data = document.getElementById("no").value;
    let ans = eval(data);
    document.getElementById("no").value = ans;
    tr = '';
}

function clearall() {
    document.getElementById("no").value = 0;
    tr = '';
}

function deleteData() {
    document.getElementById("no").value = document.getElementById("no").value.toString().slice(0, -1);
}