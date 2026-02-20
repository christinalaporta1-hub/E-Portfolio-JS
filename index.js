//template_h1fwjyj
//service_76lazhe
//MqYsCl6uQeR9iL2dv

function contact(event) {
    event.preventDefault();
    const loading = document.querySelector('.modal__overlay--loading')
    const success = document.querySelector('.modal__overlay--success')
    loading.classList += " modal__overlay--visible"
   emailjs
   .sendForm(
  'service_76lazhe', 
  'template_h1fwjyj', 
   event.target, 
  'MqYsCl6uQeR9iL2dv')
  .then (() => {
    loading.classList.remove("modal__overlay--visible");
    success.classList += " modal__overlay--visible";
   })
   .catch(() => {
    loading.classList.remove("modal__overlay--visible");
    alert(
        "The email service is temporarily unavailable. Please contact me directly at ChristinaLaporta1@gmail.com"
    );
   })
}