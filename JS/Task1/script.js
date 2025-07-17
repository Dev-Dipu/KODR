// Build a small JS widget that lets users:
// 	•	Save a website (title + URL) to bookmarks.
// 	•	Show all saved bookmarks in a list.
// 	•	Clicking a bookmark opens the link in a new tab.
// 	•	Bookmarks should persist even after refresh.

// ✅ Macro & Micro Steps:
// 	1.	HTML structure
// 	•	Input for title
// 	•	Input for URL
// 	•	Button to save
// 	•	Empty <ul> for list
// 	2.	Capture form input
// 	•	Use .value from DOM
// 	3.	Validate the URL
// 	•	Basic check: startsWith("http")
// 	4.	Create a bookmark object
// 	•	{ title: "ChatGPT", url: "https://chat.openai.com" }
// 	5.	Push to array of bookmarks
// 	6.	Save to localStorage
// 	•	Convert array to JSON and store
// 	7.	Render bookmarks
// 	•	Loop through bookmarks → create <li> with anchor
// 	8.	Open in new tab
// 	•	<a target="_blank">
// 	9.	On page load, fetch from localStorage
// 	•	JSON.parse() and render again

const select = (elm) => document.querySelector(elm);

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
      bookmarks.forEach((bookmark, i) => {
        const li = document.createElement("li");
        const a = document.createElement("a");
        a.textContent = bookmark.title;
        a.href = bookmark.url;
        a.target= '_blank';
        console.log(a)
        list.appendChild(a);
      });
    };

    btn.addEventListener("click", () => {
      let tVal = title.value.trim();
      let uVal = url.value.trim();

      if (!(tVal && uVal)) return alert("fill both values pls 🥹");
        if (!uVal.startsWith("http")) return alert("❌ Please enter a valid URL");

        const newBookmark = { title: tVal, url: uVal };
        bookmarks.push(newBookmark);

        localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
        renderBookmarks();

        title.value = "";
        url.value = "";
    });

    loadBookmarks();