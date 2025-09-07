document.addEventListener('DOMContentLoaded', () => {
    toggleMode();
});

function toggleMode(){
    const toggleButton = document.getElementById("theme-toggle");
    const htmlElement = document.documentElement;

    const currentThem = localStorage.getItem('theme');
    if(currentThem == 'dark'){
        htmlElement.classList.add('dark')
    }

    if(toggleButton){
        toggleButton.addEventListener('click', () =>{
            if(htmlElement.classList.contains('dark')){
                htmlElement.classList.remove('dark');
            }else{
                htmlElement.classList.add('dark');
                localStorage.setItem('theme', 'dark');
            }
        });
    }
}