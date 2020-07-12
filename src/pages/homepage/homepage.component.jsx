import React from 'react';
//import './homepage.style.scss';
import Directory from '../../components/directory/directory.component.jsx';
import {HomePageContainer} from './homepage.styles';

const HomePage = () => (
    <HomePageContainer>
        <Directory />
    </HomePageContainer>
);

export default HomePage;