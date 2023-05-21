// In this example, the news articles will be fetched from an API.
// You can replace this code with your own implementation.

// Sample news data
const newsData = [
    {
      title: "Team XYZ wins the International E-Sports Tournament",
      date: "May 12, 2023",
      image: "news1.jpg",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris fringilla metus et facilisis congue."
    },
    {
      title: "New patch released for popular e-sports game",
      date: "May 13, 2023",
      image: "news2.jpg",
      description: "Curabitur rutrum lacus ac risus iaculis, eu pulvinar justo consequat."
    },
    {
      title: "Upcoming e-sports event announced in Tokyo",
      date: "May 11, 2023",
      image: "news3.jpg",
      description: "Sed non ipsum consequat, cursus dui non, pellentesque erat."
    }
  ];
  
  // Function to display news articles
  function displayNews() {
    const newsContainer = document.querySelector('.news-container');
  
    newsData.forEach(item => {
      const article = document.createElement('article');
      article.innerHTML = `
        <img src="${item.image}" alt="${item.title}">
        <h3>${item.title}</h3>
        <p>${item.date}</p>
        <p>${item.description}</p>
      `;
      newsContainer.appendChild(article);
    });
  }
  
  // Call the displayNews function to populate the news articles
  displayNews();
  