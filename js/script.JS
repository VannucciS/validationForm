function $(id)
{
    return document.getElementById(id)
}

const email = $("email")
const login = $("login")
const pass = $("pass")
const form = $("form")
let flag = 1;

function validate(e)
{
    e.preventDefault();
    if (login.value ==='')
    {
        $("username").innerHTML('Login should be non-empty and at least 20 characters long. ')
        flag = 0
    }


    if(flag)
    {
        return true
    }
    else
    {
        return false
    }
    
}

<script type="text/javascript" src="/js/script.JS"></script>