import { connect } from 'react-redux';
import { compose } from 'redux';

import { selectHasCollectionsLoaded } from '../../redux/shop/shop.selectors';
import withSpinner from '../../components/with-spinner/with-spinner.component';
import CollectionPage from './collection.component';
import { StoreState } from '../../redux/rootReducer';

// types
interface CollectionContainerState {
  isLoading: boolean;
}

const mapStateToProps = (state: StoreState): CollectionContainerState => ({
  isLoading: selectHasCollectionsLoaded(state)
});

const CollectionsPageContainer = compose<any>(
  connect(mapStateToProps),
  withSpinner
)(CollectionPage);

export default CollectionsPageContainer;
