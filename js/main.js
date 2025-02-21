const users = {
    "token123": {
        password: "secure123",
        name: "Max Mustermann",
        phone: "+49 123 456789",
        email: "max@example.com",
        vcf: "../vcf/example123.vcf"
    }
};

function checkPassword() {
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get('token');
    const enteredPassword = document.getElementById('password').value;

    if (users[token] && users[token].password === enteredPassword) {
        document.getElementById('vcf-name').textContent = users[token].name;
        document.getElementById('vcf-phone').textContent = users[token].phone;
        document.getElementById('vcf-email').textContent = users[token].email;
        document.getElementById('vcf-download').href = users[token].vcf;
        document.getElementById('contactInfo').classList.remove('hidden');
    } else {
        alert("❌ Falsches Passwort!");
    }
}

