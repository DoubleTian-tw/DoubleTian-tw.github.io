var img_counter = 0, //一開始要顯示的圖，0就是第一章
    img_slide = document.querySelector('#slide'), //獲得id="#slide"元素
    img_items = slide.querySelectorAll('img'), //get all images
    img_itemsCount = img_items.length, //count images 
    img_prevBtn = document.createElement('a'), //上一張按鈕
    img_nextBtn = document.createElement('a'), //下一張按鈕
    img_timer = 4000, //換圖秒數
    img_interval = window.setInterval(showNext, img_timer); //設定循環

img_prevBtn.classList.add('prev'); //按鈕添加class="prev" 給CSS指定樣式用
img_nextBtn.classList.add('next'); //按鈕添加class="next" 給CSS指定樣式用
img_slide.appendChild(img_prevBtn);//將按鈕加到#slide中
img_slide.appendChild(img_nextBtn);

var showCurrent = function () {
    var itemToShow = Math.abs(img_counter % img_itemsCount); //取餘數才能無限循環
    [].forEach.call(img_items, function (el) {
        el.classList.remove('show'); //將所有img的class="show" remove
    });
    img_items[itemToShow].classList.add('show'); //將要顯示的img加入class="show"
}

function showNext() {
    img_counter++; //指定下一張圖
    showCurrent();
}

function showPrev() {
    img_counter--;
    showCurrent();
}

//滑鼠移到#slider上方時，停止循環計時
img_slide.addEventListener('mouseover', function () {
    img_interval = clearInterval(img_interval);
});

//滑鼠離開#slider時，重新循環計時
img_slide.addEventListener('mouseout', function () {
    img_interval = window.setInterval(showNext, img_timer);
});

//綁定click上一張/下一張按鈕的事件
img_nextBtn.addEventListener('click', showNext, false);
img_prevBtn.addEventListener('click', showPrev, false);

img_items[0].classList.add('show');