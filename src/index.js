class Item {
  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

const ItemTypes = {
  BRIE: "Aged Brie",
  BACKSTAGE: "Backstage passes to a TAFKAL80ETC concert",
  SULFURAS: "Sulfuras, Hand of Ragnaros",
};

class Shop {
  constructor(items) {
    this.items = items;
  }

  updateBrie(item) {
    if (item.quality < 50) {
      item.quality = item.quality + 1;
    }

    item.sellIn = item.sellIn - 1;

    if (item.sellIn < 0 && item.quality < 50) {
      item.quality = item.quality + 1;
    }
  }

  updateBackstage(item) {
    if (item.quality < 50) {
      item.quality = item.quality + 1;
      if (item.sellIn < 11 && item.quality < 50) {
        item.quality = item.quality + 1;
      }
      if (item.sellIn < 6 && item.quality < 50) {
        item.quality = item.quality + 1;
      }
    }
    item.sellIn = item.sellIn - 1;

    if (item.sellIn < 0) {
      item.quality = item.quality - item.quality;
    }
  }

  updateSulfuras(item) {}

  updateNormal(item) {
    if (item.quality > 0) {
      item.quality = item.quality - 1;
    }

    item.sellIn = item.sellIn - 1;

    if (item.sellIn < 0 && item.quality > 0) {
      item.quality = item.quality - 1;
    }
  }

  updateQuality() {
    for (let i = 0; i < this.items.length; i++) {
      const item = this.items[i];

      switch (item.name) {
        case ItemTypes.BRIE:
          this.updateBrie(item);
          break;
        case ItemTypes.BACKSTAGE:
          this.updateBackstage(item);
          break;
        case ItemTypes.SULFURAS:
          this.updateSulfuras(item);
          break;
        default:
          this.updateNormal(item);
          break;
      }
    }

    return this.items;
  }
}

module.exports = { Item, Shop };
