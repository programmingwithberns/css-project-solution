/**
 * Small script to update the copyright information 
 */
const setupCopyRight = () => {

    const buildDate = 2023; // when the project was constructed

    const today = new Date().getFullYear(); // current year

    const copyrightTextArea = document.getElementById("copyrightText");
    
    if(copyrightTextArea !== null){
        if (today > buildDate) {
            copyrightTextArea.innerHTML =`${buildDate} - ${today} Ebangha Cake & Pastries. All rights reserved.`;
        } else {
            copyrightTextArea.innerHTML =`${buildDate} Ebangha Cake & Pastries. All rights reserved.`;
        }
    }else{
        console.error("Copyright text area is null");
    }
   
}

window.addEventListener('load', setupCopyRight, false);
