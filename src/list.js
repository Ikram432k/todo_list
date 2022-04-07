import { format } from "date-fns";

class list{
    static createTaskList(name,date){
        let div = document.createElement('div');
        div.classList.add('task-list');
        div.setAttribute('data-name',name);
         
        let checkbox = document.createElement('input');
        checkbox.classList.add('check');
        checkbox.type = "checkbox";
        checkbox.setAttribute('data-name',name);
        div.appendChild(checkbox);
        
        let taskname = document.createElement('p');
        taskname.classList.add('task-name');
        taskname.textContent = name;
        div.appendChild(taskname);

        let taskdate = document.createElement('p');
        taskdate.classList.add('task-date');
        taskdate.textContent = format(new Date(date),'dd/MM/yyyy');
        div.appendChild(taskdate);

        let removetask = document.createElement('button');
        removetask.classList.add('remove');
        removetask.setAttribute('data-name',name);
        removetask.innerHTML = '<i class="material-icons">delete</i> '
        div.appendChild(removetask);
        
        return div;
    }
    static updateTitle(heading){
        let title = document.querySelector('.title');
        title.textContent = heading;
    }
    static removeTask(r,head){         
       let getLocalTask = JSON.parse(localStorage.getItem(head));
        let container = document.querySelector('.taskcontainer');
        let item = document.querySelectorAll('.task-list');
        item.forEach((div)=>{
            if(div.dataset.name === r.dataset.name){
               let localindex = getLocalTask.findIndex(x => x.name === div.dataset.name)
                container.removeChild(div);
               getLocalTask.splice(localindex,1);
               localStorage.setItem(head,JSON.stringify(getLocalTask));
            }
        })
    }
    static delete(head){

        let removeButton = document.querySelectorAll('.remove');

        removeButton.forEach(r => {
            r.onclick = () => {
                list.removeTask(r, head);
            }
        });
    }
    static diplayTaskList(taskArr,heading = 'Inbox'){
        this.updateTitle(heading);

        let container  = document.querySelector('.taskcontainer');

        let name, date;
        for (let i = container.childElementCount - 1;i <= taskArr.length - 1;i++){
            for(let j in taskArr[i]) {
                if(j === 'name'){
                    name = taskArr[i][j]
                }
                if(j === 'date'){
                    date = taskArr[i][j]
                }
            }
            container.appendChild(this.createTaskList(name,date));

        }
        this.delete(heading);
    }
}
export default list;