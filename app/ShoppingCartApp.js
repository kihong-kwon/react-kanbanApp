import React, {Component} from 'react';
import {render} from 'react-dom';
import Container from '../component/shoppingCart/Container';

class ShoppingCartApp extends Component {
    render() {
        return (
            <Container/>
        );
    }
}

render(<ShoppingCartApp/>, document.getElementById('root'));