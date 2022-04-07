import task from './Task';
import project from './project';
class UI {
    static createHeader(){
    const head = document.createElement('div');
    head.classList.add('header');

    const heading = document.createElement('h1');
    heading.innerHTML = "TODO LIST";

    head.appendChild(heading);

    return head;
}
static createSideBar(){
    const sidebar = document.createElement('div');
    sidebar.classList.add('sidebar');

    const inboxbtn = document.createElement('div');
    inboxbtn.innerHTML = 'Inbox';
    inboxbtn.classList.add('inbox' , 'sidebtn');
    sidebar.appendChild(inboxbtn);

    const todaybtn = document.createElement('div');
    todaybtn.innerHTML = 'Today';
    todaybtn.classList.add('today','sidebtn');
    sidebar.appendChild(todaybtn);

    const thisweekbtn = document.createElement('div');
    thisweekbtn.innerHTML = 'This week';
    thisweekbtn.classList.add('this_week','sidebtn');
    sidebar.appendChild(thisweekbtn);

    const projecthead = document.createElement('h3');
    projecthead.innerHTML = 'Project';
    sidebar.appendChild(projecthead);

    const projectDiv = document.createElement('div');
    projectDiv.classList.add('proDiv');
    sidebar.appendChild(projectDiv);

    const addproject = document.createElement('div');
    addproject.innerHTML='Add project';
    addproject.classList.add('new-project','sidebtn');
    sidebar.appendChild(addproject);

    return sidebar;
}/*
static createMainPanel(){
    const panel = document.createElement('div');
    panel.classList.add('panel');
    panel.setAttribute('id','panel');
    return panel;
}*/
static addtask(){
    let addbtn = document.createElement('div');
    addbtn.classList.add('addtask');
    addbtn.innerHTML = "Add new list";
    return addbtn;
}
static container(){
    let storage = document.createElement('div');
    storage.classList.add('container');

    let taskconatiner = document.createElement('div');
    taskconatiner.classList.add('taskcontainer');

    let list_Title = document.createElement('h1');
    list_Title.classList.add('title');
    taskconatiner.appendChild(list_Title);
    
    storage.appendChild(taskconatiner);

    storage.appendChild(this.addtask());

    return storage;
}
static taskForm(){
    let form = document.createElement('form');
    form.classList.add('formdiv');
    form.classList.add('unActive');
    form.action = './task.js';
    form.method = 'GET';
    form.innerHTML =
    "<input type='text' id='name' class='input-name' placeholder='Title'></input>"+
    "<input type='date' id='date' class='input-date'></input>"+
    "<div class='add-task-btn'><button class='add-pop-up-btn'>Add</button><button class='close-pop-btn'>Cancel</button></div>"
    ;
    return form;
}
static displayform(form){
    form.classList.remove('unActive');
}
static addFunctionality(){
    let addTaskBtn = document.querySelector('.addtask');
    let form = document.querySelector('.formdiv');
    addTaskBtn.addEventListener('click',()=>{
        UI.displayform(form);
    })
}
static loadpage(){
    let content = document.querySelector('#content');
    content.appendChild(this.createHeader());
    content.appendChild(this.createSideBar());
    content.appendChild(this.container());
    let storage = document.querySelector('.container');
    storage.appendChild(this.taskForm());
    this.addFunctionality();
    task.taskMain();
    project.renderProject();
}
}
export default UI;