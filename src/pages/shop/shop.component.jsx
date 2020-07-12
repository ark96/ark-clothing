import React from 'react';
import {Route} from 'react-router-dom';
import CollectionsOverview from '../../components/collection-overview/collection-overview.component';
import CollectionPage from '../collection/collection.component';
//import CollectionPageTest from '../collection/collection.component';--testing
import {firestore, convertCollectionsSnapshotToMap} from '../../firebase/firebase.util';
import {connect} from 'react-redux';
import { updateCollections } from '../../redux/shop/shop.actions';
import WithSpinner from '../../components/with-spinner/with-spinner.component';

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionsPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component {
  unsubscribeFromSnashot = null;
  state = {
    loading : true
  };
  componentDidMount(){
    const {updateCollections} = this.props;
    const collectionRef = firestore.collection('collections');
    // fetch('https://firestore.googleapis.com/v1/projects/ark-db-3bd8b/databases/(default)/documents/collections')
    // .then(response => response.json()
    // .then(collections => console.log(collections)));
    // collectionRef.onSnapshot( async snapshot => {
    //   const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
    //   updateCollections(collectionsMap);
    //   this.setState({loading: false});
    // } )
    collectionRef.get.then(
      snapshot => {
          const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
          updateCollections(collectionsMap);
          this.setState({loading: false});
        }
    );
  }

  render(){
    const {match} = this.props;
    const {loading} = this.state;
    return (
      <div className='shop-page'>
        <Route exact path={`${match.path}`} render={(props) => <CollectionsOverviewWithSpinner isLoading= {loading} {...props} />} />
        <Route path={`${match.path}/:collectionId`} render={(props) => <CollectionsPageWithSpinner isLoading= {loading} {...props} />}  />
      </div>
    )
}};

const mapDispatchToProps = dispatch => ({
  updateCollections : collectionsMap => dispatch(updateCollections(collectionsMap))
})


// class ShopPage extends React.Component{
//     constructor(props){
//         super();
//         this.state = {
//             collections : shop_data
//         }
//     }

//     render(){
//         const {collections} = this.state;
//         return(
//             <div className='shop-page'>
//                 {
//                     collections.map(
//                         ({id, ...otherCollectionProps}) => (
//                             <CollectionPreview key={id} {...otherCollectionProps}/>
//                         )
//                     )
//                 }
//             </div>
//         )
//     }
// };

export default connect(null,mapDispatchToProps)(ShopPage);