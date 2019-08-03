import { connect } from 'react-redux';
import { compose } from 'redux';

import { selectCollectionsIsFetching } from '../../redux/shop/shop.selectors';
import withSpinner from '../with-spinner/with-spinner.component';
import CollectionsOverview from './collections-overview.component';

const mapStateToProps = (state) => ({
  isLoading: selectCollectionsIsFetching(state)
});

const CollectionsOverviewContainer = compose(
  connect(mapStateToProps),
  withSpinner
)(CollectionsOverview);

export default CollectionsOverviewContainer;
