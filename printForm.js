const params = new URLSearchParams(window.location.search)
for (const [key, value] of params) { let id = value; }

//Show animation 
for (let i = 1; i < 5; i++) {
    document.getElementById(`mainSection${1}`).style.display = "none";
}

//fetch data
const url = 'https://pffm.azurewebsites.net/getForms'
const query = {
    form: 'familyTrainingMeeting',
    itemId: id 
}
const header = {
    'Content-Type': 'application/json',
    "Access-Control-Allow-Origin": "*"
}

fetch(url, {
    method: "GET",
    headers: header,
    body: JSON.stringify(query)
})
    .then(response => response.json())
    .then(data => populatePage(data))
    .catch(console.error)

async function populatePage(data) {
    document.getElementById('membersPresent').innerHTML = data.membersPresent;
    document.getElementById('clientName').innerHTML = data.clientName;
    document.getElementById('date').innerHTML = `${data.month}/${data.day}/${data.year}`;
    document.getElementById('time').innerHTML = `${data.start} ${data.AMPM} - ${data.end} ${AMPM2}` ;

//convert to arrays 
    let goal = [data.goal1, data.goal2, data.goal3]
    let parentalStrategies = [data.parentalStrategies1, data.parentalStrategies2, data.parentalStrategies3]
    let nextSteps  = [data.nextStep1, data.nextStep2, data.nextStep3]
    
//populate using arrays
    for (let i = 1; i < 4; i++) {
        document.getElementById(`goal${i}`).innerHTML = data.goal[i];
        document.getElementById(`parentalStrategies${i}`).innerHTML = data.parentalStrategies[i];
        document.getElementById(`nextSteps${i}`).innerHTML = data.nextSteps[i];
    }

    document.getElementById('staffName').innerHTML = data.staffName;
    showPage()
}

function showPage() {
    document.getElementById('loadingAnimationSection').style.display = "none";
    for (let i = 1; i < 5; i++) {
       document.getElementById(`mainSection${1}`).style.display = "block";
    }
}

let printToPDF = document.getElementById('printToPDF')
printToPDF.addEventListener('click', (e) = {})

let exit = document.getElementById('exit') 
exit.addEventListener('click', (e) => {
    history.back()
})

//send notices to 3
