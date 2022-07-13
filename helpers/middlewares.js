function mustBeInteger(req, res, next) {
    const cpf = req.params.cpf
    if (!Number.isInteger(parseInt(cpf))) {
        res.status(400).json({ message: 'CPF must be an integer' })
    } else {
        next()
    }
}

function checkFieldsPerson(req, res, next) {
    const { cpf, name } = req.body
    if (cpf && name) {
        next()
    } else {
        res.status(400).json({ message: 'fields are not good' })
    }
}
function mustBeEleven(req, res, next) {
    const { cpf } = req.body
    if (cpf.length === 11) {
        next()
    } else {
        res.status(400).json({ message: 'CPF length is wrong!' })
    }
}


module.exports = {
    mustBeInteger,
    checkFieldsPerson,
    mustBeEleven

}