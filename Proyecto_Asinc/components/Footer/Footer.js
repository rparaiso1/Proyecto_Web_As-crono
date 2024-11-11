import "./Footer.css";

export const template = () => `
<p>Copyright 2024 - Pinterest</p>
`;

export const Footer = () =>
  (document.querySelector("footer").innerHTML = template());

export default Footer;
