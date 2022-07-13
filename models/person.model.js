const helper = require('../helpers/helper.js')


function insertPerson(newPerson) {
    return new Promise((resolve, reject) => {
        helper.validateCpfFromInsert(newPerson.cpf)
        .then(row => {
            newPerson = {
                'cpf': newPerson.cpf,
                'name': newPerson.name,
                'friends': []
            }

            persons.push(newPerson)
    
            resolve(newPerson)    
        })
        .catch(err => reject(err))
    })
}

function getPersons() {
    return new Promise((resolve, reject) => {
        helper.verifyPersons()
        .then(persons => resolve(persons))
        .catch(err => reject(err))
    })
}

function getPerson(cpf) {
    return new Promise((resolve, reject) => {
        helper.shouldExist(cpf)
        .then(person => resolve(person))
        .catch(err => reject(err))
    })
}

function clearAll() {
    return new Promise((resolve, reject) => {
        persons.splice(0, persons.length)
        resolve()
        .catch(err => reject(err))
    })
}

function createRelationship(cpf1, cpf2) {
    return new Promise((resolve, reject) => {
        helper.shouldBothExist(cpf1, cpf2)
        .then(cpfIndexes => {

            personCpf1 = {
                "cpf": persons[cpfIndexes[0]].cpf,
                "name": persons[cpfIndexes[0]].name
            }

            personCpf2 = {
                "cpf": persons[cpfIndexes[1]].cpf,
                "name": persons[cpfIndexes[1]].name
            }

            persons[cpfIndexes[0]]['friends'].push(personCpf2);                        
            persons[cpfIndexes[1]]['friends'].push(personCpf1);    
            
            myReturnMessage = persons
            resolve(myReturnMessage)    
        })
        .catch(err => reject(err))
    })
}

function getRecommendations(cpf) {
    return new Promise((resolve, reject) => {
        if (cpf.length != 11) {
            reject({
                message: 'CPF length is wrong!',
                status: 400
            })
        }
        
        helper.shouldExist(cpf)
        .then(person => {
            let myRecommendations = []

            person['friends'].map(function(item, index) {
                let myFriendIndex = persons.findIndex(r => r.cpf == item.cpf)
                persons[myFriendIndex]['friends'].map(function(subItem, subIndex) {
                    if(subItem.cpf != item.cpf || subItem.cpf != cpf) {
                        myRecommendations.push(subItem.cpf)
                    }
                })
            })
            
            resolve(myRecommendations)
        })
        .catch(err => reject(err))

    })
}

module.exports = {
    getPersons,
    insertPerson, 
    getPerson,
    clearAll,
    createRelationship,
    getRecommendations
}