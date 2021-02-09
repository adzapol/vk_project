// const requestURL = '../people.json' // http://jsonplaceholder.typicode.com/users ../object.json

// let sidebarTitle = document.querySelector('.sidebar-item__title')

// function sendRequest(method, url) {
//     return new Promise((resolve, reject) => {
//         const xhr = new XMLHttpRequest()

//         xhr.open(method, url)

//         xhr.responseType = 'json'
//         xhr.onload = () => {
//             if (xhr.status >= 400) {
//                 reject(xhr.response)
//             } else {
//                 resolve(xhr.response)
//             }
//         }

//         xhr.onerror = () => {
//             reject(xhr.response)
//         }

//         xhr.send()
//     })
// }

// sendRequest('GET', requestURL)
//     .then((data) => console.log(data))
//     .catch((err) => console.log(err))

// console.log(people[0]['firstName']) // обращение

let people = [
    {
        firstName: 'Запольский',
        middleName: 'Александр',
        lastName: 'Дмитриевич',
        floor: 'Мужской',
        age: '27',
    },
    {
        firstName: 'Запольский',
        middleName: 'Алексеей',
        lastName: 'Дмитриевич',
        floor: 'Мужской',
        age: '16',
    },
    {
        firstName: 'Запольская',
        middleName: 'Елена',
        lastName: 'Игоревна',
        floor: 'Женский',
        age: '15',
    },
    {
        firstName: 'Шевцов',
        middleName: 'Никита',
        lastName: 'Анатольевич',
        floor: 'Мужской',
        age: '26',
    },
    {
        firstName: 'Требушкова',
        middleName: 'Елена',
        lastName: 'Игоревна',
        floor: 'Женский',
        age: '27',
    },
    {
        firstName: 'Иванова',
        middleName: 'Нина',
        lastName: 'Олеговна',
        floor: 'Женский',
        age: '19',
    },
    {
        firstName: 'Иванов',
        middleName: 'Иван',
        lastName: 'Метрофанович',
        floor: 'Мужской',
        age: '20',
    },
    {
        firstName: 'Неструева',
        middleName: 'Наталья',
        lastName: 'Вячеславовна',
        floor: 'Женский',
        age: '23',
    },
    {
        firstName: 'Алдохин',
        middleName: 'Вячеслав',
        lastName: 'Павлович',
        floor: 'Мужской',
        age: '21',
    },
    {
        firstName: 'Петров',
        middleName: 'Алексей',
        lastName: 'Николаевич',
        floor: 'Мужской',
        age: '50',
    },
    {
        firstName: 'Широкова',
        middleName: 'Любовь',
        lastName: 'Викторовна',
        floor: 'Женский',
        age: '40',
    }
]

function myFunc(array) { // функция вывода людей в контейнер

    const sidebar = document.querySelector('.sidebar') // контейнер
    
    for (let i = 0; i < array.length; i++) {

        let item = document.createElement('div') // добавление item
        item.classList.add('sidebar-item', 'block')
        sidebar.appendChild(item)
    
        let picture = document.createElement('div') // контейнер под фото
        picture.classList.add('sidebar-item-picture')
        item.appendChild(picture)
    
        let photo = document.createElement('img') // само фото
        photo.classList.add('sidebar-item-picture__photo')
        photo.src = './img/photo.jpg'
        photo.alt = 'photo'
        picture.appendChild(photo)
    
        let info = document.createElement('div') // контейнер с информацией
        info.classList.add('sidebar-item__info')
        item.appendChild(info)
    
        let title = document.createElement('h3') // ФИО
        title.classList.add('sidebar-item__title')
        info.appendChild(title)
    
        let floor = document.createElement('p') // Пол
        floor.classList.add('sidebar-item__floor')
        info.appendChild(floor)
    
        let age = document.createElement('p') // Возраст
        age.classList.add('sidebar-item__age')
        info.appendChild(age)

        title.textContent =
            array[i]['firstName'] +
            ' ' +
            array[i]['middleName'] +
            ' ' +
            array[i]['lastName']
        floor.textContent = 'Пол: ' + array[i]['floor']
        age.textContent = 'Возраст: ' + array[i]['age']
    }
}

