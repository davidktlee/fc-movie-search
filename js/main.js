// req 예시 https://www.omdbapi.com?apikey=7035c60c&s=frozen&page=3
import '../scss/main.scss'

const containerEl = document.querySelector('.movie-container')
const searchBtnEl = document.querySelector('.material-symbols-outlined')
const inputEl = document.querySelector('input')
const moreBtnEl = document.createElement('button')
const mainInnerEl = document.querySelector('.main .inner')
const resultEl = document.createElement('div')
const sortEl = document.querySelector('select')
const optionValue = sortEl.options[sortEl.selectedIndex].value

const API_KEY = 'apikey=7035c60c'

async function getMovie(title, page) {
  let res = await fetch(`https://www.omdbapi.com?${API_KEY}&s=${title}&page=${page}`)
  res = await res.json()
  const datas = res.Search
  const totalRes = res.totalResults
  renderMovies(datas, totalRes, title)
}

const searchMovies = () => {
  let page = 1
  searchBtnEl.addEventListener('click', () => {
    containerEl.innerHTML = ''
    resultEl.textContent = ''
    getMovie(inputEl.value.trim(), page)
  })

  moreBtnEl.addEventListener('click', () => {
    page += 1
    getMovie(inputEl.value.trim(), page)
  })
}
searchMovies()

const renderMovies = (datas, totalRes, title) => {
  datas.forEach((data) => {
    const divEl = document.createElement('div')
    const titleEl = document.createElement('div')
    const imgEl = document.createElement('img')
    titleEl.textContent = `제목 : ${data.Title} (${data.Year})`
    imgEl.src = data.Poster
    titleEl.classList.add('title')
    divEl.classList.add('content')
    imgEl.classList.add('image')
    divEl.appendChild(titleEl)
    divEl.appendChild(imgEl)
    containerEl.appendChild(divEl)
  })

  moreBtnEl.textContent = 'More'
  moreBtnEl.classList.add('moreBtn')
  containerEl.appendChild(moreBtnEl)

  resultEl.classList.add('resultDiv')
  resultEl.textContent = `${title}의 총 검색 결과: ${totalRes}개`
  sortEl.classList.add('view')
  
  resultEl.appendChild(sortEl)
  mainInnerEl.prepend(resultEl)
}

// validation 구현

// datas.forEach((data) => {
//   arr.push(data.Title)
//   if (optionValue === '알파벳 오름차순') {
//     arr = arr.sort(function (a, b) {
//       if (a < b) return 1
//       if (a > b) return -1
//       if (a === b) return 0
//     })
//     data.Title = arr
//   }})
