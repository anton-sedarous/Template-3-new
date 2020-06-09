//Start Header Button Hover ..

function HoverButton()
{
    document.getElementById("butt").style.backgroundColor="080";
}

function Hover()
{
    document.getElementById("butt").style.backgroundColor="#00BCBA";
}
//End Header Button Hover ..




//Start Magna Learn More Button (show & hidden) .. 

function show ()
{
    document.getElementById("click").style.visibility = "visible";
}

function hide ()
{
    document.getElementById("click").style.visibility = "hidden";
}
//End Magna Learn More Button (show & hidden) .. 





//Pharetra Hover ..
 var a = 0 ;
function Hovered1()
{
    a = a+1 ;
    document.getElementById("img1").innerHTML = a;
}

var b = 0 ;
function Hovered2()
{
    b = b+1 ;
    document.getElementById("img2").innerHTML = b;
}

var c = 0 ;
function Hovered3()
{
    c = c+1 ;
    document.getElementById("img3").innerHTML = c;
}
//End Pharetra Hover ..




// Start Form Color & underline
function clc1(){
    document.getElementById("clicks1").style.color = "#f50";
    document.getElementById("clicks1").style.textDecoration = "underline";
}
function clc2(){
    document.getElementById("clicks2").style.color = "#f50";
    document.getElementById("clicks2").style.textDecoration = "underline";
}
function clc3(){
    document.getElementById("clicks3").style.color = "#f50";
    document.getElementById("clicks3").style.textDecoration = "underline";
}
function clc4(){
    document.getElementById("clicks4").style.color = "#f50";
    document.getElementById("clicks4").style.textDecoration = "underline";
}
function clc5(){
    document.getElementById("clicks5").style.color = "#f50";
    document.getElementById("clicks5").style.textDecoration = "underline";
}
// End Form Color & underline



// Start Valid
function valid(){
   var t = prompt("Name:...");
    if(t =="tony")
    {
        window.location = "index.html"
    }
    else
    {
        alert("Wrong!!");
    }
}
// End Valid

