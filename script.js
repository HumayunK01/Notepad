let title = document.querySelector('#note-title');
let detail = document.querySelector('#note-content');
let notes = document.querySelector('#notes');


let btn = document.querySelector('#addnote');
btn.addEventListener('click', () => {
    let head = document.createElement("h1");
    let para = document.createElement("p");
    let line = document.createElement("hr");
    head.innerText = title.value;
    para.innerText = detail.value;

    notes.append(head);
    notes.append(para);
    para.append(line);

    title.value = '';
    detail.value = '';
})
