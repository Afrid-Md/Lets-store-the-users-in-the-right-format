
document.getElementById('my-form').addEventListener('submit',function (event){
              event.preventDefault();

              var Name=document.getElementById('name').value.trim();
              var Email=document.getElementById('email').value.trim();

              var userInfo = {
                     Name : Name,
                     Email : Email
              }

              localStorage.setItem("userinfo", JSON.stringify(userInfo)); 
           
})

              
       


