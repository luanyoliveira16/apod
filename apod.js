let btn = document.querySelector('#submit')

btn.addEventListener('click', () => {
  apiApod()
})



function apiApod() {
  
  const data = $('#data').val();

  $.ajax({
    url: `https://api.nasa.gov/planetary/apod?api_key=b2e4yQbTO2NueoODTlnAaA3tb7mui6cQpTpSLI6I&date=${data}`,
    success: function(data){
      apiData(data);
    }
  
  })
}

function apiData(saida){
  const imagem = $(".imagem");
  const titulo = $(".tiulo");
  const explanation = $(".explanation");
  const copyright = $(".copyright")
 
  titulo.html(saida.title);
  explanation.html(`${saida.explanation}`);
  copyright.html(`${saida.copyright}`)
  

  if(saida.media_type == 'image') {
    imagem.html(`<img class='img' src="${saida.url}"/>`)
  } else {
    imagem.html(`<iframe class="img" src="${saida.url}?autoplay=1&mute=1"></iframe>`)
    }
  }
  














/* let btn = document.querySelector('#submit')

btn.addEventListener('click', () => {
  apiApod()
})

async function apiApod() {
  let api_key = 'b2e4yQbTO2NueoODTlnAaA3tb7mui6cQpTpSLI6I'
  let resposta = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${api_key}`)
  let data = resposta.json()
  apiNasa(data)
}

function apiNasa(data) {
  document.querySelector('#principal').innerHTML += data.explanation
  document.querySelector('#principal').innerHTML +=`<img src='${data.url}'>`
}

 */
