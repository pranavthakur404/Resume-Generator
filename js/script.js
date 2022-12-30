// Working on add experince field
const add_more_exp = document.querySelector(".add-more-experience")
add_more_exp.addEventListener('click', () => {
    const exp_box = document.querySelector(".experience-box");
    const input = document.createElement('input')
    input.setAttribute("class", "exp");
    input.setAttribute("type", "text");

    // now appeding new input field
    exp_box.append(input);
})

// woking on add technical skills
const add_more_tech = document.querySelector(".add_more_skills");
add_more_tech.addEventListener("click", () => {
    const technical_box = document.querySelector(".technical-box");
    const input = document.createElement("input");
    input.setAttribute("class", "tech");
    input.setAttribute("type", "text");
    

    // now appeding new input field
    technical_box.append(input);

})

// getting personal details on clicking details button
const gen_btn = document.querySelector("#generate-button");
gen_btn.addEventListener('click', (e) => {
    e.preventDefault();
    //getting personal details
    const fullName = document.querySelector(".name").value;
    const fatherName = document.querySelector(".father_name").value;
    const address1 = document.querySelector(".add1").value;
    const address2 = document.querySelector(".add2").value;
    const mobile = document.querySelector(".mobile").value;
    const email = document.querySelector(".email").value;
    const DOB = document.querySelector(".dob").value;
    const gender = document.querySelector(".gender").value;
    const maritalStatus = document.querySelector(".marital").value;

    //getting professional details
    const education = document.querySelectorAll(".edu")
    const exp = document.querySelectorAll(".exp")
    const technical = document.querySelectorAll(".tech");
    
    // Creating resume page dynamically 

    //pending .....




    // going to resume page
    window.location = "template.html";
})

