import { addCompany } from '../constant'

const addingCompany = (state=[], action) => {
  switch(action.type){
    case addCompany:
      return [...state, action.company]
    default:
      return state
  }
}

export default addingCompany