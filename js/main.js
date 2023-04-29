const carousel = document.querySelector('.carousel');
const arrowBtns = document.querySelectorAll('.wrapper i');
const firstCardWidth = document.querySelector('.card').offsetWidth;

 let isDragging = false , startX , startScrollLeft ;
 const startDrag = (e)=>
 {
    isDragging = true ;
    carousel.classList.add('dragging');
    startX = e.pageX ;
    console.log("x" , startX);
    startScrollLeft = carousel.scrollLeft ;
    console.log("c" , startScrollLeft)
  
 }
 const stopDrag = ()=>
 {
    isDragging = false ;
    carousel.classList.remove('dragging');
 }
const dragging = (e) =>

{
    if(!isDragging) return ;
    // console.log(e.pageX)
carousel.scrollLeft = startScrollLeft - (e.pageX - startX) ;
console.log(carousel.scrollLeft)

}

arrowBtns.forEach(btn =>
    {
btn.addEventListener('click' , ()=>
{
    carousel.scrollLeft += btn.id == "left" ? -firstCardWidth:firstCardWidth ;
    
}
)
    });
carousel.addEventListener('mousedown' , startDrag);
document.addEventListener('mouseup' , stopDrag);
carousel.addEventListener('mousemove' , dragging);