import { connect } from 'react-redux';
import {
  createActivity,
  getActivities,
  getCountries,
} from '../../actions/index';
import CreateActivity from './CreateActivity';

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
    createActivity: (obj) => dispatch(createActivity(obj)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateActivity);
