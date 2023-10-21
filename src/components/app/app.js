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
           maxId:0,
           tags:[]
        }
        
        
        
        
    }
    componentDidMount(){
        localStorage.clear()
        const json = localStorage.getItem('nrTasks')
        const id = localStorage.getItem('maxId')
        const jsonTags = localStorage.getItem('tags')
        //console.log(localStorage)
        
        const nrTasks = JSON.parse(json)
        const jTags = JSON.parse(jsonTags)
        
        this.setState({nrTasks:nrTasks})
        this.setState({tags:jTags})
        if(json===null){
            this.setState({maxId:0})
        }else{
            this.setState({maxId:id})
        }
        
        
        
    }
    componentDidUpdate(prevProps,prevStates){
        const json = JSON.stringify(this.state.nrTasks)
        const jsonTags = JSON.stringify(this.state.tags)
        localStorage.setItem('nrTasks',json)
        localStorage.setItem('tags',jsonTags)
        localStorage.setItem('maxId',this.state.maxId)
        console.log(localStorage)
    }


    onFilterSet=(tag)=>{
        this.setState({filterTag:tag})
    }

    addNRTask = (text,tag,date)=>{
        if(text!==''){
            if(this.state.nrTasks===null){
                this.setState(({nrTasks,maxId,tags})=>{
                    let newTags = this.state.tags
                    if(this.state.tags===null){
                            
                        newTags = [tag]
                    }else{
                        let isThereATag = false
                        
                        for(let i of tags){
                            console.log(i)
                            if(i.toUpperCase()==tag.toUpperCase()){
                                isThereATag = true
                            }
                        }
                        if(!isThereATag)newTags = [...tags, tag]
                    }
                        
                        
                    
                    const newNRTask = {text:text,id:this.state.maxId,tag:tag,date:date}
                    const newArr = [newNRTask]

                    return{nrTasks:newArr,maxId:1,tags:newTags}
    
                })
            }else{
                this.setState(({nrTasks,maxId,tags})=>{
                    let newTags = this.state.tags
                    if(this.state.tags===null){
                          
                        newTags = [tag]
                    }else{
                        console.log("tags " + this.state.tags) 
                        let isThereATag = false
                        
                        for(let i of tags){
                            console.log(i)
                            if(i.toUpperCase()==tag.toUpperCase()){
                                isThereATag = true
                            }
                        }
                        if(!isThereATag)newTags = [...tags, tag]
                    }


                    const newNRTask = {text:text,id:this.state.maxId,tag:tag,date:date}
                    const newArr = [...nrTasks, newNRTask]
                    
                    console.log(this.state.tags)
                    return{nrTasks:newArr,maxId:Number(this.state.maxId)+1,tags:newTags}
    
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
        
        
        if(this.state.filterTag!=''){
           filtered=filtered.filter(item=>item.tag==this.state.filterTag)
        }



        return(
            <div className="app">
                <NotRelatedForm onAdd={this.addNRTask} tags={this.state.tags}/>
                <Filter onFiltered={this.onFilterSet} tags={this.state.tags}/>
                <NotRelatedList nrTasks={filtered} onDelete={this.deleteNRTask}/>
            </div>
        )
    }

}

export default App;