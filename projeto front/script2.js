const TOKEN = '345411636508e2b74308228fcfc87973'
const linguagem = 'pt-BR'

var top = document.querySelector("div#top")



async function criarcarosel(){
  const populares = await (await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${TOKEN}&language=${linguagem}&page=1`)).json()



populares.results.forEach(filme => {
      top.innerHTML += `
       <div class="carouselImage" style="background-size:cover;">
            <img data-tab="${filme.name}" src="https://www.themoviedb.org/t/p/w220_and_h330_face${filme.poster_path}"/>
        </div>
      
      `
      console.log(filme)
      
});
}  

criarcarosel();