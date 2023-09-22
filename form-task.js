// ANTRA DALIS:
// 1. Sukurti div elementą, kuris turės id „students-list".
// 2. Kiekvieną kartą pridavus formą (submit), turi būti sukurtas naujas div elementas su klase „student-item" ir pridedamas į „students-list" elemento pradžią.
// 3. Duomenys apie studentą turi būti įdėti į „student-item" elementą.

// 4. Sukūrus studentą, turi iššokti <span> elementas, kuris informuoja apie studento sukūrimą: „Sukurtas studentas (Vardas Pavardė)". Šis span elementas dingsta po 5 sekundžių.
// 5. Šalia range tipo laukelio, sukurti span (arba output) elementą ir jame atvaizduoti range laukelio reikšmę jam keičiantis.

// TREČIA DALIS:
// 1. Vietoje el. pašto ir tel. numerio rodyti tik žvaigždutes „****".
// 2. Kiekviename „student-item" elemente sukurti mygtuką „Rodyti asmens duomenis".
// 3. Paspaudus šį mygtuką:
//     3.1. Parodyti to studento el. paštą ir tel. numerį.
//     3.2. Pakeist mygtuko tekstą į „Slėpti asmens duomenis".
// 4. Jeigu asmens duomenys yra rodomi, tai paspaudus mygtuką:
//     4.1. Paslėpti asmens el. paštą ir tel. numerį.
//     4.2. Mygtuko tekstą pakeisti į „Rodyti asmens duomenis".

// KETVIRTA DALIS (studento ištrynimas):
// 1. Prie kiekvieno sukurti studento elemento pridėti mygtuką „Ištrinti studentą".
// 2. Paspaudus šį mygtuką, studento elementas yra ištrinamas.
// 3. Ištrynus studentą, turi iššokti <span> elementas, kuris informuoja apie studento ištrynimą: „Studentas (Vardas Pavardė) sėkmingai ištrintas.". Šis span elementas dingsta po 5 sekundžių.

