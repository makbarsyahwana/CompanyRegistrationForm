import { addOffice } from '../constant'

const addingOffice = (state=[], action) => {
  switch(action.type){
    case addOffice:
      return [...state, action.office]
    default:
      return state
  }
}

export default addingOffice