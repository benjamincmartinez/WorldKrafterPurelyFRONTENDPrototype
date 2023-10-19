var indexHTML = '<div id="welcome_container"></div>';

var createHTML = `
<div id="welcome_container"></div>
<form class="createForm">
        <table>
          <thead>
            <tr>
              <td>Name</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><span id="name" contenteditable="true"></span></td>
            </tr>
          </tbody>
          <thead>
            <tr>
              <td>Description</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><span id="description" contenteditable="true"></span></td>
            </tr>
          </tbody>
          <thead>
            <tr>
              <td>Elements</td>
            </tr>
          </thead>
          <tbody id="elementContainer">
            <thead>
              <tr>
                <td class="elementNameLabel">Name</td>
                <td class="elementDescriptionLabel">Description</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><span class = "element elementName" contenteditable="true"></span></td>
                <td><span class = "element elementDescription" contenteditable="true"></span></td>
              </tr>
            </tbody>
            <tr id="lastRow">
              <td class="formButtonContainer"><button class="formButton" type="button" onclick="saveWorld()">Create</button></td>
              <td class="formButtonContainer"><button class="formButton" type="button" onclick="addElement('elementContainer')">+</button></td>
            </tr>
          </tbody>
          
        </table>
      </form>`;

var viewHTML = `<div id="welcome_container"></div>
<form class="createForm">
    <table>
      <thead>
        <tr>
          <td>Name</td>
        </tr>
      </thead>
      <tbody>
          <tr>
            <td><span id="name"></span></td>
          </tr>
      </tbody>
      <thead>
          <tr>
              <td>Description</td>
          </tr>
      </thead>
      <tbody>
          <tr>
              <td><span id="description"></span></td>
          </tr>
      </tbody>
      <thead>
        <tr>
          <td>Elements</td>
        </tr>
      </thead>
      <tbody id="elementContainer">
          <tr id="lastRow">
            <td><input type="file" id="world-file-input" onchange="readWorldFile('world-file-input')"/></td>
          </tr>
      </tbody>
    </table>
  </form>`;

var elementRow = `<thead>
<tr>
  <td class="elementNameLabel">Name</td>
  <td class="elementDescriptionLabel">Description</td>
</tr>
</thead>
<tbody>
<tr>
  <td><span class = "element elementName" contenteditable="true"></span></td>
  <td><span class = "element elementDescription" contenteditable="true"></span></td>
</tr>
</tbody>`;

function indexSwitch(){
    document.getElementById('mainView').innerHTML = indexHTML;
    fashionableDiceRoll('welcome_container', 'Welcome to WorldKrafter', 5, 6);
}

function createSwitch(){
    document.getElementById('mainView').innerHTML = createHTML;
    fashionableDiceRoll('welcome_container', 'WorldKreate', 3, 6);
}

function readSwitch(){
    document.getElementById('mainView').innerHTML = viewHTML;
    fashionableDiceRoll('welcome_container','WorldKontents',3,6);
}

function addElement(parentid){
    let parentObject = document.getElementById(parentid);
    parentObject.insertAdjacentHTML("afterbegin", elementRow);
}
