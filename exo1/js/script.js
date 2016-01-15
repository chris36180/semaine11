$proposition = document.getElementById("proposition");
$bouton = document.getElementById("bouton");
$resultat = document.getElementById("resultat");
reponse = Math.ceil(Math.random() * 100)

function verifier() {
    if ($proposition.value < reponse) {
        $resultat.innerHTML = "Insuffisant !";
    }
    if ($proposition.value == reponse) {
        $resultat.innerHTML = "BINGO";
    }
    if ($proposition.value > reponse) {
        $resultat.innerHTML = "Trop !";
    }
}

$bouton.onclick = verifier;