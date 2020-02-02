import { connect } from 'react-redux';
import { compose } from 'redux';

import { selectCollectionsIsFetching } from '../../redux/shop/shop.selectors';
import withSpinner from '../with-spinner/with-spinner.component';
import CollectionsOverview from './collections-overview.component';
import { StoreState } from '../../redux/rootReducer';

const mapStateToProps = (state: StoreState) => ({
  isLoading: selectCollectionsIsFetching(state)
});

const CollectionsOverviewContainer: React.FC = compose<React.FC>(
  connect(mapStateToProps),
  withSpinner
)(CollectionsOverview);

export default CollectionsOverviewContainer;
