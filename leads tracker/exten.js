
let myleads = []
const link = document.getElementById('ans')
const saveinput = document.getElementById('savei')
const lists = document.getElementById('ulel')
const myleadsfls = JSON.parse(localStorage.getItem('myleads'))
const deletebtn = document.getElementById('delet')
const savetab = document.getElementById('savet')
if (myleadsfls) {
    myleads =myleadsfls
    render(myleads)
}


saveinput.addEventListener("click", function(){
   myleads.push(link.value)
   link.value=" "
   localStorage.setItem("myleads",JSON.stringify(myleads))
   render(myleads)
})

deletebtn.addEventListener("click", function() {
    localStorage.clear()
    myleads = []
    render(myleads) 
})

savetab.addEventListener("click", function () {
    chrome.tabs.query({active:true, currentWindow:true}, function (tabs) {
       myleads.push(tabs[0].url)
       localStorage.setItem("myleads", JSON.stringify(myleads))
       render(myleads)         
    })
})

function render(leads) {

    let listitems = ""
    for (i = 0; i < myleads.length; i++) {
        listitems += `<li> 
            <a target='_blank' href='${myleads[i]}'>${myleads[i]}</a>
        </li>`
    }
     lists.innerHTML = listitems
    
}

