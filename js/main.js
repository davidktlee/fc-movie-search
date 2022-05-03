// req 예시 https://www.omdbapi.com?apikey=7035c60c&s=frozen&page=3
import '../scss/main.scss'

const containerEl = document.querySelector('.movie-container')
const btnEl = document.querySelector('.material-symbols-outlined')
const inputEl = document.querySelector('input')

const changeInput = (e) => {
  const inputValue = e.target.value

  btnEl.addEventListener('click', () => {
    getMovie(inputValue)
  })
}

inputEl.addEventListener('change', changeInput)

async function getMovie(title) {
  let res = await fetch(`https://www.omdbapi.com?apikey=7035c60c&s=${title}`)
  res = await res.json()
  const datas = res.Search
  datas.forEach((data) => {
    const divEl = document.createElement('div')
    divEl.textContent = data.Title
    divEl.classList.add('title')
    containerEl.append(divEl)
  })
}