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
   // dataset.modalTarget = data-modal-target    modal-target is written as modalTarget on camelCase and access from dataset prperty
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


// datasets in html 

// <div id="user" data-id="1234567890" data-user="carinaanand" data-date-of-birth>
//   Carina Anand
// </div>

// const el = document.querySelector("#user");

// // el.id === 'user'
// // el.dataset.id === '1234567890'
// // el.dataset.user === 'carinaanand'
// // el.dataset.dateOfBirth === ''

// // set a data attribute
// el.dataset.dateOfBirth = "1960-10-03";
// // Result on JS: el.dataset.dateOfBirth === '1960-10-03'
// // Result on HTML: <div id="user" data-id="1234567890" data-user="carinaanand" data-date-of-birth="1960-10-03">Carina Anand</div>

// delete el.dataset.dateOfBirth;
// // Result on JS: el.dataset.dateOfBirth === undefined
// // Result on HTML: <div id="user" data-id="1234567890" data-user="carinaanand">Carina Anand</div>

// if (!("someDataAttr" in el.dataset)) {
//   el.dataset.someDataAttr = "mydata";
//   // Result on JS: 'someDataAttr' in el.dataset === true
//   // Result on HTML: <div id="user" data-id="1234567890" data-user="carinaanand" data-some-data-attr="mydata">Carina Anand</div>
// }

