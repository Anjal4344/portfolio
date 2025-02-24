function sendMail(){
var params={
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value,
};


const serviceID="service_09hfl1g";
const templateID="template_dhrp0dm";
emailjs
.send(serviceID,templateID,params)
.then((res) => {
    console.log(res);
    document.getElementById("name").value="";
    document.getElementById("email").value="";
    document.getElementById("message").value="";
alert("your message sent successfully");
})
.catch((err)=> console.log(err));
}