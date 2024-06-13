
function storeData(event) {
    event.preventDefault();

    var fullname = document.getElementById("name").value;
    var age = document.getElementById("age").value;
    var gender = document.querySelector('input[name="gender"]:checked').value;
    var description = document.getElementById("description").value;
    var major = document.getElementById("major").value;
    var languages = document.querySelectorAll('input[name="languages[]"]:checked');
    var selectedLanguages = [];
    languages.forEach(function(language) {
        selectedLanguages.push(language.value);
    });

    localStorage.setItem('full_name', fullname);
    localStorage.setItem('age', age);
    localStorage.setItem('gender', gender);
    localStorage.setItem('description', description);
    localStorage.setItem('major', major);
    localStorage.setItem('languages', JSON.stringify(selectedLanguages));

    
    displayData();
}
document.addEventListener('DOMContentLoaded', function() {
    displayData();
});

function displayData() {
    var fullname = localStorage.getItem('full_name');
    var age = localStorage.getItem('age');
    var gender = localStorage.getItem('gender');
    var description = localStorage.getItem('description');
    var major = localStorage.getItem('major');
    var languages = JSON.parse(localStorage.getItem('languages'));

    var cardContainer = document.getElementById('cardContainer');
    cardContainer.innerHTML = `
        <div class="card">
            <h3>Personal Information</h3>
            <p><strong>Name:</strong> ${fullname}</p>
            <p><strong>Age:</strong> ${age}</p>
            <p><strong>Gender:</strong> ${gender}</p>
            <p><strong>Description:</strong> ${description}</p>
            <p><strong>Major and University:</strong> ${major}</p>
            <p><strong>Programming Languages:</strong> ${languages.join(', ')}</p>
        </div>
    `;
}
