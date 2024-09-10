function sendmail(){
    let parameter={
        name:document.getElementById("name").value,
        email:document.getElementById("email").value,
        tell:document.getElementById("tell").value

    }
    emailjs.send("service_ulez4d3","template_qegvq6p",parameter).then(alert("successfully submitted!!"))

    

}

