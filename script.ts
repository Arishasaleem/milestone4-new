// now we get references to the form and then display area
const form_resume = document.getElementById("resume-form") as HTMLElement
const resume_Display = document.getElementById("resume-display") as HTMLElement

// handle form submission
form_resume.addEventListener("submit" , (event: Event) =>{
    event.preventDefault();

    // collect input values
    const name = (document.getElementById("name") as HTMLInputElement).value
    const email = (document.getElementById("email") as HTMLInputElement).value
    const phone = (document.getElementById("phone") as HTMLInputElement).value
    const education = (document.getElementById("education") as HTMLInputElement).value
    const experience= (document.getElementById("experience") as HTMLInputElement).value
    const skills = (document.getElementById("skills") as HTMLInputElement).value
    
/// generate resume content dynamci
const resumeHtml = `<h2><br>Editable resume</b></h2>
<h3>Personal information</h3>
<p><b>Name:</b><span contenteditable="true">${name}</span></p>
<p><b>Name:</b><span contenteditable="true">${email}</span></p>
<p><b>Name:</b><span contenteditable="true">${phone}</span></p>

<h3>Education</h3>
<p contenteditable="true">${education}</p>

<h3>Experience</h3>
<p contenteditable="true">${experience}</p>

<h3>skills</h3>
<p contenteditable="true">${skills}</p>`

// display generated resume

if(resume_Display){
    resume_Display.innerHTML = resumeHtml
} else{
    console.error("the resume display element is missing.")
}

});
