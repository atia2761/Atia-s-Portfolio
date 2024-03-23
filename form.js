
    const form = document.querySelector('form');
  const yourName = document.querySelector('#firstName');
  const LastName = document.querySelector('#lastName');
  const email = document.querySelector('#email');
  const textarea = document.querySelector('#text');
  
  
  form.addEventListener('submit', formhandler);
  
  function formhandler(e){
      e.preventDefault();
  
      const formInfo = {
          FirstName:yourName.value,
          LastName:LastName.value,
          email:email.value,
          text:textarea.value
      }
      console.log(formInfo);
  
      yourName.value = '',
      LastName.value,
      email.value = '',
      textarea.value = ''
  
  }
  
  // ---------------------------form end-------------------------------