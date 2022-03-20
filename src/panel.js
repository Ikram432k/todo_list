let mylist = [];
class List{
constructor(title){
this.Title = title;
}
}
let i = 0;  
function createPanel(){
    const panel = document.createElement('div');
    panel.classList.add('panel');
    

    const panelContent = document.createElement('div');


    panel.appendChild(createTackList());
    panel.appendChild(panelContent);


    return panel;}

function createTackList(){
    const nav = document.createElement('div');

    const addbtn = document.createElement('div');
    addbtn.classList.add('addtask');
    addbtn.innerHTML = '+Add Task';
    addbtn.addEventListener("click",()=>{
        formdiv.classList.add('active');

    });

    const formdiv = document.createElement('div');
    formdiv.classList.add('formdiv');

    const inputdiv = document.createElement('input');
    inputdiv.classList.add('task-name');
    inputdiv.setAttribute("id","task-name");
    formdiv.appendChild(inputdiv);

    const btnsdiv = document.createElement('div');
    btnsdiv.classList.add('tasks-bts');

    const btn1 = document.createElement('button');
    btn1.classList.add('add-pop-up-btn');
    btn1.textContent = "Add";
    btn1.addEventListener('click',newtodolist);

    btnsdiv.appendChild(btn1);
    
    function newtodolist(event) {   
        event.preventDefault(); 
    let title1 = document.getElementById('task-name').value;
    let newlist = new List(title1);
    mylist.push(newlist);

    close_popup();
    inputdiv.value = "";
    console.log(mylist);
    update();
    }
    function update(){
  

        for(i;i<mylist.length;i++){
            let listtable = document.createElement('div');
            listtable.classList.add('listtable');
            listtable.setAttribute('data-index',i);
            //delete button
            let deletebtn = document.createElement('button');
            deletebtn.classList.add('delbtn');
            deletebtn.textContent = 'X';
            for( let j in mylist[i]){
                let p = document.createElement('p');
                p.textContent = `${mylist[i][j]}`;
                listtable.appendChild(p);
            }
            nav.appendChild(listtable);
        }
    }

    function close_popup(){
    formdiv.classList.remove('active');

    }

    const btn2 = document.createElement('button');
    btn2.classList.add('clode-btn');
    btn2.textContent = "Cancel";
    btn2.addEventListener('click',close_popup);

    btnsdiv.appendChild(btn2);

    formdiv.appendChild(btnsdiv);

    nav.appendChild(addbtn);
    nav.appendChild(formdiv);
    //nav.appendChild(form);

    return nav;
}


export default createPanel;

    /*
    const form = document.createElement('form');
    form.name = 'addTaskForm';
    form.method = 'GET'
    form.action = '';
    form.classList.add('overlay');

    const inputname = document.createElement('input')
    inputname.setAttribute("type","input");
    inputname.classList.add('textfeild');
    inputname.setAttribute("id","title");
    form.appendChild(inputname); 
    */