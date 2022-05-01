function validateForm() {
    var x = document.forms["myForm"]["fname"].value;
    if (x == "") {
      alert("Name must be filled out");
      return false;
    }

 
    var x=document.myForm.mail.value;  
    var atposition=x.indexOf("@");  
    var dotposition=x.lastIndexOf(".");  
    if (atposition<1 || dotposition<atposition+2 || dotposition+2>=x.length){  
        alert("Please enter a valid e-mail address \n atpostion:"+atposition+"\n dotposition:"+dotposition);  
        return false;  
    } 
    
    var num=document.myForm.contact.value;  
    if (isNaN(num)){  
        document.getElementById("numloc").innerHTML="Enter Numeric value only";  
        return false;  
    }else{  
        return true;  
    }  
}
