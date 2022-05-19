setInterval(() => {
    if (
        document.getElementById('first').value == "" ||
        document.getElementById('second').value == "" ||
        document.getElementById('last').value == ""
    );
});


document.getElementById('submit').onclick = function() {
    window.location.href = "../../index.html";

    var email = document.getElementById('first').value;

    alert("Welcome!");
};

