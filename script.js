 /*for header */

 let menu = document.querySelector("#menu-btn");
 let navbar = document.querySelector(".navbar");
 
 menu.onclick = () => {
     menu.classList.toggle('fa-times');
     navbar.classList.toggle('active');
 }
 
 //for window scroll
 window.onscroll = () => {
     menu.classList.remove('fa-times');
     navbar.classList.remove('active');
 
     if (window.scrollY) {
         document.querySelector(".header").classList.add('active');
     } else {
         document.querySelector('.header').classList.remove('active');
     }
 
     window.onload = () => {
         if (window.scrollY) {
             document.querySelector(".header").classList.add('active');
         } else {
             document.querySelector('.header').classList.remove('active');
         }
     }
 }
 
 //for home section swiper part
 var swiper = new Swiper(".home-slider", {
     spaceBetween: 20,
     effect: "fade",
     grabCursor: true,
     loop: true,
     centeredSlides: true,
     autoplay: {
         delay: 9500,
         disableOnInteraction: false,
       },
   });
   
 //for feature swiper
 var swiper = new Swiper(".feature-slider", {
     spaceBetween: 20,
     grabCursor: true,
     loop: true,
     centeredSlides: true,
     autoplay: {
       delay: 9500,
       disableOnInteraction: false,
     },
 
     breakpoints: {
         0: {
             slidesPerView: 1,
         },
         665: {
             slidesPerView: 2,
         },
         900: {
             slidesPerView: 3,
         },
     },
 });
   
 var swiper1 = new Swiper(".feature-slider1", {
     spaceBetween: 20,
     grabCursor: true,
     loop: false,
     centeredSlides: false,
     autoplay: {
       delay: 9500,
       disableOnInteraction: false,
     },
 
     breakpoints: {
         0: {
             slidesPerView: 1,
         },
         665: {
             slidesPerView: 2,
         },
         900: {
             slidesPerView: 3,
         },
     },
 }); 
   
 //Registeration part 
 
 var users = localStorage.getItem("users"); 

$(function () {

    });

    // Registration - Collect it in an array 
    // Store the array in local storage as json object 
function formValidation() {
    // Get the HTML elements
    var userId = GetUserID();
    var txtname = document.getElementById("user_name").value;
    if (!txtname) {
        alert('Please enter name!')
        return false;
    }
    var email = document.getElementById("email").value;
    if (!email) {
        alert('Please enter email!')
        return false;
    }

    var age = document.getElementById("age").value;
    if (!age) {
        alert('Please enter email!')
        return false;
    }

    var member = document.getElementById("member").value;
    if (!member) {
        alert('Please enter email!')
        return false;
    }
    var emailfilter = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!emailfilter.test(email)) {
        alert('Please enter a valid email address!');
        return false;
    }
    var gender = document.getElementById("ddlgender").value;
    var status = document.getElementById("ddlstatus").value;

    var userObj = {
        "id": userId,
        "name": txtname,
        "email": email,
        "age": age,
        "member": member,
        "gender": gender,
        "status": status
    };
    addUserDataToLocalStorage(userObj);
    document.getElementById('user_name').value = "";
    document.getElementById('email').value = "";
    document.getElementById('age').value = "";
    document.getElementById('member').value = "";
    return true;
}

function GetUserID() {
    const ID = Date.now();
    return ID;
}

function addUserDataToLocalStorage(userObj) {

    //already has data in localstorage then update it other create new one

    var users = JSON.parse(localStorage.getItem('userData'));
    if (users != null) {
        users.push(userObj);
       
        localStorage.setItem('userData', JSON.stringify(users));
    }
    else {
        var userData = new Array();
        userData.push(userObj);
        localStorage.setItem('userData', JSON.stringify(userData));

    }
}

//Validation part of Admin

function validationAdmin() {
    var name = (document.getElementById('Valname').value).toLowerCase();
    var email = (document.getElementById('valemail').value).toLowerCase();
    var password = (document.getElementById('valpassword').value).toLowerCase();
    
    while (true) {
    if (name == "kyaw san maung" || email == "ksm@gamil.com" || password == "271122") {
        window.open('user.html');
        break;
    }else {
        alert("Your information is invalid!");
        break;
    }
    } 
}


//JQuery

  $(document).ready(function(){
    $(".jmbtn").click(function(){
        $('.p1').text("2000MMk");
        $('.p2').text("45000MMk");
        $('.p3').text("3780MMk");
        $('.p4').text("5500MMk");
        $('.p5').text("4600MMk");
        $('.p6').text("9000MMk");
        $('.p7').text("8500MMk");
        $('.p8').text("7500MMk");
    });
    
    $(".jabtn").click(function(){
        $('.p1').text("$29.9");
        $('.p2').text("$35");
        $('.p3').text("$50");
        $('.p4').text("$99.9");
        $('.p5').text("$80");
        $('.p6').text("$69.9");
        $('.p7').text("$150");
        $('.p8').text("$299.9");
    });
      
    $(".jmfbtn").click(function(){
        $('.p1').text("2999MMk");
        $('.p2').text("4850MMk");
        $('.p3').text("8560MMk");
        $('.p4').text("7555MMk");
        $('.p5').text("9999MMk");
        $('.p6').text("48000MMk");
        $('.p7').text("7900MMk");
        $('.p8').text("8500MMk");
    });
    
    $(".jafbtn").click(function(){
        $('.p1').text("$79.9");
        $('.p2').text("$85.9");
        $('.p3').text("$59.9");
        $('.p4').text("$99.9");
        $('.p5').text("$159.9");
        $('.p6').text("$149.9");
        $('.p7').text("$89.9");
        $('.p8').text("$189.9");
    });

  });


