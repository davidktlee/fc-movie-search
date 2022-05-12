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
const errorContainerEl = document.createElement('div')
const loadingEl = document.createElement('img')

const API_KEY = 'apikey=7035c60c'

// 영화 불러오기
async function getMovie(title, page) {
  loadingFunc()
  try {
    let res = await fetch(`https://www.omdbapi.com?${API_KEY}&s=${title}&type=movie&page=${page}`)
    // setTimeout
    const wait = (timeToDelay) => new Promise((resolve) => setTimeout(resolve, timeToDelay))
    await wait(1000)
    res = await res.json()
    const datas = res.Search
    const totalRes = res.totalResults
    renderMovies(datas, totalRes, title)
  } catch (error) {
    renderError(error)
  }
}
// 에러 시 호출 함수
const renderError = (error) => {
  loadingEl.classList.remove('viewImg')
  loadingEl.classList.add('hideImg')
  errorContainerEl.classList.remove('hide')
  errorContainerEl.classList.add('error')
  errorContainerEl.innerHTML = `<span>404 Error</span><br /><span>찾는 영화가 없습니다ㅠ^ㅠ</span>`
  mainInnerEl.appendChild(errorContainerEl)
}
// 로딩 함수
const loadingFunc = () => {
  loadingEl.classList.remove('hideImg')
  loadingEl.classList.add('viewImg')
  loadingEl.src = './KakaoTalk_20220503_144117188.jpg'
  mainInnerEl.appendChild(loadingEl)
  errorContainerEl.innerHTML = ''
}

// 시리즈 불러오기 구현 할 것
// async function getSeries(title, page) {
//   try {
//     let res = await fetch(`https://www.omdbapi.com?${API_KEY}&s=${title}&type=series&page=${page}`)
//     res = await res.json()
//     const datas = res.Search
//     const totalRes = res.totalResults
//     console.log(res)
//     renderMovies(datas, totalRes, title)
//   } catch (err) {
//     renderError()
//   }
// }

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
  console.log(datas)
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
  errorContainerEl.classList.remove('error')
  errorContainerEl.classList.add('hide')
  loadingEl.classList.remove('viewImg')
  loadingEl.classList.add('hideImg')
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
