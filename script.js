let elEmoji = document.getElementsByClassName("randomEmoji")[0];
let emojis = ["πͺπΌ", "π±", "π€Έπ»ββοΈ", ""];
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
