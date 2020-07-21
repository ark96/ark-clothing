import React from 'react';
import './custom-button.style.scss';
// import {CustomButtonContainer} from './custom-button.styles'


const CustomButton = ({children,inverted, ...otherProps}) => (
    <button className={`${inverted ? 'inverted' : ''} custom-button`} {...otherProps}>
        {children}
    </button>
);

export default CustomButton;