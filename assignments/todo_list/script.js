let btn = document.querySelector('button')
let idx = 0;

btn.addEventListener("click", function (e)
{
    let todolist = document.querySelector('div.todos');
    let input = document.querySelector('input');
    let p = document.createElement("p");
    p.innerHTML = input.value;
    p.setAttribute("key", idx);
    todolist.appendChild(p)
    input.value = ""
    idx += 1;
    
    
    document.querySelector(`p[key="${idx-1}"]`).addEventListener("click", function(e)
    {
        let todolist = document.querySelector('div.todos');
        todolist.removeChild(this);
    })

});