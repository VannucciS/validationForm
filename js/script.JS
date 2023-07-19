
        function $(id)
        {
            return document.getElementById(id);
        }
        
        var login = $("login")
        function validate(e)
        {
        //login validation section
        
            if(login.value==="" || login.value == null || login.value.length < 20)
        {
        $("errorlogin").innerHTML = "Invalid login";
        $("login").style.backgroundColor = "yellow";
        //$("errorlogin").innerHTML += login.value.length;
        }

        //e-mail validation section
        var emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        var emailText = email.value;
        var emailTest = emailPattern.test(emailText);

        if(!emailTest) 
        {
            $("erroremail").innerHTML = "The e-mail is not valid."
            $("email").style.backgroundColor = "yellow";
        }

        //password validation section
        var passwordOne = $("pass");
        var passOneValue = passwordOne.value;
        var passPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/;
        var passOneTest = passPattern.test(passOneValue);
        //passOneValue.length < 6 ||
            if ( !passOneTest )
            {
                $("errorpassword").innerHTML = 
                "The password should have at least one uppercase, " +
                "one lowercase and six characters."
                $("pass").style.backgroundColor = "yellow";
                //$("errorpassword").innerHTML += passOneValue.length
            }
        //two passwords fields have to be the same
        var passTwoValue = $('pass2').value;
        var isEqual = passTwoValue === passOneValue
            if (!isEqual)
            {
                $("errorpassword2").innerHTML=
                "The second password is not the same as the first."
                $("pass2").style.backgroundColor = "yellow";
            }

        //Newsletter warning 
        var newsletter = $("newsletter");
        var newsletterIsChecked = newsletter.checked;
        var newsletterText = "Be assured to look at the Spam folder before complaining about not receiving any message from us."
        if(newsletterIsChecked)
        {
            /*$("errornewsletter").innerHTML = newsletterText */
            //popup alert about the newsletter
            alert(newsletterText);

        }

        //terms and conditions
        var terms = $("terms");
        var termsIsChecked = terms.checked;
        if(!termsIsChecked)
        {
            $("errorterms").innerHTML = 
            "To receive our newsletter you have to read " +
            "and agree to the terms and conditions."
        }

        e.preventDefault();
        }
        
    