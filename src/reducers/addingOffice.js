import { addOffice, removeOffice } from '../constant'

const addingOffice = (state=[], action) => {
  switch(action.type){
    case addOffice:
      return [...state, action.office]
    case removeOffice:
    return state.splice(action.officeKey - 1, state.length === 1 ? 0 : 1)
    default:
      return state
  }
}

export default addingOffice