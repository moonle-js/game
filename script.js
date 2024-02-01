var cow = document.querySelector('#cow');
var comment = document.querySelector('#comment');

// Baku city
var Baku ={
    name: "Baku",
    left: "20%",
    top: "1"
}
document.querySelector('#Baku').style.left = Baku.left;
document.querySelector('#Baku').style.top = Baku.top;
// End of baku city


var London = {
    name: "London",
    left: "20%",
    top: "60%"
}
document.querySelector('#London').style.left = London.left;
document.querySelector('#London').style.top = London.top;
// End of baku city

var Moscow = {
    name: "London",
    left: "60%",
    top: "40%"
}
document.querySelector('#Moscow').style.left = Moscow.left;
document.querySelector('#Moscow').style.top = Moscow.top;
// End of baku city



function goToCity(name){
    fetch(`https://api.openweathermap.org/data/2.5/weather?&appid=00515cd91cf4d63f75d631d7dd68ded4&q=${name}`)
    .then(data => data.json())
    .then(data => comment.innerHTML = `${data.weather[0].main}`)
}

function Izlerigoster(){
    var baslangicYoxu  = Number(cow.style.left.slice(0,cow.style.left.length-1));
    var baslangicXoxu  = Number(cow.style.top.slice(0,cow.style.top.length-1));
    console.log(baslangicYoxu, baslangicXoxu);

    for(let i = 0; i <= baslangicYoxu-2; i+=5){
        var noqte = document.createElement("span");
        noqte.style.background = "white";
        noqte.style.width = "20px";
        noqte.style.borderRadius = "20px";
        noqte.style.height = "20px";
        noqte.style.zIndex = "150";
        noqte.style.position = "absolute";
        noqte.style.left = `${i}%`;
        comment.style.left = `${i+15}%`;
        noqte.style.top = `50px`;
        comment.style.top = `0px`;
        document.querySelector('.images').append(noqte); 
        console.log(noqte);

    }

    for(let i = 10; i <= baslangicXoxu-2; i+=5){
        var noqte = document.createElement("span");
        noqte.style.background = "white";
        noqte.style.width = "20px";
        noqte.style.borderRadius = "20px";
        noqte.style.height = "20px";
        noqte.style.zIndex = "150";
        noqte.style.position = "absolute";
        noqte.style.left = `${Number(cow.style.left.slice(0,cow.style.left.length-1))+ 2}%`;
        comment.style.left = `${Number(cow.style.left.slice(0,cow.style.left.length-1))+ 10}%`;
        noqte.style.top = `${i}%`;
        comment.style.top = `${i+5}%`;
        document.querySelector('.images').append(noqte); 
        console.log(noqte);

    }

}

document.querySelectorAll('.city').forEach(function(e){
    e.addEventListener('click', function(){
        
        cow.style.left = document.querySelector(`#${e.id}`).style.left;
        cow.style.top = document.querySelector(`#${e.id}`).style.top;
        cow.style.zIndex = "100";
        Izlerigoster()        
        goToCity(this.id);
        

    })
})