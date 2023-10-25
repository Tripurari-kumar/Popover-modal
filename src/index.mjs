import "./styles.css";

 //all open modal buttons
const openmodalsButtons= document.querySelectorAll('[data-modal-target]');
//all close modal buttons
const closeModalsbuttons= document.querySelectorAll('[data-close-button]');


const overlay= document.getElementById('overlay');

overlay.addEventListener('click', ()=>{
  //Closng all modals on the screen
  const modals= document.querySelectorAll('.modal.active');

   modals.forEach((modal)=>{
  closeModal(modal);
   })
});

function openModal(modal){
  if(modal==null) return;

  modal.classList.add('active');
  overlay.classList.add('active');
}

function closeModal(modal){
  if(modal==null) return;
  modal.classList.remove('active');
  overlay.classList.remove('active');
}

openmodalsButtons.forEach((openButton)=>{
  openButton.addEventListener('click',()=>{
    const modal= document.querySelector(openButton.dataset.modalTarget);
    console.log(openButton);
     openModal(modal);
  })
})

closeModalsbuttons.forEach((closebutton)=>{
  closebutton.addEventListener('click',()=>{
    //will get the closest parent element with class modal
    const modal= closebutton.closest('.modal');
    closeModal(modal);
  })
})

