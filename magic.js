const startBtn = document.getElementById("btn");
const input = document.getElementById("input");
const output = document.getElementById("output");
const awnser = document.getElementById("awnser");

startBtn.addEventListener("click",() => {
    if(problem()) {
        luckGenerating();
    }
});

function problem() {
    if(input.value === "") {
        alert("plz input what you wanna ask");
        return false;
    }
    if(!input.value.endsWith("?")) {
        alert("Disclaimer : ask a question and use ? at last");
        return false;
    }
    return true;
};

async function luckGenerating() {
    try {
        const URL = `https://corsproxy.io/?https://eightballapi.com/api?locale=en`;

        const response = await fetch(URL);

        console.log("status : ",response.status);
    
        const data = await response.json();

        console.log(data.content);
    
        output.textContent = data.content;
        awnser.innerText = data.content;
    }
    catch(error) {
        alert("api is not supporting");
    }
};