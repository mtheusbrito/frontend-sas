import React from 'react';
import api from  '~/services/api';

// import { Container } from './styles';
class Main extends React.Component{
    componentDidMount(){
        api.get('/teste')
    }
    render(){
        return (
            <div>
                <h2>Main sdafs</h2>
            </div>
        )
    }
}

export default Main;