document.getElementById('completed').addEventListener('click' , getCompleted)
document.getElementById('pending').addEventListener('click',getPending)
const output = document.getElementById('output1')
function getCompleted(){
    output.innerHTML=""
    fetch("https://jsonplaceholder.typicode.com/todos")
    .then((res)=>{
      return res.json()  
    }).then((data)=>{
        data.forEach((item) => {
            if (item.completed==true){
                const li = document.createElement('li')
                li.textContent = item.title
                output.appendChild(li)
            }
            
            
        });
    })

}
function getPending(){
    output.innerHTML=""
    fetch("https://jsonplaceholder.typicode.com/todos")
    .then((res)=>{
      return res.json()  
    }).then((data)=>{
        data.forEach((item) => {
            if (item.completed==false){
                const li = document.createElement('li')
                li.textContent = item.title
                output.appendChild(li)
            }
            
            
        });
    })
    
}