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

// --------------------------------------------
// Объявление переменных
// --------------------------------------------

// Фильтр: пол
let inputMan = document.querySelector('.filter--man')
let inputWoman = document.querySelector('.filter--woman')

// Фильтр: возраст
let inputFrom = document.querySelector('.filter-from')
let inputBefore = document.querySelector('.filter-before')

let inputAgeMin18 = document.querySelector('.age--min18')
let inputAge1820 = document.querySelector('.age--18-20')
let inputAge2124 = document.querySelector('.age--21-24')
let inputAgeMore = document.querySelector('.age--more')

// Фильтр: поиск по Фамилии
let inputSearch = document.querySelector('.search__input')

// Кнопки "Применить" и "Сбросить"
const btnSubmit = document.querySelector('.btn--sub')
const btnReset = document.querySelector('.btn--reset')

// --------------------------------------------
// Функция: вывод всего массива в HTML
// --------------------------------------------

function myFunc(array) {

    const sidebar = document.querySelector('.sidebar') // контейнер
    
    for (let i = 0; i < array.length; i++) {

        let item = document.createElement('div') // добавление item
        item.classList.add('sidebar-item', '--block')
        sidebar.appendChild(item)
    
        let picture = document.createElement('div') // контейнер под фото
        picture.classList.add('sidebar-item__picture')
        item.appendChild(picture)
    
        let photo = document.createElement('img') // фотография
        photo.classList.add('sidebar-item__picture--photo')
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

// --------------------------------------------
// Функция: вывод массива по полу
// --------------------------------------------

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

// ------------------------------------------------
// Функция: вывод массива по возрасту (ОТ и ДО)
// ------------------------------------------------

// Функция: вывод массива по возрасту "ОТ"
function filterAgeFrom() {
    
    let newPeople = people.filter(person => {
        if (inputFrom.value <= person.age) {
            console.log('Вывести всех людей с возрастом от ' + inputFrom.value)
            const sidebar = document.querySelector('.sidebar')
            sidebar.innerHTML = ''
            return true
        } 
    })
    myFunc(newPeople) 
}

// Функция: вывод массива по возрасту "ДО"
function filterAgeBefore() {
    
    let newPeople = people.filter(person => {
        if (inputBefore.value >= person.age) {
            console.log('Вывести всех людей с возрастом до ' + inputBefore.value)
            const sidebar = document.querySelector('.sidebar')
            sidebar.innerHTML = ''
            return true
        } 
    })
    myFunc(newPeople) 
}


// ------------------------------------------------
// Функция: вывод массива по возрасту
// ------------------------------------------------

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

// ------------------------------------------------
// Функция: вывод массива по полу и возрасту
// ------------------------------------------------

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

// ------------------------------------------------
// Функция: отбор по нескольким выбранным полям
// ------------------------------------------------

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
    else if (inputFrom.value > 0) {
        return filterAgeFrom(),
        console.log('Возвращаем filterAgeFrom()')
    } 
    else if (inputBefore.value >= 0) {
        return filterAgeBefore(),
        console.log('Возвращаем filterAgeBefore()')
    }
}

// --------------------------------------------
// Обработчик событий для кнопки "Применить"
// --------------------------------------------

btnSubmit.addEventListener('click', filter)

// --------------------------------------------
// Обработчик событий для кнопки "Сбросить"
// --------------------------------------------

function handleButtonReset() {
    inputMan.checked = false
    inputWoman.checked = false
    inputAgeMin18.checked = false
    inputAge1820.checked = false
    inputAge2124.checked = false
    inputAgeMore.checked = false
    inputFrom.value = ''
    inputBefore.value = ''
    inputSearch.value = ''
    
    const sidebar = document.querySelector('.sidebar')
    sidebar.innerHTML = ''
    myFunc(people)

    console.log('Сброс настроек фильтра')
}

btnReset.addEventListener('click', handleButtonReset)