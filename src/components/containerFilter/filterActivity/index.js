import { connect } from 'react-redux';
import { getActivities } from '../../../actions/index';
import FilterActivity from './FilterActivity';

const mapStateToProps = (state) => {
  return {
    activities: state.activities,
  };
};
function mapDispatchToProps(dispatch) {
  return {
    getActivities: () => dispatch(getActivities()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(FilterActivity);
