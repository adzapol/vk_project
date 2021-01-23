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
]

// console.log(sidebarTitle)

// sidebarTitle.textContent =
// people[0]['firstName'] +
//     ' ' +
//     people[0]['middleName'] +
//     ' ' +
//     people[0]['lastName']

function myFunc() {
    let sidebarTitle = document.querySelectorAll('.sidebar-item__title')
    let sidebarSubTitle = document.querySelectorAll('.sidebar-item__subtitle')
    let sidebarAge = document.querySelectorAll('.sidebar-item__age')

    for (let i = 0; i < sidebarTitle.length; i++) {
        sidebarTitle[i].textContent =
            people[i]['firstName'] +
            ' ' +
            people[i]['middleName'] +
            ' ' +
            people[i]['lastName']
        sidebarSubTitle[i].textContent = 'Пол: ' + people[i]['floor']
        sidebarAge[i].textContent = 'Возраст: ' + people[i]['age']
    }
}

myFunc()
