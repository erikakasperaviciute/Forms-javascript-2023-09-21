function init() {
  const testForm = document.querySelector("#test-form");

  console.log(testForm);

  testForm.addEventListener("submit", (event) => {
    // kad neperkrautu puslapio po submito
    event.preventDefault();
    console.log(event);

    // const personName = document.querySelector("#person-name").value;
    // const personName = document.getElementById("person-name").value;
    // const personName = testForm.querySelector("#person-name").value;
    const personName = testForm.name.value;
    const personAge = testForm.elements["person-age"].value;
    console.log(personName);
    console.log(personAge);

    const personDescription = document.createElement("p");
    personDescription.textContent = `person name is ${personName} and age is ${personAge}`;

    testForm.after(personDescription);
  });
}

init();
