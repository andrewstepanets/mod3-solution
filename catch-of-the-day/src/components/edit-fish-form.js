import React from 'react';

class EditFishForm extends React.Component{
    handleChange = (event) => {
        // update that fish 
        // 1. take a copy of the current fish
        const updatedFish = {
                ...this.props.fish, 
                [event.currentTarget.name]: event.currentTarget.value
            };
        this.props.updateFish(this.props.index, updatedFish);
    }
    render(){
        return(
            <div className="fish-edit">
                <input name="name" type="text" onChange={this.handleChange} value={this.props.fish.name}/>
                <input name="price" type="text" onChange={this.handleChange} value={this.props.fish.price}/>
                <select name="status">
                    <option value="available">Fresh!</option>
                    <option value="unavailable">Sold Out!</option>
                </select>
                <textarea name="desc" onChange={this.handleChange} value={this.props.fish.desc}></textarea>
                <input name="image"  type="text" onChange={this.handleChange} value={this.props.fish.image}/>
                <button onClick={() => this.props.deleteFish(this.props.index)}>Remove Fish</button>
            </div>
        )
    }
}

export default EditFishForm;