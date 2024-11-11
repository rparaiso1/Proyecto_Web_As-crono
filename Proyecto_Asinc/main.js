import "./style.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";

const CLIENT_ID = import.meta.env.VITE_CLIENT_ID;

const Web = () => {
  Header();
  Main();
  Footer();
  getPhotos("malinois", "10");
};

const getPhotos = async (keyword, per_page) => {
  const data = await fetch(
    `https://api.unsplash.com/search/photos?page=1&query=${keyword}&per_page=${per_page}&client_id=${CLIENT_ID}`
  );
  const results = await data.json();
  const photos = results.results;
  printPhotos(photos);
};

const printPhotos = (photos) => {
  const container = document.querySelector("#results");
  const message = document.querySelector("#message");

  if (photos.length === 0) {
    container.innerHTML = "";
    message.textContent = "Search another thing...";
  } else {
    container.innerHTML = "";
    message.textContent = "Resultados encontrados: " + photos.length;

    for (const photo of photos) {
      const li = document.createElement("li");
      li.innerHTML = `
        <img src="${photo.urls.regular}" alt="${photo.alt_description}" style="border: 4px solid ${photo.color}"/>
            `;
      container.appendChild(li);
    }
  }
};
Web();

const search = () => {
  const value = document.querySelector("#searchInput").value;
  const per_pageValue = document.querySelector("#numPhotos").value;

  if (value.trim() === "") {
    alert("Por favor, rellene el input :).");
  } else {
    getPhotos(value, per_pageValue);
    document.querySelector("#searchInput").value = "";
  }
};

document.querySelector("#searchButton").addEventListener("click", search);

document.querySelector("#searchInput").addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    search();
  }
});
