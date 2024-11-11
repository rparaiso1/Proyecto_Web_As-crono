import "./Main.css";
import "./SideBar.css";

export const template = () => `
<nav class="SideBar">
    <ul>
        <li><a href="#home"><img src="/home.png" alt="home"></a></li>
        <li><a href="#campana"><img src="/campana.png" alt="campana"></a></ li>
        <li><a href="#brujula"><img src="/brujula.jpg" alt="brujula"></a></li>
        <li><a href="#descarga"><img src="/descarga.png" alt="descarga"></a></li>
        <li><a href="#Message"><img src="/Message.jpg" alt="Message"></a></li>
        <li><a href="#tools"><img src="/tools.jpg" alt="home"></a></li>
    </ul>
</nav>
<div>
    <h2 id="message"></h2>
    <ul id="results"</ul>
<div>
`;

const Main = () => {
  document.querySelector("main").innerHTML = template();
};

export default Main;
