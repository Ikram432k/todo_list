import list from "./list";
import task from "./Task";
import UI from "./UI";

class project{
    static projectForm(){
        let proform = document.createElement('form');
        proform.classList.add('project-form');
        proform.classList.add('unActive');
        proform.innerHTML =
        "<input type='text' id='proNames' class='proNames' placeholder='projectName'></input>"+
        "<div><button id='proAdd' class='proButton proAdd'>Add</button><button id='proCancel cancelbtn' class='proCancel'>Cancel</button></div>"
        ;
        return proform;
    }
    static createPro(name){
        let div = document.createElement('div');
        div.classList.add('sidebtn');
        div.classList.add('proList');
        div.setAttribute('data-title',name);

        let projectBtn = document.createElement('div');
        projectBtn.innerHTML = '<i class="material-icons">playlist_add_check</i>'+''+name;
        div.appendChild(projectBtn);

        let proRemoveBtn = document.createElement('button');
        proRemoveBtn.classList.add('proRemove');
        proRemoveBtn.setAttribute('data-title',name);
        proRemoveBtn.innerHTML = '<i class="material-icons">highlight_off</i>';
        div.appendChild(proRemoveBtn);

        return div;
    }
    static removeProject(r){
        let localdata = JSON.parse(localStorage.getItem('proNames'));
        let pNameContainer = document.querySelector('.proDiv');
        let pro = document.querySelectorAll('.proList');
        pro.forEach((p)=>{
            if(r.dataset.title === p.dataset.title){
            let localIndex = localdata.indexOf(p.dataset.title)
            pNameContainer.removeChild(p);

            localdata.splice(localIndex,1);
            localStorage.setItem('proNames',JSON.stringify(localdata));
            localStorage.removeItem(r.dataset.title);
            task.clearChild();
            task.taskMain();

        }
        })
    }
    static displayProject(arr){
        let proContainer = document.querySelector('.proDiv')
        for(let i = proContainer.childElementCount;i<=arr.length-1;i++){
            proContainer.appendChild(this.createPro(arr[i]));
        }
        let removeProject = document.querySelectorAll('.proRemove');
        removeProject.forEach(r=>{
            r.onclick = (e) =>{
                project.removeProject(r);
                e.stopPropagation();
            }
        })
        this.getProjectTask();
    }
    static getProjectTask(){
        let button = document.querySelectorAll('.proList');
        let form = document.querySelector('.formdiv');

        button.forEach(btn => {
            btn.onclick = () =>{
                task.clearChild();
                list.updateTitle(btn.dataset.title);
                list.diplayTaskList(task.checkLocalStorage(btn.dataset.title),btn.dataset.title);
                task.addbtn(form,btn.dataset.title);
                list.delete(btn.dataset.title);
                task.filterToday(btn.dataset.title);
            }

        })
    }
    static getProjectName(form){
        let proNameArr = [];
        proNameArr.push(...task.checkLocalStorage('proNames'));
        let proNames = document.querySelector('.proNames').value;

        if(!proNames){
            alert('please name your project');
            return;
        }
        if(proNameArr.length > 0 && proNameArr.findIndex(e => e===proNames)!== -1){
            alert('name already exist')
            return;
        }
        proNameArr.push(proNames);
        console.log(proNameArr);

        localStorage.setItem('proNames',JSON.stringify(proNameArr));
        this.displayProject(proNameArr)
        form.reset();
        task.closeForm(form);
    }

    static renderProject(){
        let pName = JSON.parse(localStorage.getItem('proNames'));
        if(Array.isArray(pName) && pName.length){
            this.displayProject(pName);
        }
        let sideBar = document.querySelector('.sidebar');
        sideBar.appendChild(this.projectForm());

        let createProject = document.querySelector('.new-project');
        let form = document.querySelector('.project-form');
        let add = document.querySelector('.proAdd');
        let cancel = document.querySelector('.proCancel');

        
        createProject.addEventListener('click',()=>{
            UI.displayform(form);
        })

        add.addEventListener('click',(e)=>{
            e.preventDefault();
            project.getProjectName(form);
        })
        
        cancel.addEventListener('click',()=>{
            task.closeForm(form);
        })
    }
}
export default project;