const tasks={
    tasks:[{
        text:"Grocery shopping",
        completed:true
    },{
        text:"clean Yard",
        completed:false
    },{
        text:"file course",
        completed:false
    }
        
    ],
    getTasksToDo(){
        return this.tasks.filter((task)=> task.completed===false)

        
        
    }
}

console.log(tasks.getTasksToDo())