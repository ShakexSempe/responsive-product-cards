

//target portfolio section to be populated ith items:
const portfolio = document.querySelector('.portfolio');
//display items via () when DOM content has loaded 
window.addEventListener('DOMContentLoaded', () => {
    displayWorkItems(work);
})
//function to display work items in portfolio section 
//map() to display each work item wrapped in the item class via template literal
//join("");
// portfolio innerHTML
displayWorkItems = (workItems) => {
    let displayWork = workItems.map(item => {
        return `<div class="item">
                    <img src=${item.img} alt="cake">
                    <div class="action">
                        <h3>${item.title}</h3>
                        <p >${item.desc}</p>
                        <button class="overlaybtn" href="#">R${item.price}</button>
                    </div>
                </div>`
    });
    displayWork = displayWork.join("");
    portfolio.innerHTML = displayWork;

    // const overlaybtn = document.querySelectorAll('.overlaybtn');  
    
    // overlaybtn.forEach(btn => {
    //     btn.addEventListener("click", ()=> {
    //         workItems.map(item => {
    //             return `<div class="modal-overlay">
    //             <div class="modal-container">
    //               <img class="modal-content" src=${item.img}/>
    //               <button class="close-btn">
    //                 <i class="fas fa-times"></i>
    //               </button>
    //             </div>
    //           </div>`
    //         });
    //     })
    // })

}

