function createHeader(){
    const head = document.createElement('div');
    head.classList.add('header');

    const heading = document.createElement('h1');
    heading.innerHTML = "TODO LIST";

    head.appendChild(heading);

    return head;
}

export default createHeader;

