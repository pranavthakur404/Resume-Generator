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
const get_res = document.querySelector(".get-res");
gen_btn.addEventListener('click', (e) => {
    //getting personal details
    var fullName = document.querySelector(".name").value;
    var fatherName = document.querySelector(".father_name").value;
    var address1 = document.querySelector(".add1").value;
    var address2 = document.querySelector(".add2").value;
    var mobile = document.querySelector(".mobile").value;
    var email = document.querySelector(".email").value;
    var DOB = document.querySelector(".dob").value;
    var gender = document.querySelector(".gender").value;
    var maritalStatus = document.querySelector(".marital").value;

    //getting professional details
    var education = document.querySelectorAll(".edu")
    var exp = document.querySelectorAll(".exp")
    var technical = document.querySelectorAll(".tech");
    
    // Creating resume page dynamically 

    gen_btn.style.display = 'none';
    get_res.style.display = 'block';
    

    //pending .....


    
})




