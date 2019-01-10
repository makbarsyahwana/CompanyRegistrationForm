import { addCompany, addOffice } from '../constant'

const addedCompany = company => ({
    type: addCompany,
    company
})

const addedOffice = office => ({
    type: addOffice,
    office
})
export {
    addedCompany,
    addedOffice
}