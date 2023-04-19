let myLeads = []
// `["https://olimjonorifjonov.com/", "www.google.com"]`
// myLeads = JSON.stringify(myLeads)
// myLeads = JSON.parse(myLeads)
// myLeads.push("www.youtube.com")
// for (i = 0; i < 3; i++) {
//     console.log(myLeads[i])
// }
// myLeads = JSON.stringify(myLeads)
// console.log(typeof myLeads)



const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el")

// localStorage.setItem("myLeads", "https://olimjonorifjonov.com/");
// console.log(localStorage.getItem("myLeads"))


inputBtn.addEventListener("click", function () {
    myLeads.push(inputEl.value)
    inputEl.value = ""
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    renderLeads()

    console.log(localStorage.getItem("myLeads"))
})
let leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))
console.log(leadsFromLocalStorage) 

function renderLeads() {
    let listItems = ""
    for (i = 0; i < myLeads.length; i++) {
        // listItems += "<li><a href='#'>"+myLeads[i]+"</a></li>"
        listItems += `
            <li>
                <a href='${myLeads[i]}'>
                    ${myLeads[i]}
                </a>
            </li>
        `

    }
    ulEl.innerHTML = listItems
}