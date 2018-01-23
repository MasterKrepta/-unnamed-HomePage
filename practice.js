const imageGallary = document.getElementById("imageGallary");
const heading = document.getElementById("welcome");
const imgItems = document.getElementsByTagName('img');

heading.addEventListener('mouseover', ()=>{
    heading.style.color = 'red';
});


heading.addEventListener('mouseout', ()=>{
    heading.style.color = 'black';
});

//for(let i = 0; i < imgItems.length; i++){
//    imgItems[i].addEventListener('mouseover', () =>{
//        imgItems[i].style.paddingTop = 0;
//    });
//    
//        imgItems[i].addEventListener('mouseout', () =>{
//        imgItems[i].style.paddingTop = 10;
//    });
//
//}

imageGallary.addEventListener('click', (event) => {
    if(event.target.tagName == 'IMG'){
    let parent = event.target.parentNode;
        parent.removeChild(event.target);
    
    }
})