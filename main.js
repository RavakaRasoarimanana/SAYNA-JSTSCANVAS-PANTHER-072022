//Page 1 et autorisation pour page2

function nextPage1() {
    let answer1 = document.getElementById("answer1").value;
    if (answer1=="SI JE SUIS FIDELE C’EST A CE TRONE PEU IMPORTE QUI MONTE DESSUS"
    |answer1=="si je suis fidèle c'est à ce trône peu importe qui monte dessus"
    |answer1=="si je suis fidele c'est a ce trone peu importe qui monte dessus") 
    {    window.location.href = "enigme2.html";

        
    } else {alert("Essayez Encore ou tout en majuscule")
    }
}
    

//Page 2 et autorisation pour page3
function nextPage2() {
    let answer2 = document.getElementById("answer2").value;
    if (answer2=="Le film débute à Oackland en Californie. Il s'agit de la ville dont est originaire Ryan Coogler et également la ville qui a vu naître le mouvement politique des black panther"
    |answer2=="Le film débute à Oakland en Californie. Il s'agit de la ville dont est originaire Ryan Coogler et également la ville qui a vu naître le mouvement politique des black panther"
    |answer2=="Le film débute à Oackland en Californie. Il s'agit de la ville dont est originaire Ryan Coogler et également la ville qui a vu naître le mouvement politique des black panther.")
    {    window.location.href = "enigme3.html";

        
    } else {alert("Vérifies bien les orthographes et les accents.")
    }
}
//Page 3 et autorisation pour page résultat

function nextPage3() {
    let answer3 = document.getElementById("answer3").value;
    if (answer3="LEROILION"|answer3=="leroilion"|answer3=="LE ROI LION"|answer3=="le roi lion") 
    {   alert("FELICITATIONS, TU T'ES BIEN DEBROUILLE!!"); 
        window.location.href = "result.html";

        
    } else {alert("N'oublies pas que c'est du binaire")
    }
}




// Date cible du compte à rebours 
const targetDate = new Date('2023-08-14 00:00:00').getTime();

// Mettre à jour le compte à rebours toutes les secondes
const countdownInterval = setInterval(() => {
  // Obtenir la date et l'heure actuelles
  const now = new Date().getTime();

  // Calculer la différence entre la date cible et la date actuelle
  const timeRemaining = targetDate - now;
	
  // Calculer les heures, minutes et secondes restantes
  const hours = Math.floor(timeRemaining / (1000 * 60 * 60));
  const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

  // Afficher le compte à rebours dans la div avec l'id "countdown"
  document.getElementById('countdown').innerHTML = `${hours}: ${minutes}: ${seconds}`;

  // Si le compte à rebours est terminé, afficher un message
  if (timeRemaining < 0) {
    clearInterval(countdownInterval);
    document.getElementById('countdown').innerHTML = "Le compte à rebours !";
  }
}, 1000); 