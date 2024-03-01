const fetchData = async (showMoreClicked = false) => {
  const response = await fetch(
    "https://openapi.programming-hero.com/api/ai/tools"
  );
  const data = await response.json();
  showData(data.data.tools, showMoreClicked);
  //   console.log(data.data.tools);
};

const showData = (aiData, showMoreClicked) => {
  //   console.log(aiData[0]);
  const aiContainer = document.getElementById("ai-container");

  let showData = [];

  if (showMoreClicked === false) {
    showData = aiData.slice(0, 6);
  } else {
    showData = aiData.slice(0);
  }

  showData.forEach((ai) => {
    const aiCard = document.createElement("div");
    aiCard.classList = `card bg-[#1111111A] shadow-xl`;

    aiCard.innerHTML = `
    <figure class="px-6 pt-6">
        <img src="${
          ai.image ? ai?.image : "assets/ai.jpg"
        }" alt="" class="rounded-xl" />
    </figure>
    <div class="card-body items-start">
        <h2 class="text-black text-[25px] font-semibold">Features</h2>
        <ol class="list-decimal pl-4 text-[#585858]">
            <li>${ai?.features[0]}</li>
            <li>${ai?.features[1]}</li>
            <li>${ai?.features[2]}</li>
        </ol>
        <hr class="mt-3 border border-t-[#585858] w-full mx-auto">
        <h2 class="text-black text-[25px] font-semibold">${ai?.name}</h2>
        <div class="flex justify-between items-center w-full">
            <div class="flex gap-2">
                <img src="assets/calender.svg" alt="">
                <p>${ai["published_in"]}</p>
            </div>
                <button class="btn rounded-full text-[#EB5757]">
                    <i class="fa-solid fa-arrow-right"></i>
                </button>   
            </div>
    </div>
  `;

    aiContainer.appendChild(aiCard);
  });
};

const showMore = () => {
  console.log("show more button clicked");
  showMoreClicked = true;
  fetchData(showMoreClicked);
};

fetchData();
