/* Slider */

const slides = document.querySelectorAll(".slider img");
let index = 0;

setInterval(()=>{
  slides.forEach(img=>img.classList.remove("active"));

  index++;

  if(index > slides.length-1){
    index = 0;
  }

  slides[index].classList.add("active");

},3000);


/* Modal */

const cards = document.querySelectorAll(".card");
const modal = document.getElementById("modal");
const close = document.getElementById("close");
const title = document.getElementById("modalTitle");

cards.forEach(card=>{
  card.addEventListener("click",()=>{
    modal.style.display="flex";
    title.innerText = card.dataset.title;
  });
});

close.onclick = ()=>{
  modal.style.display="none";
};

window.onclick = (e)=>{
  if(e.target == modal){
    modal.style.display="none";
  }
};


/* Clock */

function updateClock(){

  const now = new Date();

  let h = now.getHours();
  let m = now.getMinutes();
  let s = now.getSeconds();

  document.getElementById("clock").innerText =
   ${h}:${m}:${s};

}

setInterval(updateClock,1000);


/* Form Validation */

const form = document.getElementById("contactForm");
const msg = document.getElementById("formMsg");

form.addEventListener("submit",(e)=>{
  e.preventDefault();

  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let subject = document.getElementById("subject").value;
  let message = document.getElementById("message").value;

  if(!name  !email  !subject || !message){
    msg.style.color="red";
    msg.innerText="Please fill all fields!";
    return;
  }

  let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

  if(!email.match(pattern)){
    msg.style.color="red";
    msg.innerText="Invalid email!";
    return;
  }

  msg.style.color="green";
  msg.innerText="Message sent successfully!";

  /* LocalStorage */
  localStorage.setItem("name",name);
  localStorage.setItem("email",email);

  form.reset();
});