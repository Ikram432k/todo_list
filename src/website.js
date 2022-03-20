import createHeader from './header';
import craeteSideBar from './sidebar';
import createPanel from './panel';


function initilizewebpage(){
    const getdiv = document.getElementById('content');
    getdiv.appendChild(createHeader());
    getdiv.appendChild(craeteSideBar());
    getdiv.appendChild(createPanel());

}
 export default initilizewebpage;