let iconExpert=document.querySelector('.icon-expert');
let medelContent=document.querySelector('.medel-content');
let bottomItemHeader=document.querySelectorAll('.botton-item-link');
let bottomItemContent=document.querySelectorAll('.bottom-item-content');
let barsicon=document.querySelector('.barsicon');
let response=document.querySelector('.response');

console.log(response);
console.log(barsicon);
barsicon.addEventListener('click',showInput);

iconExpert.addEventListener('click',show);

  bottomItemHeader.forEach(x => {
      x.addEventListener('click',(e)=>{
          console.log(x);
          e.preventDefault();
          let div=x.nextElementSibling;
          if(div.classList.contains('d-none')){
              div.classList.toggle('d-block');
              div.classList.toggle('d-none');


          }
          else{
            div.classList.toggle('d-block');
            div.classList.toggle('d-none');

          }

      })
     
    
})


    


function show(e){

    e.preventDefault();
    medelContent.style.display="block";
    iconExpert.style.display="none";
}

function showInput() {
    console.log('hu');
    if(response.classList.contains('d-none')){
        response.classList.toggle('d-block');
        response.classList.toggle('d-none');

    }
    else{
        response.classList.toggle('d-block');
        response.classList.toggle('d-none');

    }
    

    
}



