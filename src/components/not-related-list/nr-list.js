
import NotRelatedItem from "../not-related-item/nr-item";
import './nr-list.css'

const NotRelatedList =({nrTasks,onDelete})=>{
    let items
    //console.log(nrTasks)
    if(nrTasks!=null&&nrTasks!=undefined){
        items = nrTasks.map((item)=>{
            return(
                <NotRelatedItem key={item.id} text={item.text} tag={item.tag} onDelete={()=>onDelete(item.id)} date={item.date}/>
            )
        })
    }else{
        items = <li>Nothing</li>
    }

    

    
    return(
         <ul className="nr-list">
            {items}
        </ul>
    )
   

}

export default NotRelatedList;