var resumeForm = document.getElementById('resumeForm');
var resumeOutput = document.getElementById('resumeOutput');
function generateResume(data) {
    return "\n    <h2> Generate Resume </h2>\n    <p> <strong> Name:</strong> ".concat(data.name, " </p>\n    <p> <strong> DOB:</strong> ").concat(data.dob, " </p>\n    <p> <strong> Gender:</strong> ").concat(data.gender, " </p>\n    <p> <strong> Email:</strong> ").concat(data.email, " </p>\n    <p> <strong> Phone:</strong> ").concat(data.phone, " </p>\n    <p> <strong> Country:</strong> ").concat(data.country, " </p>\n    <p> <strong> Education:</strong> ").concat(data.education, " </p>\n    <p> <strong> Experience:</strong> ").concat(data.experience, " </p>\n    <p> <strong> Skills:</strong> ").concat(data.skills, " </p>\n    <button id=\"editResume\">Edit Resume </button>\n\n    ");
}
if (resumeForm && resumeOutput) {
    resumeForm.addEventListener('submit', function (event) {
        event.preventDefault();
        var name = document.getElementById('name').value;
        var dob = document.getElementById('dob').value;
        var gender = document.getElementById('gender').value;
        var email = document.getElementById('email').value;
        var phone = document.getElementById('phone').value;
        var country = document.getElementById('country').value;
        var education = document.getElementById('education').value;
        var experience = document.getElementById('experience').value;
        var skills = document.getElementById('skills').value;
        resumeOutput.innerHTML = generateResume({ name: name, dob: dob, gender: gender, email: email, phone: phone, country: country, education: education, experience: experience, skills: skills });
        var editButton = document.getElementById('editResume');
        if (editButton) {
            editButton.addEventListener('click', function () {
                document.getElementById('name').value = name;
                document.getElementById('dob').value = dob;
                document.getElementById('gender').value = gender;
                document.getElementById('email').value = email;
                document.getElementById('country').value = country;
                document.getElementById('phone').value = phone;
                document.getElementById('education').value = education;
                document.getElementById('experience').value = experience;
                document.getElementById('skills').value = skills;
                window.scrollTo({ top: 0, behavior: 'smooth' });
            });
        }
    });
}
else {
    console.log("Form or output div not found in the DOM");
}
