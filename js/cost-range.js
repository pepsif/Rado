// ------CATALOG--COST-BLOCK----------------

let a = document.querySelector('.cost-input-block');
let b = document.querySelector('.cost-range');
// let c = a.children[1].src = 'file:///F:/Sites/Rado/icons/minus.png' ;

// a.children[1].src = "file:///F:/Sites/Rado/icons/plus.png";



a.onclick = function() {
 b.classList.toggle("costrange-active");
if (b.classList.contains('costrange-active')) {
 a.children[1].src = "file:///F:/Sites/Rado/icons/minus.png"; 
 // console.log()
 // c= 'file:///F:/Sites/Rado/icons/plus.png';
 } else {
 a.children[1].src ="file:///F:/Sites/Rado/icons/plus.png";} 
 
 
}

// -----BRAND CHECKBOX-BLOCK-------------------
let c = document.querySelector('.brand-checkbox-block');
let d = document.querySelector('.checkbox-block');
let counter = 0;

c.onclick = function() {
 counter ++;
 counter = counter % 2;
 // console.log(d)

 if(counter == 0) {
d.style.display = 'none'
 
c.children[1].src = "file:///F:/Sites/Rado/icons/plus.png";  
 }
if(counter == 1) {
 d.style.display = 'block'
 c.children[1].src ="file:///F:/Sites/Rado/icons/minus.png";
}
console.log(counter)
}
  
  // console.log(c,d)
