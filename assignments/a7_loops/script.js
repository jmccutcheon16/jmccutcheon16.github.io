let count = 0;
function moveMan() {
    let man = document.getElementById('man');
    count += 20;
    //man.style.marginLeft += 20 + 'px';
    man.style.marginLeft = count + 'px';

    console.log('working');
}

let totalFunds = 0;
let funds = document.getElementById('funds-raised-input');
let fundsBar = document.getElementsByClassName('bar');
function fundRaising() {
    if (document.getElementById('display-funds')) {
        totalFunds += funds;
    }
    console.log(totalFunds);
    fundsBar.style.append(
        'background: linear-gradient(0deg,rgba(255, 0, 0, 1) ' +
            funds +
            '%,rgba(255, 0, 0, 1) 0%,rgba(255, 255, 255, 1) 0%,rgba(255, 255, 255, 1) 0%)'
    );
}

man = document.getElementById('man');
man.onclick = moveMan;
