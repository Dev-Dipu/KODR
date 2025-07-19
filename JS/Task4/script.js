// 💡 Q4: Image Previewer with Validation

// Problem:
// User uploads an image and sees a live preview. Only allow JPEG/PNG under 2MB.

// ✅ Steps:
// 	1.	HTML file input + preview div
// 	2.	Add change listener on input
// 	3.	Check file type
// 	•	Use file.type (MIME type)
// 	4.	Check file size
// 	•	file.size in bytes
// 	5.	Show preview using
// 	•	URL.createObjectURL(file)
// 	6.	Insert preview image into DOM

const select = (elm) => document.querySelector(elm);

const inp = select(".selectimg");
const img = select("img");

inp.addEventListener("change", () => {
    const file = inp.files[0];
    if (!(file.type == "image/png" || file.type == "image/jpeg"))
        return alert("file type must be png or jpeg ⚠️");
    if (file.size < 20100) return alert("file must be under 2kb 🥹");

    const url = URL.createObjectURL(file);
    img.src = url;
});
