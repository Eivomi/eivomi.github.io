// Логіка для FAQ (перемикання видимості відповіді)
document.querySelectorAll(".faq-question").forEach(button => {
  button.addEventListener("click", () => {
    const answer = button.nextElementSibling;

    // Перемикаємо видимість відповіді
    answer.style.display = (answer.style.display === "block") ? "none" : "block";
  });
});
document.addEventListener("DOMContentLoaded", () => {
  if (document.getElementById("books-container")) {
    // Код для головної сторінки
    const books = [
      {
        title: "Смертоносні тварини",
        author: "Марі Тірні",
        price: "350 грн",
        image: "book1.png",
        description: "Мертві говорять лише з тими, хто готовий слухати"
      },
      {
        title: "Вцілілий",
        author: "Чак Поланік",
        price: "300 грн",
        image: "book2.png",
        description: "Тендер Бренсон - єдиний вцілілий член сектантської общини..."
      },
      {
        title: "Вівторки з Моррі",
        author: "Мітч Елбом",
        price: "220 грн",
        image: "book3.png",
        description: "«Вівторки з Моррі» - чарівна хроніка теплих стосунків..."
      },
      {
        title: "Кохання",
        author: "Ана Хван",
        price: "500 грн",
        image: "book4.png",
        description: "В нього крижане серце... Але заради неї він спалив би цілий світ"
      },
      {
        title: "Світло війни",
        author: "Майкл Ондатже",
        price: "320 грн",
        image: "book5.png",
        description: "Жахи Другої світової позаду. Лондон оговтується від кривавої війни."
      },
      {
        title: "Фанат",
        author: "Нік Горнбі",
        price: "320 грн",
        image: "book6.png",
        description: "Весела і водночас філософська історія про дорослішання..."
      },
      {
        title: "Палімпсести",
        author: "Василь Стус",
        price: "380 грн",
        image: "book7.png",
        description: "До книги Василя Стуса увійшли вибрані вірші з різних періодів..."
      },
      {
        title: "Асистент",
        author: "Тесс Ґеррітсен",
        price: "300 грн",
        image: "book8.png",
        description: "Рік тому детективу Джейн Ріццолі вдалося вистежити злочинця..."
      },
      {
        title: "Убивство Роджера Екройда",
        author: "Аґата Крісті",
        price: "230 грн",
        image: "book9.png",
        description: "Еркюль Пуаро береться за чергове розслідування."
      },
      {
        title: "Уроки хімії",
        author: "Бонні Ґармус",
        price: "350 грн",
        image: "book10.png",
        description: "Елізабет — геніальна вчена-хімік. На неї чекала блискуча кар’єра..."
      }
    ];

    const container = document.getElementById("books-container");

    books.forEach(book => {
      const bookCard = document.createElement("div");
      bookCard.classList.add("book-card");

      bookCard.innerHTML = `
        <img src="${book.image}" alt="${book.title}" class="book-image">
        <div class="book-info">
          <h3 class="book-title">${book.title}</h3>
          <p class="book-author">${book.author}</p>
          <p class="book-price">${book.price}</p>
        </div>
      `;

      container.appendChild(bookCard);

      // Додаємо подію кліку на картку книги
      bookCard.addEventListener("click", () => {
        sessionStorage.setItem("selectedBook", JSON.stringify(book));
        window.location.href = "book.html";
      });
    });
  }

  if (document.getElementById("book-title")) {
    // Код для сторінки з деталями книги
    const selectedBook = JSON.parse(sessionStorage.getItem("selectedBook"));

    if (selectedBook) {
      document.getElementById("book-image").src = selectedBook.image;
      document.getElementById("book-image").alt = selectedBook.title;
      document.getElementById("book-title").textContent = selectedBook.title;
      document.getElementById("book-author").textContent = `Автор: ${selectedBook.author}`;
      document.getElementById("book-price").textContent = `Ціна: ${selectedBook.price}`;
      document.getElementById("book-description").textContent = selectedBook.description;

      document.getElementById("add-to-cart").addEventListener("click", () => {
        const cart = JSON.parse(localStorage.getItem("cart")) || [];
        const selectedBook = JSON.parse(sessionStorage.getItem("selectedBook"));

        if (!cart.some(book => book.title === selectedBook.title)) {
          cart.push(selectedBook);
          localStorage.setItem("cart", JSON.stringify(cart));
          alert(`${selectedBook.title} додано в кошик`);
          document.getElementById("add-to-cart").disabled = true;
          document.getElementById("add-to-cart").textContent = "Вже в кошику";
        }
      });


      document.getElementById("add-to-favorites").addEventListener("click", () => {
        alert(`${selectedBook.title} додано до вподобаних`);
        document.getElementById("add-to-favorites").disabled = true;
        document.getElementById("add-to-favorites").textContent = "Вподобано";
      });
    } else {
      document.body.innerHTML = "<p>Книга не знайдена!</p>";
    }
  }
});
