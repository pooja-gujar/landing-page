let user=document.getElementById("user")
let loginbtn=document.getElementById("loginbtn")
let place=document.getElementById("place")
let submit=document.getElementById("submit")

user.addEventListener("click",function(){
    document.querySelector(".loginpage").classList.toggle("active");
})
loginbtn.addEventListener(click,function()
{
    let Email=document.getElementById("Email");
    let pass=document.getElementById("pass");
    if(Email.value=="" && pass.value==""){
        alert("please fill details")
    }
    else{
        alert("You logged in")
        document.querySelector(".loginpage").style.display="none"
    }

})

submit.addEventListener("click",function(){
    if(submit.value=""){
        alert("fill form")
    }
    else(submit.value+"Tour Booked")
})