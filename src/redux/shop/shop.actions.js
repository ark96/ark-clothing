import ShopActionTypes from './shop.type';
import {firestore, convertCollectionsSnapshotToMap} from '../../firebase/firebase.util';

export const fetchCollectionsStart = (collectionMap) => ({
    // type : ShopActionTypes.UPDATE_COLLECTIONS,
    type : ShopActionTypes.FETCH_COLLECTIONS_START,
    payload : collectionMap
});

export const fetchCollectionsSuccess = collectionMap => ({
    type : ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
    payload : collectionMap
});

export const fetchCollectionsFailure = errorMessage => ({
    type : ShopActionTypes.FETCH_COLLECIONS_FAILURE,
    payload : errorMessage
});

export const fetchCollectionStartAsync = () => {
    return dispatch => {
        const collectionRef = firestore.collection('collections');
        dispatch(fetchCollectionsStart());

        collectionRef.get().then(
        snapshot => {
            const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
            //updateCollections(collectionsMap);
            dispatch(fetchCollectionsSuccess(collectionsMap));
            //this.setState({loading: false});
            }
        ).catch(error => fetchCollectionsFailure(error.message));
    }
};