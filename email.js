// var templateParams = {
//     name: 'James',
//     notes: 'Check this out!'
// };


 
function handleSubmit(){
    const email = document.getElementById("email").value;
    const firstname = document.getElementById("full-name").value;
    const message = document.getElementById("message").value;
    const obj={
    firstname,
    email,
    message

}
 emailjs.send('service_tr33nia', 'template_9ukf3xh', obj,"user_BuhgLZg4mO3KiZtIRZPx0")
    .then(function(response) {
       console.log('SUCCESS!', response.status, response.text);
       alert("SUCCESS!")
    }, function(error) {
       console.log('FAILED...', error);
    });
    
}
