import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {selectIsCollcetionFetching} from '../../redux/shop/shop.selector';
import WithSpinner from '../with-spinner/with-spinner.component';
import CollectionsOverview from './collection-overview.component';
import {compose} from 'redux';

const mapStateToProps = createStructuredSelector({
    isLoading : selectIsCollcetionFetching
});

//const CollectionsOverviewContainer = connect(mapStateToProps)(WithSpinner(CollectionsOverview));

const CollectionsOverviewContainer = compose(
    connect(mapStateToProps),WithSpinner)(CollectionsOverview);

export default CollectionsOverviewContainer;