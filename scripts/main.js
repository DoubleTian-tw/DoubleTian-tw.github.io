// myHeading.textContent ="Hello world!";
var myImage = document.querySelector('img');
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

myImage.onclick=function(){
    // let mySrc = myImage.getAttribute('src');
    // if(mySrc === 'images/me.jpg'){
    //     myImage.setAttribute('src','images/me2.jpg');        
    // }else{
    //     myImage.setAttribute('src', 'images/me.jpg');
    // }
}

if(!localStorage.getItem('name')){
    setUserName();
}else{
    let storedName = localStorage.getItem('name');
    myHeading.innerHTML = "Wellcome to Tian's Web," + storedName;
}

myButton.onclick=function(){
    setUserName();
}

function setUserName(){
    let myName = prompt('Please enter your name');
    if(!myName || myName===null){
        setUserName();
    }else{
        localStorage.setItem('name',myName);
        myHeading.innerHTML = "Wellcome to Tian's Web," + myName;
    }
    
}