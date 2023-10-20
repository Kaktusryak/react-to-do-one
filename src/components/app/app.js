import { Component } from "react";
import NotRelatedForm from '../not-related-form/nr-form';
import NotRelatedList from "../not-related-list/nr-list";
import Filter from "../filter/filter";
import './app.css'


class App extends Component{
    constructor(props){
        super(props)
        this.state={
           nrTasks:[],
           filterTag:'',
           maxId:0
        }
        
        
        
        
    }
    componentDidMount(){

        const json = localStorage.getItem('nrTasks')
        const id = localStorage.getItem('maxId')
        //console.log(localStorage)
        
        const nrTasks = JSON.parse(json)
        
        this.setState({nrTasks:nrTasks})
        if(json===null){
            this.setState({maxId:0})
        }else{
            this.setState({maxId:id})
        }
        
        
        
    }
    componentDidUpdate(prevProps,prevStates){
        const json = JSON.stringify(this.state.nrTasks)
        localStorage.setItem('nrTasks',json)
        localStorage.setItem('maxId',this.state.maxId)
        //console.log(localStorage)
    }


    onFilterSet=(tag)=>{
        this.setState({filterTag:tag})
    }

    addNRTask = (text,tag,date)=>{
        if(text!==''){
            if(this.state.nrTasks===null){
                this.setState(({nrTasks,maxId})=>{
                    
                    const newNRTask = {text:text,id:this.state.maxId,tag:tag,date:date}
                    const newArr = [newNRTask]

                    return{nrTasks:newArr,maxId:0}
    
                })
            }else{
                this.setState(({nrTasks,maxId})=>{
                    
                    const newNRTask = {text:text,id:this.state.maxId,tag:tag,date:date}
                    const newArr = [...nrTasks, newNRTask]
                    return{nrTasks:newArr,maxId:Number(this.state.maxId)+1}
    
                })
            }
            
        }
    }
    deleteNRTask = (id)=>{
        
        this.setState(({nrTasks})=>(
            {
                nrTasks:nrTasks.filter(item=>item.id!==id)
            }))
        
           
    }

    render(){
        
        let filtered=  this.state.nrTasks
        if(filtered!=null && filtered!=undefined){
            filtered.sort((a,b)=>a.date > b.date ? 1 : -1)
        }
        
        if(this.state.filterTag!=''){
           filtered=filtered.filter(item=>item.tag==this.state.filterTag)
        }



        return(
            <div className="app">
                <NotRelatedForm onAdd={this.addNRTask}/>
                <Filter onFiltered={this.onFilterSet}/>
                <NotRelatedList nrTasks={filtered} onDelete={this.deleteNRTask}/>
            </div>
        )
    }

}

export default App;