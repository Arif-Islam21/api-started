// console.log("hello from API world");
const user = { id: 1, name: "Gorib Amir", job: "actor" };
const stringified = JSON.stringify(user);
// console.log(stringified);
// console.log(user);

const shop = {
  owner: "Alia",
  address: {
    street: "Kochukhet ,Vuter Goli",
    city: "ranbir",
    country: "BD",
  },
  product: ["laptop", "mic", "monitor", "keyboard"],
  revenue: 45000,
  isOpen: true,
  isNew: false,
};

console.log(shop);
const shopJson = JSON.stringify(shop);
console.log(shopJson);
const shopObject = JSON.parse(shopJson);
console.log(shopObject);
// new day
