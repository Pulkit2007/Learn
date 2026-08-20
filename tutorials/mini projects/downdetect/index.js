async function downdetect() {
  const input = document.getElementById("word").value.toLowerCase();

  try {
    const response = await fetch(
      `https://isitdownstatus.com/api/v1/status/${input}`,
    );
    if (!response.ok) {
      throw new Error("The detector is itself down! 🥲");
    }
    const info = await response.json();
    console.log(info.data.status);
    console.log(info.data.name);
    const image = document.getElementById("image");
    image.src = info.data.logo_url;
    image.style.display = "block";

    const status = document.getElementById("text");
    status.style.color = info.data.status === "operational" ? "#33D17A" : "#FF5D5D";
    if (info.data.status === `operational`) {
      status.textContent = `The ${input} is fully functional.`;
    }

    else {

      status.textContent = `Oops, The ${input} is down 🔻`;

    }


  } catch (error) {
    console.error(error);
  }
}
