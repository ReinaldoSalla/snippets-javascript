topics = {
  progr_lang: "javascript",
  backend: "node",
  frontend: "react",
  mobile: "react-native"
};

Object.keys(topics).forEach(key => {
  console.log(`${key}: ${topics[key]}`);
});

Object.entries(topics).forEach(([key, val]) => {
  console.log(`${key}: ${val}`);
});