myFunc(people) // первоначальная загрузка страницы

// ----------------------------------------
// Обработчик событий для кнопки "Применить"
// ----------------------------------------

const btnSubmit = document.querySelector('.btn-sub')

// Фильтр - пол
let inputMan = document.querySelector('.filter-man')
let inputWoman = document.querySelector('.filter-woman')

// Фильтр - возраст
let inputFrom = document.querySelector('.filter-from')
let inputBefore = document.querySelector('.filter-before')

let inputAgeMin18 = document.querySelector('.filter-age-min18')
let inputAge1820 = document.querySelector('.filter-age-18-20')
let inputAge2124 = document.querySelector('.filter-age-21-24')
let inputAgeMore = document.querySelector('.filter-age-more')

// Функция для пола
function filterFoor() {
    
    let newPeople = people.filter(person => {
        if (inputMan.checked && person.floor == 'Мужской') {
            console.log('Вывести всех мужчин')
            const sidebar = document.querySelector('.sidebar')
            sidebar.innerHTML = ''
            return true
        } else if (inputWoman.checked && person.floor == 'Женский') {
            console.log('Вывести всех женщин')
            const sidebar = document.querySelector('.sidebar')
            sidebar.innerHTML = ''
            return true
        } else if (inputMan.checked == false && inputWoman.checked == false) {
            console.log('Не выбран не один пол')
        }
    })
    myFunc(newPeople) 
}

// Функция для возраста от и до

function filterAgeFrom() {
    
    let newPeople = people.filter(person => {
        if (person.age >= inputFrom.value) {
            console.log('Вывести всех людей с возрастом от ' + inputFrom.value)
            const sidebar = document.querySelector('.sidebar')
            sidebar.innerHTML = ''
            return true
        }
    })
    myFunc(newPeople) 
}



function filterAgeBefore() {
    
    let newPeople = people.filter(person => {
        if (person.age <= inputBefore.value) {
            console.log('Вывести всех людей с возрастом до ' + inputBefore.value)
            const sidebar = document.querySelector('.sidebar')
            sidebar.innerHTML = ''
            return true
        }
    })
    myFunc(newPeople) 
}

btnSubmit.addEventListener('click', filterAgeBefore)












function filterAge() {
    
    let newPeople = people.filter(person => {
        if (inputAgeMin18.checked && person.age < 18) {
            console.log('Вывести всех людей с возрастом ниже 18 лет')
            const sidebar = document.querySelector('.sidebar')
            sidebar.innerHTML = ''
            return true
        } else if (inputAge1820.checked && person.age >= 18 && person.age <= 20) {
            console.log('Вывести всех людей с возрастом от 18 до 20 лет')
            const sidebar = document.querySelector('.sidebar')
            sidebar.innerHTML = ''
            return true
        } else if (inputAge2124.checked && person.age >= 21 && person.age <= 24) {
            console.log('Вывести всех людей с возрастом от 21 до 24 лет')
            const sidebar = document.querySelector('.sidebar')
            sidebar.innerHTML = ''
            return true
        } else if (inputAgeMore.checked && person.age > 25) {
            console.log('Вывести всех людей с возрастом более 25 лет')
            const sidebar = document.querySelector('.sidebar')
            sidebar.innerHTML = ''
            return true
        } else if (inputAgeMin18.checked == false && inputAge1820.checked == false && inputAge2124.checked == false && inputAgeMore.checked == false) {
            console.log('Не выбран не один возраст')
        }
    })
    myFunc(newPeople) 
}

