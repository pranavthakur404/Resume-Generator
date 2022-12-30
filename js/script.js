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

    

    const section = document.createElement("section");
    section.innerHTML = `
    <h3 class="name">${fullName}</h3>
    
    <!-- address -->
    <div class="address">
     <p class="line1">${address1}</p>
     <p class="line2">${address2}</p>
    </div>

    <!-- mobile and email -->
    <div class="contact">
     <p class="mobile">Mo: ${mobile}</p>
     <p class="email">Gmail ID:-${email}</p>
    </div>

    <!-- objective -->
    <div class="objective">
     <h3>Objective</h3>
      <p>To be associated with an organization which gives a me a career path and job satisfaction using my skills to <br>
         secure a challenging position in a reputable organization to expand my learning knowledge and skills.
      </p>
    </div>
 
    <!-- education -->
    <ul class="education">
     <h3>Education</h3>
        <p>${education[0]}</p>
        <p>${education[1]}</p>
        <p>${education[2]}</p>
    </ul>

    <!-- technical knowledge -->
    <ul class="technical-skills">
     <h3>Technical Knowledge</h3>
      
    </ul>

    <!-- Personal Details -->
    <div class="personal-details">
     <h3>Personal Details</h3>
      <p>Father's Name :- ${fatherName}</p>
      <p>DoB :-<span>${DOB}</span></p>
      <p>Marital Status :-<span>${maritalStatus}</span></p>
      <p>Gender :-<span>${gender}</span></p>
      <p>Nationality :-<span>Indian</span></p>
    </div>

    <!-- Declaration -->
    <div class="declaration">
     <h3>Declaration</h3>
     <p>I hereby declare that all the information furnished above istrue to the best of my knowledge and belief</p>
    </div>

    <!-- signature -->
    <h4 class="signature">(${fullName})</h4>`

    //  selecting main element
    const mainSection = document.querySelector(".main")
    const formSection = document.querySelector("form");
    mainSection.append(section)
    
    formSection.style.display ='none';
 

})







