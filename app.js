document.getElementById("fetch-user").addEventListener("click", function () {
  fetch("https://randomuser.me/api/") // Question 1: Why does this fetch call fail? api address not accurate
    .then((response) => response.json())
    .then((data) => {
      displayUser(data.results[0]); // Question 2: Why is data.results undefined? .then response added in line 3
    })
    .catch((error) => console.error("Fetch error:", error));
});

function displayUser(user) {
  const userInfoDiv = document.getElementById("user-info");
  // Question 3: Why isn't the user's name displaying correctly? .notation was not formatted correctly
  userInfoDiv.innerHTML = `Name: ${user.name.first} ${user.name.last}<br>
                           Email: ${user.email}`;
}

// Question 4: Why does this API call fail? no second the css needs to be modified. It is giving a 304 not modified code.
fetch("https://api.example.com/data")
  .then((response) => response.json())
  .catch((error) => {
    console.error("Failed to process data:", error);
  });

// Fetches news articles and displays them on the page
function fetchNews() {
  fetch("https://jsonplaceholder.typicode.com/posts") // Simulated news API
    .then((response) => response.json())
    .then((articles) => {
      const container = document.getElementById("news-container");
      // Question 5: Why do the article titles not appear on the screen? article.title instead of article.name
      articles.forEach((article) => {
        const p = document.createElement("p");
        p.textContent = article.title;
        container.appendChild(p);
      });
    })
    .catch((error) => console.log("Error fetching news:", error));
}

fetchNews();
