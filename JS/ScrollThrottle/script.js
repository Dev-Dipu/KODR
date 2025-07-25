const select = (elm) => document.querySelector(elm);

axios.get(`https://dummyjson.com/users?limit=12&skip=0`).then((res) => {
    res.data.users.forEach((user) => {
        console.log(user)
        // Outer card div
        const card = document.createElement("div");
        card.className =
            "bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300";

        // Image
        const img = document.createElement("img");
        img.className = "w-full h-40 object-cover";
        img.src = "https://randomuser.me/api/portraits/men/32.jpg";
        img.alt = "User photo";
        card.appendChild(img);

        // Inner content div
        const content = document.createElement("div");
        content.className = "p-6";

        // Name
        const name = document.createElement("h2");
        name.className = "text-xl font-semibold text-gray-800 mb-2";
        name.textContent = user.firstName + " " + user.lastName;
        content.appendChild(name);

        // Job title
        const job = document.createElement("p");
        job.className = "text-gray-600 mb-4";
        job.textContent = "Frontend Developer";
        content.appendChild(job);

        // Skills container
        const skills = document.createElement("div");
        skills.className = "flex items-center space-x-4";

        // React skill badge
        const reactBadge = document.createElement("span");
        reactBadge.className =
            "inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded";
        reactBadge.textContent = "React";
        skills.appendChild(reactBadge);

        // Vue skill badge
        const vueBadge = document.createElement("span");
        vueBadge.className =
            "inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded";
        vueBadge.textContent = "Vue";
        skills.appendChild(vueBadge);

        // Append skills to content
        content.appendChild(skills);

        // Append content to card
        card.appendChild(content);

        // Finally, append the card to the body or any container
        select('.users').appendChild(card);
    });
});
