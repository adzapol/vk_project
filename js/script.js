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

const people = [
    {
        firstName: 'Запольский',
        middleName: 'Александр',
        lastName: 'Дмитриевич',
        floor: 'Мужской',
        age: '27',
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
    },
]

function myFunc() {
    const sidebar = document.querySelector('.sidebar') // контейнер
    
    for (let i = 0; i < people.length; i++) {

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
            people[i]['firstName'] +
            ' ' +
            people[i]['middleName'] +
            ' ' +
            people[i]['lastName']
        floor.textContent = 'Пол: ' + people[i]['floor']
        age.textContent = 'Возраст: ' + people[i]['age']
    }
}

myFunc()