import { connect } from 'react-redux';
import { addedOffice } from '../../actions/addedCompany';
import { removerOffice } from '../../actions/addedCompany';


const mapStateToProps = state => ({
  office: state.addingOffice,
  company: state.addingCompany
})

const mapDispatchToProps = (dispatch) => {
  return ({
    submitNewOffice: (newOffice) => dispatch(addedOffice(newOffice)),
    closeOffice: (officeKey) => dispatch(removerOffice(officeKey))
  })
}

export default connect(
  mapStateToProps, 
  mapDispatchToProps 
)