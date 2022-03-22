// $(function(){
//     setHead('田的網站', '主頁面');
// })

// function setHead(description_text,keywords_text){
//     //Add mata Tags="head"
//     let parent = document.getElementsByTagName("head")[0];
//     let meta = document.createElement("meta");
//     meta.setAttribute("charset", "utf-8");
//     meta.setAttribute("description", description_text);
//     meta.setAttribute("keywords", keywords_text);    
//     parent.appendChild(meta);

// }



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



