$(document).ready(function()
{

  var show_data = function(objeto){
    for (var nombre in objeto)
    {
      if (objeto.hasOwnProperty(nombre))
      {
          $("#contenido").append(nombre + ": "+ objeto[nombre]+ "<br/>");
      }
    }
    $("#contenido").append("<br/><br/><br/>")


  }

  $("#boton").click(function(event)
  {
    console.log("asd");
    $.ajax({
        url: "http://couchdb.contraslash.com/prueba1/_all_docs?include_docs=true",
        type: "GET",
        success: function (sreg, status, jqXHR) {
            var obj_json = JSON.parse(sreg);
            console.log(obj_json);
            for(var i=0; i<obj_json.rows.length ; i++)
            {
              show_data(obj_json.rows[i].doc);
            }

        },
        error: function (jqXHR, status) {
            alert(JSON.stringify(jqXHR));
        }
    });
  })
});
