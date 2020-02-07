const list = document.getElementById("list"); //se mihin koko roska tulostetaan
const allTopics = [];
//alla lomakkeen syötteet


//ja laitetaan taulukkoon
document.getElementById("save").onclick = function() {
    const topic = document.getElementById("topi").value;
    const description = document.getElementById("desc").value;
    const link = document.getElementById("link").value;
    const done = document.getElementById("stat").value;
    allTopics.push(topic);
}

document.getElementById("show").onclick = function() {
    list.innerHTML = "";
    for(let i=0; i<allTopics.length; i++) {
        list.innerHTML += "<li>" + allTopics[i];
    }

}


/* testausta varten
list.innerHTML = topic;
list.innerHTML += ", " + description;
list.innerHTML += ", " + link;
list.innerHTML += ", " +  done;*/





