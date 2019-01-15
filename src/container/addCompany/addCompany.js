import { connect } from 'react-redux';
import { addedCompany } from '../../actions/addedCompany';
import { removerCompany } from '../../actions/addedCompany';


const mapStateToProps = state => ({
  company: state.addingCompany
})

const mapDispatchToProps = (dispatch) => {
  return ({
    submitNewCompany: (newCompany) => dispatch(addedCompany(newCompany)),
    closeCompany: (companyKey) => dispatch(removerCompany(companyKey))
  })
}

export default connect(
  mapStateToProps, 
  mapDispatchToProps 
)