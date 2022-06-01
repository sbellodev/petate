let elEmoji = document.getElementsByClassName("randomEmoji")[0];
let emojis = ["💪🏼", "🔱", "🤸🏻‍♂️", ""];
elEmoji.innerHTML = RandomEmojis(emojis);

function RandomEmojis(emojisArray) {
  return (
    emojisArray
      .map((emoji) => {
        let randomNumber = Math.floor(Math.random() * 100);
        return randomNumber > 50 ? emoji : "";
      })
      .join("") || "."
  );
}
