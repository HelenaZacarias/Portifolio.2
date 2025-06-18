function toggleMode(){
    const html = document.documentElement;
    const body = document.body;
    html.classList.toggle("light");
    body.classList.toggle("dark");
}