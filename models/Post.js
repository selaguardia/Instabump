class Post {
  constructor(data) {
    this.caption = data.caption;
    this.bumpCount = data.bumpCount;
    this.image = data.image;
    this.id = this.#generateId();
  }

  #generateId(len = 10) {
    const characters = "qwertyuio1p2a3s4d5f6g7h8j9k0lzxcvbnm";
    let uid = "";

    for (let count = 0; count < len; count++) {
      const character = Math.floor(Math.random() * characters.length);
      uid += characters[character];
    }

    return uid;
  }
}

class Collection {
  #Model;
  #items;
  constructor(model, startingData) {
    this.#Model = model;
    this.#items = startingData.map(item => new this.#Model(item));
  }

  find() {
    return this.#items;
  }

  findById(itemId, callBack) {
    if (!itemId) return console.log("missing id in first argument");

    if (typeof callBack !== "function") {
      return console.log("missing function in second argument");
    }

    const item = this.#items.find(({ id }) => id === itemId);
    let error;

    if (!item) {
      error = { message: `item can't be found` };
    }

    return callBack(error, item);
  }


create(data, callBack) {
  if (!data) return console.log("missing data in first argument");

  if (typeof callBack !== "function") {
    return console.log("missing function in second argument");
  }

  let error, newItem;

  const isEmpty = Object.keys(data).every(field => data[field] === "");

  if (isEmpty) {
    error = { message: `you have empty fields` };
  } else {
    newItem = new this.#Model(data);

    this.#items.push(newItem);
  }

  return callBack(error, newItem);
}

findByIdAndDelete( itemId, callBack ) {
  let error = null;
  const item = this.#items.find((item, idx ) => { 
	  let foundItem;
	  if (item.id === itemId) {
		  /* remove one element */
		  foundItem = this.#items.splice(idx, 1);
	   }

	   return foundItem;
   });

    if (!item) {
      error = { message: `item can't be found` };
    }

    return callBack(error, item);
  }
}
// at the bottom 
module.exports = new Collection(Post, [
  {
    caption: "Caption one.",
    image: "https://picsum.photos/200",
    bumpCount: 0,
    isPinned: false,
  },
{
    caption: "Caption two.",
    image: "https://picsum.photos/200",
    bumpCount: 0,
    isPinned: false,
  },
{
    caption: "Caption three.",
    image: "https://picsum.photos/200",
    bumpCount: 0,
    isPinned: false,
  },  
]);
