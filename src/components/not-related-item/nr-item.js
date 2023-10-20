import { Component } from "react";
import './nr-item.css'

class NotRelatedItem extends Component{
    constructor(props){
        super(props)
       
    }
   

    render(){
        const today = Date.now()
        const text = this.props.text
        let tag = this.props.tag
        const date = this.props.date
        let pTag = <p className="nr-item-tag">{tag}</p>
        if(tag==''){
            pTag=<p className="nr-item-tag">No tag</p>
        }
       

         let tDate = new Date(date)
        let pDate = <p className="nr-item-date">{date}</p>
        if(tDate<today){
           pDate =  <p className="nr-item-date expired">{date}</p>
        }
        if(date==''){
            pDate=<p className="nr-item-date">No date</p>
        }
        

        return(
            <li className="nr-item">
                <p className="nr-item-text">{text}</p>
                <div className="no-text">
                    {pTag}
                    {pDate}
                </div>
                
                <button 
                    onClick={this.props.onDelete}
                    data-toggle="delete"
                    type="button" 
                    className="nr-item-delete">
                Remove

                </button>
            </li>

            
        )
    }

}

export default NotRelatedItem;