import { connect } from 'react-redux';
import { getCountry } from '../../actions';
import CountryDetail from './CountryDetail';

const mapStateToProps = (state) => {
  return {
    country: state.country,
  };
};
function mapDispatchToProps(dispatch) {
  return {
    getCountry: (id) => dispatch(getCountry(id)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CountryDetail);
