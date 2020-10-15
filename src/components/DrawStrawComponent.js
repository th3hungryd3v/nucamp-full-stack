import React, { Component } from 'react'
import {Button, Input, Label} from 'reactstrap';
 class DrawStrawCompnent extends Component {
        constructor(props) {
            super(props);
            this.state = {
                drawn:'',
                currentAddItem:'',
                itemsToDrawFrom:[],
                strawDrawn:false

            }
    }

    renderStrawDrawn = (listOfItems) =>{

        ///select random part of this.state.itemsToDrawFrom and set strawDrawn to its value
        //first lets get a random number with the length of the list as the max. 
        const randoInt = Math.floor(Math.random() * Math.floor(this.state.itemsToDrawFrom.length-1))
        this.setState({
            strawDrawn:this.state.itemsToDrawFrom[randoInt]
        })
    }

    handleInput =(event) =>{
        this.setState({
            currentAddItem:event.target.value
        })
    }
    handleNewItem= (newItem)=>{
        this.setState({
            itemsToDrawFrom: [...this.state.itemsToDrawFrom,newItem+', '],
            currentAddItem:''
        })
    }
    render() {
        return (
            <div style={{marginTop:40}} class='container'>
                
                <h1>Lets draw straws to see what we are going to do eh? </h1>
                <div style={{marginTop:20}}>
                    {/* <h2>Current List To Draw From:{this.state.itemsToDrawFrom >0 ? JSON.stringify(this.state.itemsToDrawFrom) : 'Nothing added yet'}</h2> */}
                    {this.state.itemsToDrawFrom.length >0 ? <h1>List of items: {this.state.itemsToDrawFrom}</h1> : <h1>Add some items below...</h1>}
                    <Label style={{marginTop:20}} for='newItem'>New Item to Add</Label>
                    <Input name='newItem' id='newItem' placeholder={'Add Item'} value={this.state.currentAddItem} onChange={this.handleInput}/>
                    <Button style={{marginTop:10}} color='primary' onClick={()=>this.handleNewItem(this.state.currentAddItem)}>Add Item</Button>
                </div>
                <div style={{marginTop:20}}>
                    <Button color='primary' onClick={this.renderStrawDrawn}>Draw</Button>
                </div>
                <div>
                    {this.state.strawDrawn ?<h1>Lucky you! You drew {this.state.strawDrawn}</h1> : <div></div>}
                </div>
            </div>
        )
    }
}

export default DrawStrawCompnent
