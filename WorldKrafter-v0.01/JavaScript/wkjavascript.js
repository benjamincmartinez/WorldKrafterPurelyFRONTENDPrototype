document.documentElement.style.setProperty(`--device_hypotenuse`, Math.sqrt(Math.pow(window.innerWidth,2)+ Math.pow(window.innerHeight,2)));
document.documentElement.style.setProperty(`--device_width`, window.innerWidth);
document.documentElement.style.setProperty(`--device_height`, window.innerHeight);

async function saveWorld(){
    var Name = document.getElementById('name').textContent;
    var Description = document.getElementById('description').textContent;
    console.log(Name + Description);
    var worldcontents = {
        "name":Name,
        "description":Description,
        "elements":[

        ]
    };
    var worldJson = JSON.stringify(worldcontents);
    var blob = new Blob([worldJson], {type:"application/json"});
    var url  = URL.createObjectURL(blob);

    var downloadButton = document.createElement("a");
    downloadButton.href = url;
    downloadButton.download = Name + ".json";
    downloadButton.textContent = "Save";
    downloadButton.className += "formButton unstyled-anchor";

    var newtd = document.createElement('td');
    newtd.className += "formButtonContainer";

    document.getElementById('lastRow').appendChild(newtd);
    newtd.appendChild(downloadButton);
}

async function readWorldFile(me) {
    var e = document.getElementById(me);
    var file = e.files[0];
    if (!file) {
      return;
    }
    console.log(file);
    var fileContent = JSON.stringify(file);
    console.log(fileContent);
    var fileAsJSon = JSON.parse(fileContent);
    console.log(file.name + file.description);
    console.log(fileAsJSon["name"] + "" + fileAsJSon["description"]);
    console.log(fileAsJSon);
    document.getElementById('name').textContent = fileAsJSon.name;
    document.getElementById('description').textContent = fileAsJSon.description;
}
