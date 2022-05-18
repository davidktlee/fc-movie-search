// req 예시 https://www.omdbapi.com?apikey=7035c60c&s=frozen&page=3
// data 요청 https://www.omdbapi.com?apikey=[7035c60c]&
import '../scss/main.scss'
const bodyEl = document.querySelector('body')
const containerEl = document.querySelector('.movie-container')
const searchBtnEl = document.querySelector('.search__button')
const inputEl = document.querySelector('.search__input')
const moreBtnEl = document.createElement('button')
const mainInnerEl = document.querySelector('.main .inner')
const resultEl = document.createElement('div')
const sortEl = document.querySelector('select')
const optionValue = sortEl.options[sortEl.selectedIndex].value
const errorContainerEl = document.createElement('div')
const loadingEl = document.createElement('img')
const modalContainer = document.querySelector('.modal')
const modalContent = document.querySelector('.modal-content')
const modalDescription = document.querySelector('.modal-description')
const modalBtn = document.querySelector('.modal__button')
// series 변수
// const optionEls = document.querySelectorAll('.option-container__option')
// const optionEls = document.querySelectorAll('.option__label')

//intersection observer
// const io = new IntersectionObserver((entries) => {
//   entries.forEach((entry) => {
//     if (entry.isIntersecting) {
//       page += 1
//       getMovie(inputEl.value.trim(), page)
//     }
//   })
// })
// io.observe(moreBtnEl)
let page = 1

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
    page += 1
  } catch (error) {
    renderError(error)
  }
}
// 영화 검색
searchBtnEl.addEventListener('click', () => {
  containerEl.innerHTML = ''
  resultEl.textContent = ''
  getMovie(inputEl.value.trim(), page)
})
moreBtnEl.addEventListener('click', () => {
  page += 1
  getMovie(inputEl.value.trim(), page)
})

// const beforeSearch = () => {
//   selectOption()
//   if (selectOption) {
//     searchMovies()
//   } else {
//     searchSeries()
//   }
// }
// beforeSearch()

// 자세한 영화정보 불러오기
async function getSpecificMovie(id) {
  let response = await fetch(`https://www.omdbapi.com?${API_KEY}&i=${id}`)
  response = await response.json()
  viewModal(response)
}

// 영화정보 모달
const viewModal = (data) => {
  bodyEl.style.overflow = 'hidden'
  modalContainer.classList.add('view')
  const posterEl = document.createElement('img')
  posterEl.src = data.Poster

  const modalTitle = document.createElement('div')
  modalTitle.className = 'title'
  modalTitle.textContent = data.Title

  const modalGenre = document.createElement('div')
  modalGenre.textContent = `장르: ${data.Genre}`

  const modalActors = document.createElement('div')
  modalActors.textContent = `배우: ${data.Actors}`

  const modalPlot = document.createElement('div')
  modalPlot.textContent = `줄거리: ${data.Plot}`

  const modalRate = document.createElement('span')
  modalRate.className = 'star-rating'

  if (data.imdbRating < Number('2')) {
    modalRate.innerHTML = `<span>평점: ${data.imdbRating}★☆☆☆☆</span>`
  } else if (data.imdbRating < Number('3')) {
    modalRate.innerHTML = `<span>평점: ${data.imdbRating}★★☆☆☆</span>`
  } else if (data.imdbRating < Number('7')) {
    modalRate.innerHTML = `<span>평점: ${data.imdbRating}★★★☆☆</span>`
  } else if (data.imdbRating < Number('9')) {
    modalRate.innerHTML = `<span>평점: ${data.imdbRating}★★★★☆</span>`
  } else {
    modalRate.innerHTML = `<span>평점: ${data.imdbRating}★★★★★</span>`
  }
  modalDescription.append(modalGenre, modalActors, modalPlot, modalRate)
  // modalDescription.appendChild(modalActors)
  // modalDescription.appendChild(modalPlot)
  // modalDescription.appendChild(modalRate)
  modalContent.appendChild(modalDescription)
  modalContent.appendChild(posterEl)
  modalContent.appendChild(modalTitle)

  modalBtn.addEventListener('click', () => {
    bodyEl.style.overflow = 'auto'
    modalContainer.classList.remove('view')
    modalTitle.textContent = ''
    modalGenre.remove()
    modalActors.remove()
    modalPlot.remove()
    modalRate.remove()
  })
}

// 에러 시 호출 함수
const renderError = (error) => {
  console.log(error)
  loadingEl.classList.remove('viewImg')
  loadingEl.classList.add('hideImg')
  errorContainerEl.classList.remove('hide')
  errorContainerEl.classList.add('error')
  errorContainerEl.innerHTML = `<span>404 Error</span><br /><span>찾는 영화가 없습니다ㅠ^ㅠ</span>`
  mainInnerEl.appendChild(errorContainerEl)
}

// 영화 렌더링

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
    divEl.setAttribute('data-id', data.imdbID)
    imgEl.classList.add('image')
    divEl.appendChild(titleEl)
    divEl.appendChild(imgEl)
    containerEl.appendChild(divEl)
    if (data.Poster === 'N/A') {
      imgEl.src = './KakaoTalk_20220503_144117188.jpg'
    }

    const imdbId = divEl.getAttribute('data-id')

    divEl.addEventListener('click', () => {
      getSpecificMovie(imdbId)
    })
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

// 로딩 함수
const loadingFunc = () => {
  loadingEl.classList.remove('hideImg')
  loadingEl.classList.add('viewImg')
  loadingEl.src = './KakaoTalk_20220503_144117188.jpg'
  mainInnerEl.appendChild(loadingEl)
  errorContainerEl.innerHTML = ''
}
// 시리즈 불러오기 구현
// async function getSeries(title, page) {
//   loadingFunc()
//   try {
//     let seriesRes = await fetch(
//       `https://www.omdbapi.com?${API_KEY}&s=${title}&type=series&page=${page}`
//     )
//     const wait = (timeToDelay) => new Promise((resolve) => setTimeout(resolve, timeToDelay))
//     await wait(1000)
//     seriesRes = await seriesRes.json()
//     const datas = seriesRes.Search
//     const totalRes = seriesRes.totalResults
//     console.log(seriesRes)
//     renderSeries(datas, totalRes, title)
//   } catch (err) {
//     renderError()
//   }
// }

// 시리즈, 영화 옵션 선택
// 시리즈 클릭했다가 영화 클릭 하면 값이 바뀌면서 오류
// optionEls.forEach((optionEl) => {
//   optionEl.addEventListener('click', (e) => {
//     const targetName = e.target.getAttribute('data-value')
//     if (targetName === 'movie') {
//       console.log(targetName)
//       searchMovies()
//     } else if (targetName === 'series') {
//       console.log(targetName)
//       searchSeries()
//     }
//   })
// })

// 시리즈 검색
// const searchSeries = () => {
//   inputEl.setAttribute('placeholder', '입력해 주세요 찾는 시리즈를')
//   let page = 1
//   searchBtnEl.addEventListener('click', () => {
//     containerEl.innerHTML = ''
//     resultEl.textContent = ''
//     getSeries(inputEl.value.trim(), page)
//   })

//   moreBtnEl.addEventListener('click', () => {
//     page += 1
//     getSeries(inputEl.value.trim(), page)
//   })
// }

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
