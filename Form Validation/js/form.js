function validate() {
    const mymail =document.getElementById("mail");
    const myinfo =document.getElementById("info");
    const mydata =document.getElementById("indicate");
    const mydata1 =document.getElementById("indicate1");
    console.log(mymail.value);

    regx = /([a-zA-Z0-9]{3,15})+@+([a-zA-Z]{4,10})+\.+([a-zA-Z]{2,8})/;
  
    if(regx.test(mymail.value)){
        mydata1.innerHTML="<img src='./assets/image/right.png' height=25px><h5>Yay! Thank you</h5>"+"<h6>We've sent a confirmation link <br>to your inbox</h6>";
        mydata1.style.color="#067973";  
        mydata1.style.background="#f5fffe";   
        mydata1.style.border="1px solid #067973";
        mydata1.style.marginTop="-50px";
        mydata1.style.marginRight="100px";
        mydata1.style.width="320px";
        mymail.style.display="none"; 
        mydata.style.display="none";
        myinfo.style.display="none";
    }
    else{
        mydata.innerHTML="<img src='./assets/image/wrong.png' height=25px><h5>Please use a valid email</h5>"+"<h6>Like:person@gmail.com</h6>";
        mydata.style.color="#b71540";  
        mydata.style.background="#fdeff3";   
        mydata.style.border="1px solid #b71540";
        mydata.style.height="70px";
    }
}