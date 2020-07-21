import { takeLatest, call, put, all} from 'redux-saga/effects';
import ShopActionTypes from './shop.type';
import {firestore, convertCollectionsSnapshotToMap} from '../../firebase/firebase.util';
import { fetchCollectionsSuccess, fetchCollectionsFailure } from './shop.actions.js';

export function* fetchCollectionsAsync(){
    try{
        const collectionRef = firestore.collection('collections');
        const snapshot = yield collectionRef.get()
        const collectionsMap = yield call(convertCollectionsSnapshotToMap,snapshot);
        yield put(fetchCollectionsSuccess(collectionsMap));//put for sagas as in dispatch for thunk

    }catch(error){
        yield put(fetchCollectionsFailure(error.message));
    }
    
        // collectionRef.get().then(
        // snapshot => {
        //     const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
        //     //updateCollections(collectionsMap);
        //     dispatch(fetchCollectionsSuccess(collectionsMap));
        //     //this.setState({loading: false});
        //     }
        // ).catch(error => fetchCollectionsFailure(error.message));
}

export function* fetchCollectionsStart(){
    yield takeLatest(ShopActionTypes.FETCH_COLLECTIONS_START, fetchCollectionsAsync)
}

export function* shopSagas(){
    yield all([call(fetchCollectionsStart)])
}