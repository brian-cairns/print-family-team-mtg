let id = ''
const params = new URLSearchParams(window.location.search)
for (const [key, value] of params) { id = value; }

createSearchQuery('familyTrainingMeeting',id)

const title = document.getElementById('pageTitle')
const form1 = document.getElementById('formResponse1')
const form2 = document.getElementById('formResponse2')
const sign = document.getElementById('signature')
const printForm = document.getElementById('printToPDF')

function createSearchQuery(form, id) {
     console.log(id, form)
    //fetch data
    const url = `https://pffm.azurewebsites.net/getForms/?form=${form}&key=${id}`
    const header = {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/x-www-form-urlencoded"
    }

    fetch(url, {
        method: "GET",
        headers: header
    })
        .then(response => response.json())
        .then(data => populatePage(data))
        .catch(console.error)
        
}

function populatePage(dataArray) {
	let data = dataArray[0]
  console.log(data)
  document.getElementById('membersPresent').innerHTML = data.membersPresent;
    document.getElementById('clientName').innerHTML = data.clientName;
    document.getElementById('date').innerHTML = `${data.month}/${data.day}/${data.year}`;
    document.getElementById('time').innerHTML = `${data.start} ${data.AMPM} - ${data.end} ${data.AMPM2}` ;

//convert to arrays 
    let goal = [data.goal1, data.goal2, data.goal3]
    let parentalStrategies = [data.parentalStrategies1, data.parentalStrategies2, data.parentalStrategies3]
    let nextSteps  = [data.nextStep1, data.nextStep2, data.nextStep3]
    
//populate using arrays
    for (let i = 1; i < 4; i++) {
<<<<<<< HEAD
        document.getElementById(`goal${i}`).innerHTML = goal[i-1];
        document.getElementById(`parentalStrategies${i}`).innerHTML = parentalStrategies[i-1];
        document.getElementById(`nextStep${i}`).innerHTML = nextSteps[i-1];
=======
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
>>>>>>> 7d69905a95c0dd8b6b859e87f601d6be67821632
    }
}

printForm.addEventListener('click', (e) => {window.print()})
let upload = document.getElementById('upload')
upload.addEventListener('click', (e) => {document.getElementById('uploadEmbed').style.display = 'inline';})


<<<<<<< HEAD
async function uploadFile() {
  let formData = new FormData(); 
  formData.append("fileupload", fileupload.files[0]);
    await fetch('http://localhost/upload', {
    method: "POST", 
    body: formData
    })
        .then(response => response.json())    
        .then(data => handleResponse(data))
        .catch(console.error); 
}


async function handleResponse(data) { 
    //send notices to 3
}
=======
//send notices to 3
>>>>>>> 7d69905a95c0dd8b6b859e87f601d6be67821632
