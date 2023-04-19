const express = require('express')
const morgan = require('morgan')
const cors = require('cors')

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.static('build'))

morgan.token('body', (req, res) => JSON.stringify(req.body))

app.use(morgan(':method :url :status :response-time ms :body'))

// test comment

let persons = [
        { 
          "id": 1,
          "name": "Arto Hellas", 
          "number": "040-123456"
        },
        { 
          "id": 2,
          "name": "Ada Lovelace", 
          "number": "39-44-5323523"
        },
        { 
          "id": 3,
          "name": "Dan Abramov", 
          "number": "12-43-234345"
        },
        { 
          "id": 4,
          "name": "Mary Poppendieck", 
          "number": "39-23-6423122"
        },
        { 
          "id": 5,
          "name": "Richard Cowey", 
          "number": "39-23-6493845"
        }
    ]


const timeNow = new Date();
const counter = persons.length


app.get('/', (request, response) => {
  response.send('<h1>Hello World!</h1>')
})

app.get('/api/persons', (request, response) => {
  response.json(persons)
})

app.get('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id)
    const person = persons.find(person => person.id === id)
    if (person) {
        response.json(person)
    } else {
        response.status(404).end()
    }
  })

app.delete('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id)
    persons = persons.filter(person => person.id !== id)
    response
      .status(204)
      .end()
})


app.post('/api/persons', (request, response) => {

    const body = request.body
    const contact = persons.find(c => c.name.toLocaleLowerCase() === body.name.toLocaleLowerCase())

    if (!body.name) {
        return response.status(400).json({
            error: 'name missing'
        })
    } else if (!body.number) {
        return response.status(400).json({
            error: 'number missing'
        })
    } else if (contact) {
        return response
        .status(400)
        .json({ error: 'name already exists'})
    } else {
      const person = {
        id: body.id,
        name: body.name,
        number: body.number,
    }
    persons = persons.concat(person)
    response
    .status(200)
    .json(persons)
    }
})

app.get('/info', (request, response) => {
    response.send(`<p>Phonebook has infor for ${counter} people</p> <p>${timeNow}</p>`)
  })

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})