// Функция для пола и возраста
function filerFloorAgeFunc () {
    let newPeople = people.filter(person => {
        if (inputMan.checked && person.floor == 'Мужской' && inputAgeMin18.checked && person.age < 18) {
            console.log('Вывести всех мужчин с возрастом ниже 18 лет')
            const sidebar = document.querySelector('.sidebar')
            sidebar.innerHTML = ''
            return true
        } else if (inputMan.checked && person.floor == 'Мужской' && inputAge1820.checked && person.age >= 18 && person.age <= 20) {
            console.log('Вывести всех мужчин с возрастом от 18 до 20 лет')
            const sidebar = document.querySelector('.sidebar')
            sidebar.innerHTML = ''
            return true
        } else if (inputMan.checked && person.floor == 'Мужской' && inputAge2124.checked && person.age >= 21 && person.age <= 24) {
            console.log('Вывести всех мужчин с возрастом от 21 до 24 лет')
            const sidebar = document.querySelector('.sidebar')
            sidebar.innerHTML = ''
            return true
        } else if (inputMan.checked && person.floor == 'Мужской' && inputAgeMore.checked && person.age > 25) {
            console.log('Вывести всех мужчин с возрастом более 25 лет')
            const sidebar = document.querySelector('.sidebar')
            sidebar.innerHTML = ''
            return true
        } else if (inputWoman.checked && person.floor == 'Женский' && inputAgeMin18.checked && person.age < 18) {
            console.log('Вывести всех женщин с возрастом ниже 18 лет')
            const sidebar = document.querySelector('.sidebar')
            sidebar.innerHTML = ''
            return true
        } else if (inputWoman.checked && person.floor == 'Женский' && inputAge1820.checked && person.age >= 18 && person.age <= 20) {
            console.log('Вывести всех женщин с возрастом от 18 до 20 лет')
            const sidebar = document.querySelector('.sidebar')
            sidebar.innerHTML = ''
            return true
        } else if (inputWoman.checked && person.floor == 'Женский' && inputAge2124.checked && person.age >= 21 && person.age <= 24) {
            console.log('Вывести всех женщин с возрастом от 21 до 24 лет')
            const sidebar = document.querySelector('.sidebar')
            sidebar.innerHTML = ''
            return true
        } else if (inputWoman.checked && person.floor == 'Женский' && inputAgeMore.checked && person.age > 25) {
            console.log('Вывести всех женщин с возрастом более 25 лет')
            const sidebar = document.querySelector('.sidebar')
            sidebar.innerHTML = ''
            return true
        }
    })
    myFunc(newPeople) 
}

// Функция отбора по нескольким полям
function filter () {
    if ((inputMan.checked || inputWoman.checked) && (inputAgeMin18.checked || inputAge1820.checked || inputAge2124.checked || inputAgeMore.checked)) {
        return filerFloorAgeFunc(),
        console.log('Возвращаем filterFoor() и filterAge()')
    } else if (inputMan.checked || inputWoman.checked) {
        return filterFoor(),
        console.log('Возвращаем filterFoor()')
    } else if (inputAgeMin18.checked || inputAge1820.checked || inputAge2124.checked || inputAgeMore.checked) {
        return filterAge(),
        console.log('Возвращаем filterAge()')
    }
}

// ----------------------------------------
// Обработчик событий для кнопки "Применить"
// ----------------------------------------

// btnSubmit.addEventListener('click', filter)

// ----------------------------------------
// Обработчик событий для кнопки "Сбросить"
// ----------------------------------------

const btnReset = document.querySelector('.btn-reset')

function handleButtonReset() {
    inputMan.checked = false
    inputWoman.checked = false
    inputAgeMin18.checked = false
    inputAge1820.checked = false
    inputAge2124.checked = false
    inputAgeMore.checked = false
    inputFrom.value = ''
    inputBefore.value = ''
    
    const sidebar = document.querySelector('.sidebar')
    sidebar.innerHTML = ''
    myFunc(people)

    console.log('Сброс настроек фильтра')
}

btnReset.onclick = handleButtonReset