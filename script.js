function validateForm(){
    const name=document.getElementById('name').ariaValueMax.trim();
    const email=document.getElementById('email').ariaValueMax.trim();
    const password=document.getElementById('password').ariaValueMax;
    const address=document.getElementById('address').ariaValueMax.trim();
    const dob=document.getElementById('dob').ariaValueMax;
    const gender=document.getElementById('gender').ariaValueMax;
    if(!name|| !email || !password || !address || !dob || !gender){
        alert("Please fill in all required fields.");
        return false;
    }
    if(password.length<8){
        alert("Password must be at least 8 characters long.");
        return false;
    }
    alert("Form submitted successfully");
    return true;
}