function init() {
  const contactsForm = document.querySelector("#contacts-form");
  let studentsList = document.querySelector("#students-list");

  contactsForm.addEventListener("submit", (event) => {
    event.preventDefault();
    // console.log(event);

    const form = event.target;

    let studentItem = document.createElement("div");
    studentItem.classList.add("student-item");

    const personName = form.name.value;
    const personSurname = form.surname.value;
    const personAge = form.age.value;
    const mobileNo = form.mobile.value;
    const email = form.email.value;
    const knowledge = form.elements["IT-knowledge"].value;
    const personGroup = form.group.value;
    const personPreferences = form.querySelectorAll("[name=language]:checked");

    const personMainInfo = document.createElement("h3");
    personMainInfo.textContent = `${personName} ${personSurname}, ${personAge} m.`;

    // const personMobileNo = document.createElement("p");
    // personMobileNo.textContent = `Telefono Nr.: ****`;

    // const personEmail = document.createElement("p");
    // personEmail.textContent = `El. pašto adresas: ****`;

    // const toggleContactsBtn = document.createElement("button");
    // toggleContactsBtn.textContent = "Rodyti asmens duomenis";

    // toggleContactsBtn.addEventListener("click", () => {
    //   if (
    //     personMobileNo.textContent === `Telefono Nr.: ****` &&
    //     personEmail.textContent === `El. pašto adresas: ****`
    //   ) {
    //     personMobileNo.textContent = `Telefono Nr.: ${mobileNo}`;
    //     personEmail.textContent = `El. pašto adresas: ${email}`;
    //     toggleContactsBtn.textContent = "Slėpti asmens duomenis";
    //   } else {
    //     personMobileNo.textContent = `Telefono Nr.: ****`;
    //     personEmail.textContent = `El. pašto adresas: ****`;
    //     toggleContactsBtn.textContent = "Rodyti asmens duomenis";
    //   }
    // });
    const hiddenText = document.createElement("span");
    hiddenText.textContent = "****";

    const personMobileNo = document.createElement("p");
    personMobileNo.textContent = `Telefono Nr.: ${hiddenText.textContent}`;

    const personEmail = document.createElement("p");
    personEmail.textContent = `El. pašto adresas: ${hiddenText.textContent}`;

    const toggleContactsBtn = document.createElement("button");
    toggleContactsBtn.textContent = "Rodyti asmens duomenis";

    toggleContactsBtn.addEventListener("click", () => {
      if (
        personMobileNo.textContent.includes(hiddenText.textContent) &&
        personEmail.textContent.includes(hiddenText.textContent)
      ) {
        personMobileNo.textContent = `Telefono Nr.: ${mobileNo}`;
        personEmail.textContent = `El. pašto adresas: ${email}`;
        toggleContactsBtn.textContent = "Slėpti asmens duomenis";
      } else {
        personMobileNo.textContent = `Telefono Nr.: ${hiddenText.textContent}`;
        personEmail.textContent = `El. pašto adresas: ${hiddenText.textContent}`;
        toggleContactsBtn.textContent = "Rodyti asmens duomenis";
      }
    });

    // const personContactInfo = document.createElement("p");
    // personContactInfo.innerHTML = `Telefono Nr.: ${mobileNo} <br> El. pašto adresas: ${email}`;

    const personKnowledgeValue = document.createElement("p");
    personKnowledgeValue.textContent = `IT žinių vertinimas: ${knowledge}`;

    const personGroupValue = document.createElement("p");
    personGroupValue.textContent = `Priskirta grupė: ${personGroup}`;

    const preferencesListTitle = document.createElement("p");
    preferencesListTitle.textContent = `Studentą dominančios programavimo kalbos:`;
    const personPreferencesList = document.createElement("ul");

    preferencesListTitle.append(personPreferencesList);

    if (personPreferences.length > 0) {
      personPreferences.forEach((preference) => {
        const personPreferencesListItem = document.createElement("li");
        personPreferencesListItem.textContent = preference.value;
        personPreferencesList.append(personPreferencesListItem);
      });
    } else {
      const noPreference = document.createElement("li");
      noPreference.textContent = "Nepasirinkta nei viena programavimo kalba";
      personPreferencesList.append(noPreference);
    }

    // const createdStudentElement = document.createElement("span");
    // createdStudentElement.textContent = `Sukurtas studentas (${personName} ${personSurname})`;
    // createdStudentElement.style.color = "green";
    // contactsForm.after(createdStudentElement);

    // setTimeout(() => {
    //   createdStudentElement.remove();
    // }, 5000);

    // const deleteStudentBtn = document.createElement("button");
    // deleteStudentBtn.textContent = "Ištrinti studentą";

    // deleteStudentBtn.addEventListener("click", () => {
    //   studentItem.remove();

    //   const deletedStudentElement = document.createElement("span");
    //   deletedStudentElement.textContent = `Ištrintas studentas (${personName} ${personSurname})`;
    //   deletedStudentElement.style.color = "red";
    //   contactsForm.after(deletedStudentElement);

    //   setTimeout(() => {
    //     deletedStudentElement.remove();
    //   }, 5000);
    // });

    function createMessage(message, textColor) {
      const messageElement = document.createElement("span");
      messageElement.textContent = message;
      messageElement.style.color = textColor;
      contactsForm.after(messageElement);
      setTimeout(() => {
        messageElement.remove();
      }, 5000);
    }

    const createdStudentText = `Sukurtas studentas (${personName} ${personSurname})`;
    createMessage(createdStudentText, "green");

    const deleteStudentBtn = document.createElement("button");
    deleteStudentBtn.textContent = "Ištrinti studentą";

    deleteStudentBtn.addEventListener("click", () => {
      studentItem.remove();
      const deletedStudentText = `Ištrintas studentas (${personName} ${personSurname})`;
      createMessage(deletedStudentText, "red");
    });

    studentItem.append(
      personMainInfo,
      personMobileNo,
      personEmail,
      personKnowledgeValue,
      personGroupValue,
      preferencesListTitle,
      toggleContactsBtn,
      deleteStudentBtn
    );
    studentsList.prepend(studentItem);

    form.reset();
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
