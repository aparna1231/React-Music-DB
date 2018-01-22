import React, {Component} from 'react';
import Header from './header'

const REQ_URL ="http://localhost:4500/artists"
class Artist extends Component{
    
    constructor(props){
        //console.log(props)
        super(props);

        this.state={
            artist:''
        }
    }

    componentDidMount(){
        fetch(`${REQ_URL}/${this.props.match.params.artistId}`, {
            method: 'GET'
        })
        .then(response => response.json())
        .then(json =>{
           console.log(json)
        })
    }

    render(){
        return(
            <div>
                <Header></Header>
            </div>
        )
    }
}

export default Artist