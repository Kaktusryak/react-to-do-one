import { Component } from "react";
import './filter.css'

class Filter extends Component{
    constructor(props){
        super(props)
        this.state={
            filterTag:''
        }
    }

    onValueChange=(e)=>{
        this.setState({filterTag:e.target.value})
    }
    onSubmit=(e)=>{
        this.props.onFiltered(this.state.filterTag);
        e.preventDefault();
    }




    render(){





        return(
            <div className="filter">
                <form className="filter-form" onSubmit={this.onSubmit}>
                    <input type="text"
                        className="nr-form-text"
                        placeholder="Tag"
                        name='nr-text'
                        value={this.state.filterTag}
                        onChange={this.onValueChange}>
                    </input>
                  
                    <button type="submit" className="filter-submit">
                        Filter
                    </button>


                </form>
            </div>




        )
    }
}

export default Filter;