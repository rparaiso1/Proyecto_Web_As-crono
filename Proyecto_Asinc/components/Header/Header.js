import "./Header.css";

export const template = () => `
<h1>Pinterest</h1>
<div>
<input type="text" id="searchInput" placeholder="Ex: Dogs"/>
<label for="opciones"></label>
<select id="numPhotos" name="opciones">
    <option value="10">10</option>
    <option value="15">15</option>
    <option value="20">20</option>
</select>
<button id="searchButton">Search</button>

<button id="Profile" onclick="toggleOptions()">R</button>

<div id="selectOptions">
    <p>Tus cuentas: </p>
    <div class="select-option" ('Agregar cuenta')">Agregar cuenta</div>
    <div class="select-option" ('Convertir cuenta para empresa')">Convertir cuenta para empresa</div>
</div>
</div>
  
`;

const toggleOptions = () => {
  const options = document.getElementById("selectOptions");
  options.style.display = options.style.display === "block" ? "none" : "block";
};

const selectOption = (option) => {
  document.getElementById("selectOptions").style.display = "none";
};

const setupSelectOptionListeners = () => {
  const optionElements = document.querySelectorAll(".select-option");
  optionElements.forEach((element) => {
    element.addEventListener("click", () => {
      const optionText = element.getAttribute("data-option");
      selectOption(optionText);
    });
  });
};

window.onclick = (event) => {
  if (
    !event.target.matches("#Profile") &&
    !event.target.matches("#selectOptions") &&
    !event.target.matches(".select-option")
  ) {
    document.getElementById("selectOptions").style.display = "none";
  }
};

export const Header = () => {
  document.querySelector("header").innerHTML = template();

  document.getElementById("Profile").addEventListener("click", toggleOptions);

  setupSelectOptionListeners();
};

export default Header;
