import { connect } from 'react-redux';
import { addedOffice } from '../../actions/addedCompany';

const mapStateToProps = state => ({
  office: state.addingOffice
})

const mapDispatchToProps = (dispatch) => {
  return ({
    submitNewOffice: (newOffice) => dispatch(addedOffice(newOffice))
  })
}

export default connect(
  mapStateToProps, 
  mapDispatchToProps 
)