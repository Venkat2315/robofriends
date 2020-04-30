import React,{Component}from 'react';
import CardList1 from './CardList';
import {robots} from './robots';
import Scroll from './scroll';
import Searchbox from './searchbox';

class app extends Component{
    constructor(){
        super()
        this.state={
            robots: [],
            searchfeild: ''
        }
    }
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response=> response.json())
        .then(users=> this.setState({robots: users}))
    }
    onsearchchange=(event)=>{
        this.setState({searchfeild: event.target.value})
    }
    render(){
        const filterrobots=this.state.robots.filter((robots) =>{
            return robots.name.toLowerCase().includes(this.state.searchfeild.toLowerCase());
        })
        if(robots.length===0){
            return <h1>loading...</h1>
        }
        else{
    return(
        <div className='tc'>
        <h1>ROBOFRIENDS</h1>
        <Searchbox searchChange={this.onsearchchange}/>
        <Scroll>
            <CardList1 robots={filterrobots}/>
        </Scroll>
        </div>
    );
        }
}}

export default app;