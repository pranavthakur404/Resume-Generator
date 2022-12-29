// Working on add experince field
const add_more_exp = document.querySelector(".add-more-experience")
add_more_exp.addEventListener('click',()=>{
    const exp_box = document.querySelector(".experience-box");
    const input = document.createElement('input')
    input.setAttribute("class","exp");
    input.setAttribute("type","text");

    // now appeding new input field
    exp_box.append(input);
})

// woking on add technical skills
const add_more_tech = document.querySelector(".add_more_skills");
add_more_tech.addEventListener("click",()=>{
    const technical_box = document.querySelector(".technical-box");
    const input = document.createElement("input");
    input.setAttribute("class","tech");
    input.setAttribute("type","text");

    // now appeding new input field
    technical_box.append(input);

})

