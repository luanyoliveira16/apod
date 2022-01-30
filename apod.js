$("#submit").click(function () {
    let data = $("#data").val();
    $.ajax({
      url: `https://api.nasa.gov/planetary/apod?api_key=b2e4yQbTO2NueoODTlnAaA3tb7mui6cQpTpSLI6I&date=${data}`,
      type: "GET",
      success: function (apod) {
        $("#principal").css("display", "flex");
        $("#imageofday").attr("src", apod.url);
        $("#textoofday").text(apod.title);
        $("#explanation").text(apod.explanation);
      },
    });
  });
