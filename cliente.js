function buscarDia() {

  let num = document.getElementById("idDia").value;
  if(num >=0){
    var url = "http://localhost:8080/home.hmtl?accion=select&id="+ num;
    
    $.ajaxSetup({
      async: false,
    });

    $.getJSON(url, function (data) { 
      document.getElementById('respuesta').innerHTML ="";
      if(data.length>=0){
        document.getElementById('respuesta').innerHTML = "La Respuesta es: " + data.bold();
        }

      // var tablita =
      //   "<table class='table'> <tr> <th>Id Dia</th> <th> Nombre Dia </th></tr>";
      // var i = 0;
      // for (i = 0; i < data.length; i++) {
      //   tablita = tablita + "<tr>";
      //   tablita = tablita + "<td>" +  document.getElementById("idDia").value + "</td>";
      //   tablita = tablita + "<td>" + data + "</td>"; 
      //   tablita = tablita + "</tr>";
      
      // } 
      // tablita = tablita + "</table>";

      // $("#tabla").html(tablita);
    });
  }else { 
    alert("Ingresar un valor!");
  }

}










