const express = require('express')
const router = express.Router()
const person = require('../models/person.model')
const m = require('../helpers/middlewares')

/* All persons */
router.get('/', async (req, res) => {
    await person.getPersons()
    .then(persons => res.json(persons))
    .catch(err => {
        if (err.status) {
            res.status(err.status).json({ message: err.message })
        } else {
            res.status(500).json({ message: err.message })
        }
    })
})

/* Create Person */
router.post('/person', m.checkFieldsPerson, m.mustBeEleven, async (req, res) => {
    await person.insertPerson(req.body)
    .then(newPerson => res.status(200).json({
        message: `The person ${newPerson.cpf} has been created`,
        content: newPerson
    }))
    .catch(err => res.status(500).json({ message: err.message }))
})

/* Get Person */
router.get('/person/:cpf', m.mustBeInteger, async (req, res) => {
    const cpf = req.params.cpf

    await person.getPerson(cpf)
    .then(person => res.json(person))
    .catch(err => {
        if (err.status) {
            res.status(err.status).json({ message: err.message })
        } else {
            res.status(500).json({ message: err.message })
        }
    })
})

/* Delete all relationships and persons in memory */
router.delete('/clean', async (req, res) => {
    await person.clearAll()
    .then(person => res.json({
        message: `All relationships and persons has been cleaned`
    }))
    .catch(err => {
        if (err.status) {
            res.status(err.status).json({ message: err.message })
        }
        res.status(500).json({ message: err.message })
    })
})

/* Create Relationship */
router.post('/relationship', async (req, res) => {
    console.log(req.body);
    await person.createRelationship(req.body.cpf1, req.body.cpf2)
    .then(myReturnMessage =>
        res.status(200).json({ 
            message: myReturnMessage 
        })
    )
    .catch(myErrorMessage => {
        res.status(404).json({ message: myErrorMessage })
    })
})

/* Get Recommendations */
router.get('/recommendations/:cpf', async (req, res) => {
    const cpf = req.params.cpf

    await person.getRecommendations(cpf)
    .then(persons => res.json(persons))
    .catch(err => {
        if (err.status) {
            res.status(err.status).json({ message: err.message })
        } else {
            res.status(500).json({ message: err.message })
        }
    })
})

module.exports = router