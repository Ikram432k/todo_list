function craeteSideBar(){
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


    const addproject = document.createElement('div');
    addproject.innerHTML='Add Project';
    addproject.classList.add('addproject','sidebtn');
    sidebar.appendChild(addproject);

    


    return sidebar;
}

export default craeteSideBar;