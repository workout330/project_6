function displayBox(i) { 
    i = Number(i); 
    curr = document.getElementById("text-content");

    if (i == 0) { 
        curr.innerHTML = `<div id="title"> Monday </div> 60 minutes.`;
    } else { 
        curr.innerHTML = `<div id="title"> Under Development <div>`;
    }

    var show = document.getElementById("text-box") 
    show.style.display = "inline-block" 
}

function hideBox() { 
    var show = document.getElementById("text-box") 
    show.style.display = "none" 
}
