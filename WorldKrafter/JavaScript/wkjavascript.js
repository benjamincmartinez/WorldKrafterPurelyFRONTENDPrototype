document.documentElement.style.setProperty(`--device_hypotenuse`, Math.sqrt(Math.pow(window.innerWidth,2)+ Math.pow(window.innerHeight,2)));
document.documentElement.style.setProperty(`--device_width`, window.innerWidth);
document.documentElement.style.setProperty(`--device_height`, window.innerHeight);


async function saveWorld(){
    var checkForTD = document.getElementById("saveTD");
    if(document.body.contains(checkForTD)){
        checkForTD.remove();
    }

    var Name = document.getElementById('name').textContent;
    var Description = document.getElementById('description').textContent;
    var ElementNames = document.getElementsByClassName('elementName');
    var ElementDescriptions = document.getElementsByClassName('elementDescription');
    const elementPack = [];

    for(let i = 0; i < ElementNames.length; i++){
        let elementNow = {
            "name":ElementNames[i].textContent,
            "description":ElementDescriptions[i].textContent
        }
        console.log(typeof(elementNow) + typeof(elementPack));
        elementPack.push(elementNow);
    }

    var worldcontents = {
        "name":Name,
        "description":Description,
        "elements":elementPack
    };
    
    const worldJson = JSON.stringify(worldcontents);
    
    const actualJson = JSON.parse(worldJson);
    
    loadedWorld = actualJson;

    var blob = new Blob([worldJson], {type:"application/json"});
    console.log(blob.description);
    var url  = URL.createObjectURL(blob);

    var downloadButton = document.createElement("a");
    downloadButton.href = url;
    // var filePath = document.getElementById('wkjs').src;
    // filePath = filePath.substr(0, filePath.length - 26) + "Kreations/Worlds/" + Name + ".json";
    // console.log(filePath);
    downloadButton.download = Name + ".json";
    downloadButton.textContent = "Save";
    downloadButton.className += "formButton unstyled-anchor";

    var newtd = document.createElement('td');
    newtd.id = "saveTD";
    newtd.className += "formButtonContainer";

    document.getElementById('lastRow').appendChild(newtd);
    newtd.appendChild(downloadButton);
}

function generateReadHTMLforElements(name, description){
    let parentObject = document.getElementById("elementContainer");
    parentObject.insertAdjacentHTML("afterbegin", `
    <thead>
        <tr>
         <td class="elementNameLabel">Name</td>
         <td class="elementDescriptionLabel">Description</td>
     </tr>
     </thead>
    <tbody>
        <tr>
         <td><span class = "element elementName" contenteditable="true">`+name+`</span></td>
         <td><span class = "element elementDescription" contenteditable="true">`+description+`</span></td>
        </tr>
    </tbody>
    `);
    
}

async function readWorldFile(me) {
    var e = document.getElementById(me);
    var file = e.files[0];
    if (!file) {
      return;
    }
    //const reader = new FileReader();
    var success = function ( content ) {
        console.log(content);
        const jsonobject = JSON.parse(content);
        
        console.log(jsonobject);
        if(typeof(jsonobject) === "object"){console.log("it's an object");}
        
        console.log(jsonobject.name + ", " + jsonobject.description)

        document.getElementById('name').textContent = jsonobject.name;
        document.getElementById('description').textContent = jsonobject.description;
        for(let i = 0; i < jsonobject.elements.length; i++){
             generateReadHTMLforElements(jsonobject.elements[i].name, jsonobject.elements[i].description);
        }
    }

    var fileReader = new FileReader( );
    fileReader.onload = function ( evt ) { success( evt.target.result ) };
    fileReader.readAsText( file );
    // console.log();
    // console.log(file);
    // var fileContent = JSON.stringify(file);
    // console.log(fileContent);
    // const fileAsJSon = JSON.parse(fileContent);
    // console.log(file.name + file.description);
    // console.log(fileAsJSon["name"] + "" + fileAsJSon["description"]);
    // console.log(fileAsJSon);
}
