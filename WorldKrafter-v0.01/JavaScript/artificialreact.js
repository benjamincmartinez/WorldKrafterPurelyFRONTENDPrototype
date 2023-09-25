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
      <tr id="lastRow">
        <td class="formButtonContainer"><button class="formButton" type="button" onclick="saveWorld()">Create</button></td>
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
        <tr id="lastRow">
          <td class="formButtonContainer"><input class="formButton" type="file" id="world-file-input" onchange="readWorldFile('world-file-input')"/></td>
        </tr>
    </tbody>
  </table>
</form>`



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

