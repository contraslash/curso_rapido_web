$(document).ready(function()
{
  var login_success = false;
  var login = function(objeto, email, password){
    if(!objeto)
    {
      return false;
    }
    if (objeto.hasOwnProperty("email") && objeto.hasOwnProperty("password"))
    {
      console.log(objeto["email"], email, objeto["password"], password, objeto["email"] == email && objeto["password"] == password);
        return objeto["email"] == email && objeto["password"] == password;
    }

  }

  $("form").submit(function(event)
  {
    var email = $("#email").val();
    var password = $("#password").val();
    console.log(email, password);
    event.preventDefault();
    $.ajax({
        url: "http://couchdb.contraslash.com/prueba1/_all_docs?include_docs=true",
        type: "GET",
        success: function (sreg, status, jqXHR) {
            var obj_json = JSON.parse(sreg);
            console.log(obj_json);

            for(var i=0; i<obj_json.rows.length ; i++)
            {
              console.log(obj_json.rows[i]);
              if(login(obj_json.rows[i].doc, email, password))
              {
                login_success = true;
                alert("Login Exitoso");
              }
              else
              {
                console.log("Failure")
              }
            }
            if(!login_success)
            {
                alert("Login Fallido");
            }


        },
        error: function (jqXHR, status) {
            alert(JSON.stringify(jqXHR));
        }
    });
  })
});
