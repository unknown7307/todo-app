let iteam = document.querySelector('#input_iteam');
let todoIteam = document.querySelector('.items_list');

iteam.addEventListener(
    'keyup',
    function(event){
        if(event.key == 'Enter'){
        userIteam(this.value)
        this.value = "";
        }

    }
);

let userIteam = (iteams)=>{
    const additeam = document.createElement('li');
    additeam.innerHTML =`
    ${iteams}
    <i class="fa fa-times"></i>
    `;
    additeam.addEventListener('click',function(){
        additeam.classList.toggle('done')
    });
    additeam.querySelector('i').addEventListener('click',()=>{
        additeam.remove();
    })
    todoIteam.appendChild(additeam)


}