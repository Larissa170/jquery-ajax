function consultaCep() {
  $(".barra-progress").show(); // visualizar barra
  var cep = document.getElementById("cep").value;
  var url = "https://viacep.com.br/ws/" + cep + "/json/";
  $.ajax({
    url: url,
    type: "GET",
    success: function (response) {
      console.log(response);
      $("#titulo").html("Endereço do Cep " + response.cep); //usando jquery
      $("#logradouro").html(response.logradouro);
      //usando js
      //document.getElementById("logradouro").innerHTML = response.logradouro;
      $("#bairro").html(response.bairro);
      //document.getElementById("bairro").innerHTML = response.bairro;
      document.getElementById("localidade").innerHTML = response.localidade;
      document.getElementById("uf").innerHTML = response.uf;
      $(".cep").show(); // para montrar um elemento( no caso a div cep)
      $(".barra-progress").hide();
    },
  });
}

$(function () {
  $(".cep").hide(); // para esconder um elemento( no caso a div cep)
  $(".barra-progress").hide(); // para esconder um elemento( no caso a div cep)
});
