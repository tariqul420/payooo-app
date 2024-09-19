document.getElementById("button-login").addEventListener("click",function(event){
    event.preventDefault();

    const phoneNumber = document.getElementById("phone-number").value;
    const pinNumber = document.getElementById("pin-number").value;
    if(phoneNumber === "01743892058" && pinNumber === "1234"){
        window.location.href = "../html/home.html"
    }else{
        alert("Wrong phone Number of Pin Number")
    }
});