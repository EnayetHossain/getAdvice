const url = "https://api.adviceslip.com/advice";

const loadData = async (url)=>{
    const res = await fetch(url);
    const data = await res.json();
    displayData(data);
}

const displayData = (data)=>{
    const advice = document.getElementById("advice");
    advice.innerText = data.slip.advice;

    const adviceId = document.getElementById("advice-id");
    adviceId.innerText = data.slip.id;
}

const btn = document.querySelector(".btn");
btn.addEventListener("click", ()=>{
    loadData(url)
})

loadData(url);