// toggle menu/navbar script 
$(document).ready(function(){

    $('.class-menu-btn').click(function(){

        $('.navBar .menu').toggle("active");
    });

    // Hamburger menu for small screens (<= 360px)
    $('.mobile-menu-btn').click(function(){
        $('.navBar .menu').toggleClass('show');
        $(this).toggleClass('open');
    });

    // Clicking any menu option hides the menu and shows the hamburger icon back,
    // and keeps the selected option highlighted in black
    $('.navBar .menu .nav-btn a').click(function(){
        $('.navBar .menu .nav-btn a').removeClass('active');
        $(this).addClass('active');

        $('.navBar .menu').removeClass('show');
        $('.mobile-menu-btn').removeClass('open');
    });

});

// $(document).ready(function(){

//     $('.nav-btn').click(function(){
        
//         $('.navBar .menu').toggle("active");
//     });  

// });

// ///
// const navLinks = document.querySelectorAll(".nav__links"); 
// const sections = document.querySelectorAll(".section"); 

// let currentSection = "homePage";

// window.addEventListener('scroll', ()=>{
//     sections.forEach(sec=>{
//         if (window.scrollY>=sec.offsetTop) {
//             currentSection = sec.id;
//         }
//     });

//     navLinks.forEach(navlink=>{
//         if (navlink.href.includes(currentSection)) {
//             navlink.classList.add('active');
//         }
//     });
// });

// const navbar = document.querySelector(".menu").querySelectorAll("a");
// console.log(navbar);

// navbar.forEach(element=>{
//     element.addEventListener("click", function(){
//         navbar.forEach(nav=>nav.classList.remove("active"));
//         this.classList.add("active");
//     });
// });


// /////////////
// let items = document.querySelectorAll(".navbar-a");

// items.forEach(i=>{
//     i.addEventListener("click", function () {
//     removeActive();
//     i.classList.add("active");
// })
// });

// function removeActive(){
//     items.forEach(i=>{
//         items.classList.remove("active");
//     })
// }