function submitForm() {
   
    var name = document.getElementById('name').value;
    var phone = document.getElementById('phone').value;
    var address = document.getElementById('address').value;
   
  
    
    if (name || phone || address) {
     
        alert('Thank you, ' + name + '! We will contact you shortly.');
     
    } else {
      alert('Please fill out all the fields.');
    }
  }
  
  const btn = document.getElementById('btn1');

  btn.addEventListener('click', submitForm);