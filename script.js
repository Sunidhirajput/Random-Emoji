const btnEl = document.getElementById("btn");
const emojiNameEl = document.getElementById("emoji-name");

const emoji = [];

async function getEmoji() {
    try {
        let response = await fetch(
            "https://emoji-api.com/emojis?access_key=b2b4462b82fdcbc8b697da1853e4474670831888"
        );
        let data = await response.json();

        
        for (let i = 0; i < data.length; i++) {
            emoji.push({
                emojiName: data[i].character,
                emojiCode: data[i].unicodeName,
            });
        }
    } catch (error) {
        console.error("Error fetching emojis:", error);
    }
}

getEmoji();

btnEl.addEventListener("click", () => {
    if (emoji.length > 0) {
        const randomNum = Math.floor(Math.random() * emoji.length);
        btnEl.innerText = emoji[randomNum].emojiName;
        emojiNameEl.innerText = emoji[randomNum].emojiCode;
    } else {
        emojiNameEl.innerText = "Loading emojis...";
    }
});
