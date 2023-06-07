const menu = document.querySelector(".menu__body")
const menuBtn = document.querySelector('.menu__icon')
const boxes = Array.from(document.querySelectorAll(".box")); 




let slideIndex = 1;
showSlides(slideIndex);

function nextSlide() {
    showSlides(slideIndex += 1);
}
function previousSlide() {
    showSlides(slideIndex -= 1);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let slides = document.getElementsByClassName("item");
    if (n > slides.length) {
      slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (let slide of slides) {
        slide.style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}






filterSelection("all")
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("filterDiv");
  if (c == "all") c = "";
  
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}


var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}






if (menu && menuBtn) {
    menuBtn.addEventListener('click', () => {
        menu.classList.toggle('active')
        menuBtn.classList.toggle('active')
    })

}
menu.querySelectorAll('.menu__link').forEach(link => {
    link.addEventListener('click', () => {
        menu.classList.remove('active')
        menuBtn.classList.remove('active')
    })
})


const tabsBtn   = document.querySelectorAll(".tabs__nav-btn");
const tabsItems = document.querySelectorAll(".tabs__item");
tabsBtn.forEach(onTabClick);
function onTabClick(item) {
    item.addEventListener("click", function() {
        let currentBtn = item;
        let tabId = currentBtn.getAttribute("data-tab");
        let currentTab = document.querySelector(tabId);

        if( ! currentBtn.classList.contains('active') ) {
            tabsBtn.forEach(function(item) {
                item.classList.remove('active');
            });
    
            tabsItems.forEach(function(item) {
                item.classList.remove('active');
            });
    
            currentBtn.classList.add('active');
            currentTab.classList.add('active');
        }
    });
}

document.querySelector('.tabs__nav-btn').click();




var delay_popup = 5000;
setTimeout("document.getElementById('overlay').style.display='block'", delay_popup);



document.querySelectorAll('.accordion').forEach((el) => {
    el.addEventListener('click', () =>{
        let content = el.nextElementSibling;

        if(content.style.maxHeight){
            document.querySelectorAll('.content').forEach((el) => el.style.maxHeight = null)
        } else{
            document.querySelectorAll('.content').forEach((el) => el.style.maxHeight = null)
            content.style.maxHeight = content.scrollHeight + 'px'
        }
    })
})



boxes.forEach((box) => {
    box.addEventListener("click", boxHandler); 
  });
  
  function boxHandler(e) {
      e.preventDefault(); 
      let currentBox = e.target.closest(".box"); 
      let currentContent = e.target.nextElementSibling; 
      currentBox.classList.toggle("active"); 
      if (currentBox.classList.contains("active")) {
      currentContent.style.maxHeight = currentContent.scrollHeight + "px";
      } else {
      currentContent.style.maxHeight = 0; 
      }
  }



