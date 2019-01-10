import { combineReducers } from 'redux'
import addingCompany from './addingCompany'
import addingOffice from './addingOffice'

const allReducer = combineReducers({
  addingCompany,
  addingOffice
})

export default allReducer
