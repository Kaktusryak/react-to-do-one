import { Component } from "react";
import './nr-form.css'

class NotRelatedForm extends Component{
    constructor(props){
        super(props)
        this.state={
            nrText:"",
            nrTag:"",
            nrDate:""
        }
    }
    onValueChange=(e)=>{
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    

    onSubmit = (e)=>{
        this.props.onAdd(this.state.nrText,this.state.nrTag,this.state.nrDate)
        this.setState({
            nrText: "",
            nrTag:"",
            nrDate:""
        })
        e.preventDefault();
        
    }

    render(){
        return(
            <div className="nr-form-div">
                <p>Add new task</p>
                <form className="nr-form" onSubmit={this.onSubmit}>  
                    <input type="text"
                        className="nr-form-text"
                        placeholder="Task"
                        name='nrText'
                        value={this.state.nrText}
                        onChange={this.onValueChange}
                    ></input>
                    <input type="date"
                        min={new Date().toISOString().split('T')[0]}
                        className="nr-form-date"
                        placeholder=""
                        name='nrDate'
                        value={this.state.nrDate}
                        onChange={this.onValueChange}
                    ></input>
                    <input type="text"
                        className="nr-form-tag"
                        placeholder="Tag"
                        name='nrTag'
                        value={this.state.nrTag}
                        onChange={this.onValueChange}
                    >
                        
                    </input>
                    <button
                        type="submit"
                        className="nr-submit"
                    >
                        Add

                    </button>
                </form>
            </div>
        )
    }

}

export default NotRelatedForm;