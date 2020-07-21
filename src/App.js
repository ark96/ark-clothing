import React, {useEffect} from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.component.jsx';
import {Route, Redirect} from 'react-router-dom';
import ShopPage from './pages/shop/shop.component.jsx';
import Header from "./components/header/header.component.jsx";
import SignInSignOut from './pages/sign-in/sign-in-sign-out.component.jsx';
// import {auth, createUserProfileDocument} from './firebase/firebase.util';
import {connect} from 'react-redux';
// import { setCurrentUser } from "./redux/user/user.actions";
import {createStructuredSelector} from 'reselect';
import { selectCurrentUser} from './redux/user/user.selector';
import CheckoutPage from './pages/checkout/checkout.component.jsx';
//import {selectCollectionsForPreview} from './redux/shop/shop.selector';
import {checkUserSession} from './redux/user/user.actions';

const App = ({checkUserSession, currentUser}) =>  {
  useEffect(() => {checkUserSession()},[checkUserSession]);
  //unsubscribeFromAuth = null;
  // componentDidMount(){
  //   const {checkUserSession} = this.props;
  //   checkUserSession();
  //   //const {setCurrentUser} = this.props;
  //   // this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
  //   //   if(userAuth){
  //   //     const userRef = await createUserProfileDocument(userAuth);

  //   //     userRef.onSnapshot(snapShot => {
  //   //       setCurrentUser({
  //   //           id: snapShot.id,
  //   //           ...snapShot.data()  
  //   //       },() => {
  //   //         console.log(this.state);
  //   //       })
  //   //     })
  //   //   }
  //   //   else{
  //   //     setCurrentUser(userAuth);
  //   //     //addCollectionAndDocuments('collections', collectionsArray.map(({title, items}) => ({title, items})));
  //   //   }
      
      
  //   // })
  // };

  // componentWillUnmount(){
  //   this.unsubscribeFromAuth();
  // };

  // render(){
  return (
    <div >
      <Header />
      <switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        <Route exact path='/checkout' component={CheckoutPage} />
        <Route exact path='/signin' render={() => currentUser ? (<Redirect to='/' />) : (<SignInSignOut />)} />
      </switch>
    </div>
  );
  // }

}

const mapStateToProps = createStructuredSelector({
  currentUser : selectCurrentUser,
  //collectionsArray : selectCollectionsForPreview
})

// const mapDispatchToProps = dispatch => ({
//   setCurrentUser : user => dispatch(setCurrentUser(user))
// });

const mapDispatchToProps = dispatch => ({
  checkUserSession : () => dispatch(checkUserSession())
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
