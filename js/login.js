 function Login()
   {
           var form = document.form1;

                  //아이디에서 입력 필수 조건문
                  if (form.txtID.value == "")
                  {
                          alert("Insert ID!");
                          return;
                  }
                  if (form.txtPwd.value == "")
                  {
                          alert("Insert PW!");
                          return;
                  }
                  if (form.txtID.value == "june1105" && form.txtPwd.value =="june1105")
                  {
                          $(".login").fadeOut();
                          $(".layer").fadeOut();
                          $(".login-btn").hide();
                          $(".logout-btn").show();
                          return;
                  }
                  else{
                          alert("Check ID or PW");
                  }
   }
