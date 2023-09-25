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

// ŠEŠTA UŽDUOTIS:
// 1. Sukurti pradinius duomenų masyvą, kuriame būtų bent 5 studentų duomenys (objektų formatu).
// 2. Sukurti funkciją, kuri priima šiuos duomenis ir užkrovus puslapį į ekraną iškart išveda duomenis iš šio masyvo.

const studentsArr = [
  {
    personName: "John",
    personSurname: "Amstrong",
    personAge: 32,
    mobileNo: 862589123,
    email: "john@email.com",
    knowledge: 7,
    personGroup: "FEU8",
    personPreferences: ["PHP", "Node.js"],
  },
  {
    personName: "Ted",
    personSurname: "Baker",
    personAge: 19,
    mobileNo: 862589321,
    email: "ted@email.com",
    knowledge: 4,
    personGroup: "FEU2",
    personPreferences: ["JavaScript"],
  },
  {
    personName: "Lilly",
    personSurname: "Collins",
    personAge: 24,
    mobileNo: 862589555,
    email: "lilly@email.com",
    knowledge: 8,
    personGroup: "FEU3",
    personPreferences: ["Java"],
  },
  {
    personName: "Sarah",
    personSurname: "Miller",
    personAge: 20,
    mobileNo: 862589666,
    email: "sarah@email.com",
    knowledge: 3,
    personGroup: "FEU8",
    personPreferences: ["PHP", "JavaScript", "Node.js"],
  },
  {
    personName: "Thomas",
    personSurname: "Garcia",
    personAge: 38,
    mobileNo: 862589777,
    email: "thomas@email.com",
    knowledge: 9,
    personGroup: "FEU10",
    personPreferences: ["Python"],
  },
];

// console.log(studentsArr);

function getStudents() {
  studentsArr.forEach((student) => {
    const contactsForm = document.querySelector("#contacts-form");
    let studentsList = document.querySelector("#students-list");
    let studentItem = document.createElement("div");
    studentItem.classList.add("student-item");
    const personMainInfo = document.createElement("h3");
    personMainInfo.textContent = `${student.personName} ${student.personSurname}, ${student.personAge} m.`;

    let isHidden = true;

    const personMobileNo = document.createElement("p");
    personMobileNo.textContent = `Telefono Nr.: `;

    const mobileNoHidden = document.createElement("span");
    mobileNoHidden.textContent = "****";

    personMobileNo.append(mobileNoHidden);

    const personEmail = document.createElement("p");
    personEmail.textContent = `El. pašto adresas: `;

    const emailHidden = document.createElement("span");
    emailHidden.textContent = "****";

    personEmail.append(emailHidden);

    const toggleContactsBtn = document.createElement("button");
    toggleContactsBtn.textContent = "Rodyti asmens duomenis";

    toggleContactsBtn.addEventListener("click", () => {
      isHidden = !isHidden;
      if (isHidden) {
        toggleContactsBtn.textContent = "Rodyti asmens duomenis";
        mobileNoHidden.textContent = "****";
        emailHidden.textContent = "****";
      } else {
        toggleContactsBtn.textContent = "Slėpti asmens duomenis";
        mobileNoHidden.textContent = student.mobileNo;
        emailHidden.textContent = student.email;
      }
    });

    const personKnowledgeValue = document.createElement("p");
    personKnowledgeValue.textContent = `IT žinių vertinimas: ${student.knowledge}`;

    const personGroupValue = document.createElement("p");
    personGroupValue.textContent = `Priskirta grupė: ${student.personGroup}`;

    const preferencesListTitle = document.createElement("p");
    preferencesListTitle.textContent = `Studentą dominančios programavimo kalbos:`;
    const personPreferencesList = document.createElement("ul");

    preferencesListTitle.append(personPreferencesList);

    if (student.personPreferences.length > 0) {
      student.personPreferences.forEach((preference) => {
        const personPreferencesListItem = document.createElement("li");
        personPreferencesListItem.textContent = preference;
        personPreferencesList.append(personPreferencesListItem);
      });
    } else {
      const noPreference = document.createElement("li");
      noPreference.textContent = "Nepasirinkta nei viena programavimo kalba";
      personPreferencesList.append(noPreference);
    }

    function createMessage(message, textColor) {
      const messageElement = document.createElement("span");
      messageElement.textContent = message;
      messageElement.style.color = textColor;
      contactsForm.after(messageElement);
      setTimeout(() => {
        messageElement.remove();
      }, 5000);
    }

    const deleteStudentBtn = document.createElement("button");
    deleteStudentBtn.textContent = "Ištrinti studentą";

    deleteStudentBtn.addEventListener("click", () => {
      studentItem.remove();
      const deletedStudentText = `Ištrintas studentas (${student.personName} ${student.personSurname})`;
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
  });
}

getStudents();

function init() {
  const contactsForm = document.querySelector("#contacts-form");
  let studentsList = document.querySelector("#students-list");

  contactsForm.addEventListener("submit", (event) => {
    event.preventDefault();

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

    let isHidden = true;

    const personMobileNo = document.createElement("p");
    personMobileNo.textContent = `Telefono Nr.: `;

    const mobileNoHidden = document.createElement("span");
    mobileNoHidden.textContent = "****";

    personMobileNo.append(mobileNoHidden);

    const personEmail = document.createElement("p");
    personEmail.textContent = `El. pašto adresas: `;

    const emailHidden = document.createElement("span");
    emailHidden.textContent = "****";

    personEmail.append(emailHidden);

    const toggleContactsBtn = document.createElement("button");
    toggleContactsBtn.textContent = "Rodyti asmens duomenis";

    toggleContactsBtn.addEventListener("click", () => {
      isHidden = !isHidden;
      if (isHidden) {
        toggleContactsBtn.textContent = "Rodyti asmens duomenis";
        mobileNoHidden.textContent = "****";
        emailHidden.textContent = "****";
      } else {
        toggleContactsBtn.textContent = "Slėpti asmens duomenis";
        mobileNoHidden.textContent = mobileNo;
        emailHidden.textContent = email;
      }
    });

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
