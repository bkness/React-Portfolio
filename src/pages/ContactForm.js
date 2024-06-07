const handleSubmit = (event) => {
    event.preventDefault();
  
    const myForm = event.target;
    const formData = new FormData(myForm);
    
    formData.append("form-name", "contact");
  
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString(),
    })
      .then(() => {
        console.log("Form successfully submitted");
        // redirect to a success page after form submission
        window.location.href = "/Portfolio";
      })
      .catch((error) => alert(error));
  };
  
  export default handleSubmit;
  