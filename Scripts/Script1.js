let head = document.getElementsByTagName('HEAD')[0];

let link = document.createElement('link');

link.rel = 'stylesheet';

link.type = 'text/css';
function style1() {
    link.href = 'Styles/StyleSheet1.css';
    head.appendChild(link);
}
function style2() {
    link.href = 'Styles/StyleSheet2.css';
    head.appendChild(link);
}
function style3() {
    link.href = 'Styles/StyleSheet3.css';
    head.appendChild(link);
}
