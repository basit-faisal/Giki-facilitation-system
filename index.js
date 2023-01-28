async function getdatafrompython(){
    document.getElementById('myele').innerText = await eel.getdata()(); 
}

document.getElementById('mybtn').addEventListener('click',() => {
    getdatafrompython();
})