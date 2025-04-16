// Fonction pour envoyer le code par email
function sendCode() {
    const email = document.getElementById('email').value;
    const verificationCode = Math.floor(100000 + Math.random() * 900000);  // Génère un code à 6 chiffres

    // Simulation de l'envoi d'email (Remplacer par Nodemailer ou API backend pour envoyer un email réel)
    console.log(`Code de vérification envoyé à ${email}: ${verificationCode}`);

    // Afficher le formulaire de vérification
    document.getElementById('verificationForm').style.display = 'block';
    document.getElementById('message').textContent = 'Code envoyé à votre email. Vérifiez votre boîte de réception !';
}

// Fonction pour vérifier le code
function verifyCode() {
    const code = document.getElementById('verificationCode').value;

    // Comparer le code entré avec celui généré (en simplification ici, code statique)
    if (code === "123456") {
        document.getElementById('message').textContent = 'Vérification réussie !';
    } else {
        document.getElementById('message').textContent = 'Code incorrect, essayez à nouveau.';
    }
}
