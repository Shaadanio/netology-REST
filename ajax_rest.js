$(document).ready(function () {
    $("form").submit(function (event) {
      var formData = {
        query: $("#ip").val(),
      };
      var url = "https://suggestions.dadata.ru/suggestions/api/4_1/rs/iplocate/address?ip=";
      var token = "687514cd043b56c6c731f8fe26a4389b6894e294";
  
      $.ajax({
        type: "GET",
        url: url + formData.query,
        beforeSend: function(xhr) {
            xhr.setRequestHeader("Authorization", "Token "+ token) 
        },
        data: '',
        dataType: "json",
        encode: true,
      }).done(function (result) {


        if(result.location == null){
            $("#result").html(
                '<p>Ваш город не определён</p>'
            );
        }else{
            $("#result").html(
                '<p>Ваш город ' + result.location.data.city + '</p>'
            );
        }

      });
  
      event.preventDefault();
    });
  });