let myHeader = document.getElementById("my-header");
myHeader.innerHTML = "Penguins";

let btnBoy = document.getElementById("btn-boy");
function ShowBoy()
{
    let title = document.getElementById("title");
    title.innerHTML = "Boys";
    let item1 = document.getElementById("item1");
    item1.innerHTML = ("Trucks");
    let item2 = document.getElementById("item2");
    item2.innerHTML = ("Trains");
    let item3 = document.getElementById("item3");
    item3.innerHTML = ("Tools");

    console.log("Boy Function");
}

let btnGirl = document.getElementById("btn-girl");
function ShowGirl()
{
    let titles = document.getElementById("title").innerHTML = "Girls";
    let item1 = document.getElementById("item1").innerHTML = "g1";
    let item2 = document.getElementById("item2").innerHTML = "g2";
    let item3 = document.getElementById("item3").innerHTML = "g3";
}

btnBoy.onclick = ShowBoy;

btnGirl.onclick = ShowGirl;


function emoji()
{
    let smile = document.getElementById("smile");
    let frown = document.getElementById("frown");
    
    console.log("emoji");
}
smile.onclick = frown;