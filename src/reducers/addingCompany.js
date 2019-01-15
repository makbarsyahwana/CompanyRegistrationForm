import { addCompany, removeCompany } from '../constant'

const addingCompany = (state=[], action) => {
  switch(action.type){
    case addCompany:
      return [...state, action.company]
    case removeCompany:
      return state.splice(action.companyKey - 1, state.length === 1 ? 0 : 1)
    default:
      return state
  }
}

export default addingCompany