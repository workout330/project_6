function displayBox(i) { 
    i = Number(i); 
    curr = document.getElementById("text-content");

    if (i == 0) { 
        curr.innerHTML = `<div id="title"> Monday </div> 60 minutes.`;
    } else if (i==1) {
        curr.innerHTML = `<div id="title"> Under Development <div>`
    }else {
        curr.innerHTML = `<div id="title"> Add Friend: Joe <div>`
        var button = document.getElementById('button')
        button.innerHTML = `<a href='friend.html'> Done </a>`
    }

    var show = document.getElementById("text-box") 
    show.style.display = "inline-block" 
}

function hideBox() { 
    var show = document.getElementById("text-box") 
    show.style.display = "none" 
}
