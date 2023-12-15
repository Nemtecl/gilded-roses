const { Item, Shop } = require("../");

const ITEM_NAMES = [
  "Aged Brie",
  "Backstage passes to a TAFKAL80ETC concert",
  "Sulfuras, Hand of Ragnaros",
];

const ITEM_SELLINS = [-1, 0, 10, 20, 30, 40, 50];
const QUALITIES = [-1, 0, 49, 80];

const ITEMS = ITEM_NAMES.map((name) =>
  ITEM_SELLINS.map((sellIn) =>
    QUALITIES.map((quality) => new Item(name, sellIn, quality))
  )
).flat(3);

test("gilded roses", () => {
  const shop = new Shop(ITEMS);

  const updatedItems = shop.updateQuality();

  expect(updatedItems).toMatchSnapshot();
});
