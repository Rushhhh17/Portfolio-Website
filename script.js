let menuIcon=document.querySelector('#menu-icon');
let navbar=document.querySelector('.navbar');

menuIcon.onclick=()=>{
  menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');

}


//scroll reaction
let sections=
window.onscroll=()=>{
  //sticky header
  let header=document.querySelector('.header');

  header.classList.toggle('sticky',window.scrollY>100);

  menuIcon.classList.remove('bx-x');
  navbar.classList.remove('active');
}