async function fetchword() {
    try {
        const wordInput = document
            .getElementById("word")
            .value
            .toLowerCase();

        console.log("Requesting:", wordInput);

        const response = await fetch(
            `https://api.dictionaryapi.dev/api/v2/entries/en/${wordInput}`
        );

        console.log("Status:", response.status);

        if (!response.ok) {
            throw new Error(`HTTP Error: ${response.status}`);
        }

      const data = await response.json();
      // const meaning = JSON.stringify(data[0].meanings, null, 2);

      // dataElement.textContent = meaning


      // console.log(meaning[0].definitions[0].definition);
      const info = data[0].meanings;
      const dataElement = document.getElementById("text");
      dataElement.innerHTML = "";

      for (const meaning of info) {

          const heading = document.createElement("h3");
          heading.textContent = meaning.partOfSpeech;

          dataElement.appendChild(heading);

          for (const definition of meaning.definitions) {

              const paragraph = document.createElement("p");
              paragraph.textContent = definition.definition;

              dataElement.appendChild(paragraph);
          }
      }



        console.log("Data:", data);

    } catch (error) {
        console.error("Request failed:", error);
    }
}
