const select = (el) => document.querySelector(el);

const title = select(".title");
const url = select(".url");
const btn = select(".btn");
const list = select(".bookmarklist");

let bookmarks = [];

const loadBookmarks = () => {
  const data = localStorage.getItem("bookmarks");
  if (data) {
    bookmarks = JSON.parse(data);
    renderBookmarks();
  }
};

const renderBookmarks = () => {
  list.innerHTML = "";
  bookmarks.forEach((bookmark) => {
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    const link = document.createElement("a");

    delBtn.textContent = "➖";
    delBtn.className = "delete-btn";

    delBtn.addEventListener("mouseenter", () => {
      delBtn.textContent = "🥹";
    });

    delBtn.addEventListener("mouseleave", () => {
      delBtn.textContent = "➖";
    });

    delBtn.addEventListener("click", () => {
      bookmarks = bookmarks.filter((b) => b.url !== bookmark.url);
      localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
      renderBookmarks();
    });

    link.textContent = bookmark.title;
    link.href = bookmark.url;
    link.target = "_blank";

    li.appendChild(delBtn);
    li.appendChild(link);
    list.appendChild(li);
  });
};

btn.addEventListener("click", () => {
  const tVal = title.value.trim();
  const uVal = url.value.trim();

  if (!tVal || !uVal) return alert("Fill both values pls 🥹");
  if (!uVal.startsWith("http")) return alert("❌ Please enter a valid URL");

  const newBookmark = { title: tVal, url: uVal };
  bookmarks.push(newBookmark);
  localStorage.setItem("bookmarks", JSON.stringify(bookmarks));

  renderBookmarks();
  title.value = "";
  url.value = "";
});

loadBookmarks();
