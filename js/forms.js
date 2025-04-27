// ***************************************************************************
// Summary kode
// ***************************************************************************

// resetter formen fra starten
// document.querySelector("#webform").reset();

// Eventlistnere på knapperne
document.querySelector("#reset_btn").addEventListener("click", reset);
document.querySelector("#submit_btn").addEventListener("click", submitForm);

// Sender value af inputfelterne til Summary
function submitForm() {
  // viser Summary
  document.querySelector("#sum").style.display = "block";

  // forskellige inputfelter
  document.querySelector("#bruger-navn").textContent =
    document.querySelector("#f-name").value;
  document.querySelector("#bruger-navn2").textContent =
    document.querySelector("#l-name").value;
  document.querySelector("#bruger-nr").textContent =
    document.querySelector("#nr").value;
  document.querySelector("#bruger-mail").textContent =
    document.querySelector("#mail").value;

  // select - option
  //   document.querySelector("#sumType").textContent = document.querySelector("#zombie-type").value;

  document.querySelector("#bruger-område").textContent =
    document.querySelector("#area").value;

  // checkboxe ------------------------------------------------------------
  //   const checkboxes = document.querySelectorAll('input[name="checkbox"]');
  //   console.log(checkboxes)
  const checkboxes = document.querySelectorAll(
    'input[name="checkbox"]:checked'
  );
  document.querySelector("#beskrivelse").innerHTML = "";
  // console.log(checkboxes);
  checkboxes.forEach((elem) => {
    console.log(elem);
    document.querySelector("#beskrivelse").innerHTML +=
      "<li>" + elem.value + "</li>";
  });

  //uddybende besked//.-
  document.querySelector("#oplevelser").textContent =
    document.querySelector("#besked").value;
}
// Console log der viser hvad value er for vores checkbokse. (Man får kun en log
//   // hvis man har udfyldt alle required input og tjekket en eller flere checkbokse af)
//   console.log(checkboxes);

//   // Laver et array
//   const myArray = [];

// Kalder funktionen lavListe for hvert element i checkboxes
//   checkboxes.forEach(lavListe);

//   // Pusher elementerne ind i myArray
//   function lavListe(element) {
//     myArray.push(element.value);
//   }
//   // Putter arrayet ind i summary og separerer med komma og mellemrum
//   document.querySelector("#sumBehaviour").textContent = myArray.join(", ");

// Resetter Formen og skjuler Summary
function reset() {
  document.querySelector("#webform").reset();
  document.querySelector("#sum").style.display = "none";
}
