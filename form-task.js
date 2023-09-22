// ANTRA DALIS:
// 1. Sukurti div elementą, kuris turės id „students-list".
// 2. Kiekvieną kartą pridavus formą (submit), turi būti sukurtas naujas div elementas su klase „student-item" ir pridedamas į „students-list" elemento pradžią.
// 3. Duomenys apie studentą turi būti įdėti į „student-item" elementą.

// 4. Sukūrus studentą, turi iššokti <span> elementas, kuris informuoja apie studento sukūrimą: „Sukurtas studentas (Vardas Pavardė)". Šis span elementas dingsta po 5 sekundžių.
// 5. Šalia range tipo laukelio, sukurti span (arba output) elementą ir jame atvaizduoti range laukelio reikšmę jam keičiantis.

function init() {
  const contactsForm = document.querySelector("#contacts-form");
  let studentsList = document.querySelector("#students-list");

  contactsForm.addEventListener("submit", (event) => {
    event.preventDefault();
    console.log(event);

    let studentItem = document.createElement("div");
    studentItem.classList.add("student-item");

    const personName = contactsForm.name.value;
    const personSurname = contactsForm.surname.value;
    const personAge = contactsForm.age.value;
    const personMobileNo = contactsForm.mobile.value;
    const personEmail = contactsForm.email.value;
    const knowledge = contactsForm.elements["IT-knowledge"].value;
    const personGroup = contactsForm.group.value;
    const personPreferences = contactsForm.querySelectorAll(
      `[name="language"]:checked`
    );
    //console.log(personPreferences);

    const personMainInfo = document.createElement("h3");
    personMainInfo.textContent = `${personName} ${personSurname}, ${personAge} m.`;

    const personContactInfo = document.createElement("p");
    personContactInfo.textContent = `Telefono Nr.: ${personMobileNo};
                                    El. pašto adresas: ${personEmail}`;

    const personKnowledgeValue = document.createElement("p");
    personKnowledgeValue.textContent = `IT žinių vertinimas: ${knowledge}`;

    const personGroupValue = document.createElement("p");
    personGroupValue.textContent = `Priskirta grupė: ${personGroup}`;

    const preferencesListTitle = document.createElement("p");
    preferencesListTitle.textContent = `Studentą dominančios programavimo kalbos:`;
    const personPreferencesList = document.createElement("ul");

    preferencesListTitle.append(personPreferencesList);

    personPreferences.forEach((preference) => {
      const personPreferencesListItem = document.createElement("li");
      personPreferencesListItem.textContent = preference.value;
      personPreferencesList.append(personPreferencesListItem);
    });

    studentItem.append(
      personMainInfo,
      personContactInfo,
      personKnowledgeValue,
      personGroupValue,
      preferencesListTitle
    );
    studentsList.prepend(studentItem);
  });

  getKnowledgeValue();
}

init();

function getKnowledgeValue() {
  const knowledgeValue = document.querySelector("#knowledge-value");
  const knowledgeInput = document.querySelector("#person-IT-knowledge");
  knowledgeValue.textContent = knowledgeInput.value;
  knowledgeInput.addEventListener("input", (event) => {
    knowledgeValue.textContent = event.target.value;
  });
}
