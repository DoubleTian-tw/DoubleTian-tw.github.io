$(function () {
    let title_nav = "title-nav";
    addElementDiv(title_nav,1,"index","Home");
    addElementDiv(title_nav,2,"AboutMe","About");
    addElementDiv(title_nav,3,"Games","Games");
    addElementDiv(title_nav,4,"Blog","Blog");
    addElementDiv(title_nav,5,"Guides","Guides");
    addElementDiv(title_nav,6,"Contant","Contant");    
})

function addElementDiv(obj,num,herfPageName,herfTitle) {
    //Add div class="navitem"
    var parent = document.getElementById(obj);
    var div = document.createElement("div");
    div.setAttribute("class", "navitem");
    parent.appendChild(div);
    
    //Add div class="navitem_icon"
    var parent_icon = document.getElementsByClassName("navitem")[num-1];
    var div_icon = document.createElement("div");
    div_icon.setAttribute("class", "navitem_icon");
    parent_icon.appendChild(div_icon);

    //Add a class="link-logo" + num
    var parent_img = document.getElementsByClassName("navitem_icon")[num-1];
    var a_logo = document.createElement("a");
    a_logo.setAttribute("class", `link_logo`);
    a_logo.setAttribute("href",`${herfPageName}.html`);
    parent_img.appendChild(a_logo);

    //Add img class="navitem-logo-" + num
    var parent_a_logo = document.getElementsByClassName("link_logo")[num-1];
    var img_logo = document.createElement("img");
    img_logo.setAttribute("class",`navitem-logo${num}`);    
    img_logo.setAttribute("src",`images/navitem-logo-${num}.png`);
    img_logo.setAttribute("width","35px");
    img_logo.setAttribute("height","35px");
    parent_a_logo.appendChild(img_logo);

    //Add a class="navitem_text"
    var parent_a = document.getElementsByClassName("navitem")[num-1];
    var a_text = document.createElement("a");
    a_text.setAttribute("class","navitem_text");
    a_text.setAttribute("href", `${herfPageName}.html`);
    a_text.innerHTML = herfTitle;
    parent_a.appendChild(a_text);
}

