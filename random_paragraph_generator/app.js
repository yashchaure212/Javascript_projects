const text = [
    "The headphones were on. They had been utilized on purpose. She could hear her mom yelling in the background, but couldn't make out exactly what the yelling was about. That was exactly why she had put them on. She knew her mom would enter her room at any minute, and she could pretend that she hadn't heard any of the previous yelling",
    "The thing that's great about this job is the time sourcing the items involves no traveling. I just look online to buy it. It's really as simple as that. While everyone else is searching for what they can sell, I sit in front of my computer and buy better stuff for less money and spend a fraction of the time doing it.",
    "What were the chances? It would have to be a lot more than 100 to 1. It was likely even more than 1,000 to 1. The more he thought about it, the odds of it happening had to be more than 10,000 to 1 and even 100,000 to 1. People often threw around the chances of something happening as being 1,000,000 to 1 as an exaggeration of an unlikely event, but he could see that they may actually be accurate in this situation. Whatever the odds of it happening, he knew they were big. What he didn't know was whether this happening was lucky or unlucky.",
    "He wandered down the stairs and into the basement. The damp, musty smell of unuse hung in the air. A single, small window let in a glimmer of light, but this simply made the shadows in the basement deeper. He inhaled deeply and looked around at a mess that had been accumulating for over 25 years. He was positive that this was the place he wanted to live.",
    "She has seen this scene before. It had come to her in dreams many times before. She had to pinch herself to make sure it wasn't a dream again. As her fingers squeezed against her arm, she felt the pain. It was this pain that immediately woke her up.",
    "Was it a whisper or was it the wind? He wasn't quite sure. He thought he heard a voice but at this moment all he could hear was the wind rustling the leaves of the trees all around him. He stopped and listened more intently to see if he could hear the voice again. Nothing but the wind rustling the leaves could be heard. He was about to continue his walk when he felt a hand on his shoulder, and he quickly turned to see who it was. There was nobody there, but he heard the voice again.",
    "I guess we could discuss the implications of the phrase meant to be. That is if we wanted to drown ourselves in a sea of backwardly referential semantics and other mumbo-jumbo. Maybe such a discussion would result in the determination that meant to be is exactly as meaningless a phrase as it seems to be, and that none of us is actually meant to be doing anything at all. But that's my existential underpants underpinnings showing. It's the way the cookie crumbles. And now I want a cookie.",
    "There was a time when he would have embraced the change that was coming. In his youth, he sought adventure and the unknown, but that had been years ago. He wished he could go back and learn to find the excitement that came with change but it was useless. That curiosity had long left him to where he had come to loathe anything that put him out of his comfort zone.",
    "Finding the red rose in the mailbox was a pleasant surprise for Sarah. She didn't have a boyfriend or know of anyone who was interested in her as anything more than a friend. There wasn't even a note attached to it. Although it was a complete mystery, it still made her heart jump and race a little more than usual. She wished that she could simply accept the gesture and be content knowing someone had given it to her, but that wasn't the way Sarah did things. Now it was time to do a little detective work and try to figure who had actually left the red rose.",
]

const input = document.querySelector('input');
const contentBox = document.querySelector('#paragraphs')

function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex > 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }

const generatePara = () => {
    if(isNaN(input.value) || 0 > input.value || 10 < input.value) {
        const randomNum = Math.floor(Math.random() * 9);
        contentBox.innerHTML = `
        <p>${text[randomNum]} </p>`
    } else {
        const localText = shuffle(text);
        const data = localText.slice(0, input.value);
        const paras = data.map((p) => {
            return `<p>${p}</p>`
        })

        contentBox.innerHTML = paras.join("");
        console.log(paras);
    }
}