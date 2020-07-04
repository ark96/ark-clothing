import React from 'react';
import {Route} from 'react-router-dom';
import CollectionsOverview from '../../components/collection-overview/collection-overview.component';
import CollectionPage from '../collection/collection.component';
//import CollectionPageTest from '../collection/collection.component';--testing

const ShopPage = ({ match }) => (
    <div className='shop-page'>
      <Route exact path={`${match.path}`} component={CollectionsOverview} />
      <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
    </div>
  );




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

export default ShopPage;