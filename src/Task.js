import { format } from 'date-fns';
import list from './list';
class task{
    static getTodayTask(arr,arrName){
        let currentDate = format(new Date(),'yyyy-MM-dd');
        let toadayArr = arr.filter(a=>a.date === currentDate);
        list.diplayTaskList(toadayArr,arrName);
    }
    static filterToday(arrName){
        let todaybtn = document.querySelector('.today');
        todaybtn.onclick = () =>{
            task.clearChild();
            let localtask = JSON.parse(localStorage.getItem(arrName));
            task.getTodayTask(localtask,arrName);
        }
    }
    static clearChild(){
        let content = document.querySelector('.taskcontainer');
        while(content.childNodes.length > 1){
            content.removeChild(content.lastChild);
        }
    }
    static checkLocalStorage(arr){
        let getArr = JSON.parse(localStorage.getItem(arr));
        if(getArr){
            return getArr;
        }
        return getArr = [];
    }

    static addToArr(form,arrName){
        let taskArr = [];
        taskArr.push(...this.checkLocalStorage(arrName));

        let name = document.getElementById('name').value;
        let date = document.getElementById('date').value;

        if(!name || !date){
            alert('please fill the form');
            return;
        }
        if(taskArr.length > 0 && taskArr.findIndex(e => e.name === name) !== -1){
            alert('name already exist')
            return
        }
        const createTask = (name,date) =>{
            return {name,date}
        }
        let newTask = createTask(name,date);
        taskArr.push(newTask);
        form.reset();
        task.closeForm(form);
        localStorage.setItem(arrName, JSON.stringify(taskArr));
        list.diplayTaskList(JSON.parse(localStorage.getItem(arrName)),arrName);
        return;
    }

    static addbtn(form,title){
        let addbtn = document.querySelector('.add-pop-up-btn');
        addbtn.onclick = (e)=>{

            e.preventDefault();
            task.addToArr(form,title);
        }
    }

    static closeForm(form){
        form.reset();
        form.classList.add('unActive');
    }

    static taskMain(){
        list.diplayTaskList(this.checkLocalStorage('Inbox'));

        let Cancel = document.querySelector('.close-pop-btn');
        let form = document.querySelector('.formdiv');

        Cancel.addEventListener('click',(e)=>{
            e.preventDefault();
            task.closeForm(form)
        });

        this.addbtn(form,'Inbox');

        let inboxbtn = document.querySelector('.inbox');
        inboxbtn.addEventListener('click',()=> {
            let localtask = JSON.parse(localStorage.getItem('Inbox'));
            task.clearChild();
            list.diplayTaskList(localtask,'Inbox');
            task.addbtn(form,'Inbox');
            list.delete('Inbox');
            task.filterToday('Inbox');
        });
        this.filterToday('Inbox');
    }

}
export default task;