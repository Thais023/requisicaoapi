const styles = document.createElement('link');
styles.setAttribute('rel','stylesheet');
styles.setAttribute('href','./assets/styles/style.css');
styles.setAttribute('type','text/css');

    // <link rel = "stylesheet" href = "./assets/style/styles.css">


const link1 = document.createElement('link');
link1.rel = "preconnect";
link1.href = "https://fonts.googleapis.com";

const link2 = document.createElement('link');
link2.rel = "preconnect";
link2.href = "https://fonts.gstatic.com";
link2.crossorigin ="";

const link3 = document.createElement('link');
link3.rel = "stylesheet";
link3.href = "https://fonts.googleapis.com/css2?family=Roboto&display=swap";


    
document.head.appendChild(styles);
document.head.append(link1,link2,link3)
