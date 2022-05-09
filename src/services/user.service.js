const adjectives = [
  "autumn", "hidden", "bitter", "misty", "silent", "empty", "dry", "dark",
  "summer", "icy", "delicate", "quiet", "white", "cool", "spring", "winter",
  "patient", "twilight", "dawn", "crimson", "wispy", "weathered", "blue",
  "billowing", "broken", "cold", "damp", "falling", "frosty", "green", "long",
  "late", "lingering", "bold", "little", "morning", "muddy", "old", "red",
  "rough", "still", "small", "sparkling", "throbbing", "shy", "wandering",
  "withered", "wild", "black", "young", "holy", "solitary", "fragrant",
  "aged", "snowy", "proud", "floral", "restless", "divine", "polished",
  "ancient", "purple", "lively", "nameless"
];

const nouns = [
  "waterfall", "river", "breeze", "moon", "rain", "wind", "sea", "morning",
  "snow", "lake", "sunset", "pine", "shadow", "leaf", "dawn", "glitter",
  "forest", "hill", "cloud", "meadow", "sun", "glade", "bird", "brook",
  "butterfly", "bush", "dew", "dust", "field", "fire", "flower", "firefly",
  "feather", "grass", "haze", "mountain", "night", "pond", "darkness",
  "snowflake", "silence", "sound", "sky", "shape", "surf", "thunder",
  "violet", "water", "wildflower", "wave", "water", "resonance", "sun",
  "wood", "dream", "cherry", "tree", "fog", "frost", "voice", "paper", "frog",
  "smoke", "star"
];

const colors = [
  '#CA4318',
  '#53A527',
  '#1897A6',
  '#1993E7',
  '#E62565',
  '#A37C82',
  '#424242',
  '#F6BA97',
  '#1A57B6',
  '#A37C82',
  '#C79C38',
];

const capitalize = (sentence) => {
  if(!sentence) {
    return '';
  }

  const words = sentence.split(' ');

  return words.map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

export const randomName = () => {
  const adjective = adjectives[Math.floor(Math.random() * adjectives.length)];
  const noun = nouns[Math.floor(Math.random() * nouns.length)];

  return capitalize(`${adjective} ${noun}`);
}

export const randomColor = () => {
  return colors[Math.floor(Math.random() * colors.length)];
}
