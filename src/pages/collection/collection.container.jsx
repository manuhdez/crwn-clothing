import { connect } from 'react-redux';
import { compose } from 'redux';

import { selectHasCollectionsLoaded } from '../../redux/shop/shop.selectors';
import withSpinner from '../../components/with-spinner/with-spinner.component';
import CollectionPage from './collection.component';

const mapStateToProps = (state) => ({
  isLoading: selectHasCollectionsLoaded(state)
});

const CollectionsPageContainer = compose(
  connect(mapStateToProps),
  withSpinner
)(CollectionPage);

export default CollectionsPageContainer;
