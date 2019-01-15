import { addCompany, addOffice, removeCompany, removeOffice } from '../constant'

const addedCompany = company => ({
    type: addCompany,
    company
})

const removerCompany = companyKey => ({
    type: removeCompany,
    companyKey
})

const addedOffice = office => ({
    type: addOffice,
    office
})

const removerOffice = officeKey => ({
    type: removeOffice,
    officeKey
})

export {
    addedCompany,
    removerCompany,
    addedOffice,
    removerOffice
}