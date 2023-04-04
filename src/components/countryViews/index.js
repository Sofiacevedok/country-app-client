import { connect } from 'react-redux';
import { getCountries } from '../../actions';
import { getActivities } from '../../actions';
import CounterViews from './CountryViews';

const mapStateToProps = (state) => {
  return {
    countries: state.countries,
    activities: state.activities,
  };
};
function mapDispatchToProps(dispatch) {
  return {
    getCountries: (filters) => dispatch(getCountries(filters)),
    getActivities: () => dispatch(getActivities()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CounterViews);
