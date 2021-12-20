# RepoProvas

An API to help students by providing access to previous exams.

Try it out now at https://repo-provas-three.vercel.app

Front-end: https://github.com/Ribeiro1300/RepoProvas

## Install

    npm install

## Run the app

    npm run dev

## Run the tests

    npm test

### Database

1. Create a new database named repo-provas.
2. Copy all querys form the dump.sql file.
3. Paste on your database.

## Resquests

| ROUTES                         | Description                                       |
| ------------------------------ | ------------------------------------------------- |
| `GET/subjects`                 | Returns all subjects on the sistem.               |
| `GET/professors`               | Returns all professors on the sistem.             |
| `GET/professors/:subject_id`   | Returns professor by the subject.                 |
| `GET/exams/:filter/:filter_id` | Returns exams by a filter (subject or professor). |
| `POST/exams`                   | Adds a new exams to the database.                 |

## Get all subjects.

### Request

`GET/subjects`

### Response

    [
        {
        "id": 1,
        "name": "Calculo 1",
        "semester": "1º",
        "qt": 3
        },
        {
        "id": 2,
        "name": "Cálculo 2",
        "semester": "2º",
        "qt": 1
        }
    ]

## Get all professors

### Request

`GET/professors`

### Response

    [
        {
        "id": 1,
        "name": "Roberto",
        "qt": 3
        },
        {
        "id": 2,
        "name": "José",
        "qt": 1
        },
    ]

## Get professors filtering by subjects.

### Request

`GET/professors/:subject_id`

### Response

    [
        {
            "id": 1,
            "name": "Roberto"
        },
        {
            "id": 2,
            "name": "José"
        },
        {
            "id": 3,
            "name": "Alberto"
        }
    ]

## Get a exams filtering by subject or professor using the id.

### Request

`GET/exams/:filter/:filter_id`

-Filter: must be "subject" or "professor" to specifies the filter method.

### Responses

    [
        {
        "id": 1,
        "name": "2015.1",
        "type": "P1",
        "filter_name": "Calculo 1",
        "link": "https://prova1.com.br"
        },
        {
        "id": 5,
        "name": "2015.1",
        "type": "P1",
        "filter_name": "Calculo 1",
        "link": "https://prova2.com.br"
        }
    ]

or

    [
        {
            "id": 1,
            "name": "2015.1",
            "type": "P1",
            "filter_name": "Roberto",
            "link": "https://prova1.com.br"
        },
        {
            "id": 5,
            "name": "2015.1",
            "type": "P1",
            "filter_name": "Roberto",
            "link": "https://prova2.com.br"
        }
    ]

## Post a new exam.

### Request

`POST/exams`

    {
        "name": "2020.1",
        "type": "P1",
        "subject_id": 1,
        "professor_id": 1,
        "link": "https://prova1.com.br"
    }

- Response 201: Exam submited successfully.
- Response 403: Exam already submitted.
- Response 404: Invalid params.

### Response

    {
        "id": 7,
        "name": "2020.1",
        "type": "P1",
        "subject_id": 1,
        "professor_id": 1,
        "link": "https://prova1.com.br"
    }
