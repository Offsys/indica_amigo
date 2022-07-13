function verifyPersons() {
    return new Promise((resolve, reject) => {
        if (!persons.length) {
            
            reject({
                message: 'No people registered yet :(',
                status: 404
            })
        }
        resolve(persons)
    })
}

function validateCpfFromInsert(cpf) {
    return new Promise((resolve, reject) => {
        const row = persons.findIndex(r => r.cpf == cpf)
        
        if (row === 0) {
           reject({
                message: 'CPF already exists ...',
                status: 404
            })
            console.log(message)
        }
        
        resolve(row)
    })
}

function shouldExist(cpf) {
    return new Promise((resolve, reject) => {
        const row = persons.find(r => r.cpf == cpf)
        if (!row) {
            reject({
                message: 'CPF not found',
                status: 404
            })
        }
        resolve(row)
    })
}

function shouldBothExist(cpf1, cpf2) {
    return new Promise((resolve, reject) => {
        let indexCpf1 = persons.findIndex(r => r.cpf == cpf1)
        let indexCpf2 = persons.findIndex(r => r.cpf == cpf2)
        
        if (indexCpf1 < 0) {
            reject({
                message: 'CPF1 - Not Found',
                status: 404
            })
        }        
        if (indexCpf2 < 0) {
            reject({
                message: 'CPF2 - Not Found',
                status: 404
            })
        }        

        let cpfIndexes = [];
        cpfIndexes[0] = indexCpf1
        cpfIndexes[1] = indexCpf2
        resolve(cpfIndexes)
    })
}

module.exports = {
    verifyPersons,
    validateCpfFromInsert,
    shouldExist,
    shouldBothExist,
}