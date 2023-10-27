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
    clearFilter=(e)=>{
        this.props.onFiltered('');
        this.setState({filterTag:''})
        e.preventDefault();
    }



    render(){
        let optionTags
        let tags = this.props.tags
        if(tags!==null&&tags!==undefined){
            optionTags = tags.map((item)=>{
                return(<option value={item} key={item}></option>)
            })
        }else{
            optionTags= null
        }




        return(

            
            <div className="filter">
                <form className="filter-form" onSubmit={this.onSubmit}>
                    <input type="text"
                        list="tagsList"
                        className="nr-form-text"
                        placeholder="Tag"
                        name='nr-text'
                        value={this.state.filterTag}
                        onChange={this.onValueChange}>
                    </input>
                    <datalist id="tagsList">
                        {optionTags}
                    </datalist>
                    <button  className="filter-submit clear" onClick={this.clearFilter}>
                        Clear
                    </button>
                    <button type="submit" className="filter-submit">
                        Filter
                    </button>
                    


                </form>
            </div>




        )
    }
}

export default Filter;