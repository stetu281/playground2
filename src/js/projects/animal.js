export const animal = async () => {
  async function getAnimal() {
    try {
      const response = await fetch(
        "https://zoo-animal-api.herokuapp.com/animals/rand"
      );
      const animal = await response.json();
      return animal;
    } catch (error) {
      console.log("Error:", error);
    }
  }

  function renderAnimal(animal) {
    const box = document.querySelector(".animal");
    const content = document.querySelector(".animal__content");

    content.innerHTML = "";
    box.style.backgroundImage = `url(${animal.image_link})`;

    let container = document.createElement("div");
    container.classList.add("animal__container");
    container.innerHTML = `
            <h2 class="animal__name">${animal.name}</h2>
            <div class="animal__description">
                <p>Habitat: ${animal.habitat}</p>
                <p>Diet: ${animal.diet}</p>
                <p>Geo Range: ${animal.geo_range}</p>
            </div>
        `;

    content.appendChild(container);
  }

  let animal = await getAnimal();
  renderAnimal(animal);

  document
    .querySelector(".animal__button")
    .addEventListener("click", async () => {
      let animal = await getAnimal();
      renderAnimal(animal);
    });
};
