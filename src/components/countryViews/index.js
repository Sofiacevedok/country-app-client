import { connect } from 'react-redux';
import { getCountries } from '../../actions';
import CounterViews from './CountryViews';

const mapStateToProps = (state) => {
  return {
    countries: state.countries,
  };
};
function mapDispatchToProps(dispatch) {
  return {
    getCountries: (filters) => dispatch(getCountries(filters)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CounterViews);
