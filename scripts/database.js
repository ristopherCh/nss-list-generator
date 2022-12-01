const database = {
  items: [
    {
      id: 1,
      name: "Milk",
      categoryId: 1,
    },
    {
      id: 2,
      name: "Butter",
      categoryId: 1,
    },
    {
      id: 3,
      name: "Eggs",
      categoryId: 1,
    },
    {
      id: 4,
      name: "Sparkling water",
      categoryId: 1,
    },
    {
      id: 5,
      name: "Mayonnaise",
      categoryId: 1,
    },
    {
      id: 6,
      name: "Ketchup",
      categoryId: 1,
    },
    {
      id: 7,
      name: "Mustard",
      categoryId: 1,
    },
    {
      id: 8,
      name: "Jam",
      categoryId: 1,
    },
    {
      id: 9,
      name: "Garlic",
      categoryId: 1,
    },
    {
      id: 10,
      name: "Cheese",
      categoryId: 1,
    },
    {
      id: 11,
      name: "Flour",
      categoryId: 2,
    },
    {
      id: 12,
      name: "Sugar",
      categoryId: 2,
    },
    {
      id: 13,
      name: "Honey",
      categoryId: 2,
    },
    {
      id: 14,
      name: "Olive Oil",
      categoryId: 2,
    },
    {
      id: 15,
      name: "Coffee",
      categoryId: 2,
    },
    {
      id: 16,
      name: "Salt",
      categoryId: 2,
    },
    {
      id: 17,
      name: "Pepper",
      categoryId: 2,
    },
    {
      id: 18,
      name: "Broth",
      categoryId: 2,
    },
    {
      id: 19,
      name: "Rice",
      categoryId: 2,
    },
    {
      id: 20,
      name: "Pasta",
      categoryId: 2,
    },
    {
      id: 21,
      name: "Baking Soda",
      categoryId: 2,
    },
    {
      id: 22,
      name: "Chips",
      categoryId: 2,
    },
    {
      id: 23,
      name: "Cereal",
      categoryId: 2,
    },
    {
      id: 24,
      name: "Bread",
      categoryId: 2,
    },
    {
      id: 25,
      name: "Hand soap",
      categoryId: 3,
    },
    {
      id: 26,
      name: "Dish Soap",
      categoryId: 3,
    },
    {
      id: 27,
      name: "Paper towels",
      categoryId: 3,
    },
    {
      id: 28,
      name: "Garbage bags",
      categoryId: 3,
    },
    {
      id: 29,
      name: "Ziplock bags",
      categoryId: 3,
    },
    {
      id: 30,
      name: "Laundry Detergent",
      categoryId: 3,
    },
    {
      id: 31,
      name: "Sponges",
      categoryId: 3,
    },
    {
      id: 32,
      name: "Windex",
      categoryId: 3,
    },
    {
      id: 33,
      name: "All purpose cleaner",
      categoryId: 3,
    },
    {
      id: 34,
      name: "Toilet paper",
      categoryId: 3,
    },
    {
      id: 35,
      name: "Ibuprofen",
      categoryId: 4,
    },
    {
      id: 36,
      name: "Tylenol",
      categoryId: 4,
    },
    {
      id: 37,
      name: "Band-aids",
      categoryId: 4,
    },
    {
      id: 38,
      name: "Rubbing alcohol",
      categoryId: 4,
    },
    {
      id: 39,
      name: "Hydrogen peroxide",
      categoryId: 4,
    },
    {
      id: 40,
      name: "Sunscreen",
      categoryId: 4,
    },
    {
      id: 41,
      name: "Vitamins",
      categoryId: 4,
    },
    {
      id: 42,
      name: "Neosporin",
      categoryId: 4,
    },
    {
      id: 44,
      name: "Cotton swabs",
      categoryId: 5,
    },
    {
      id: 45,
      name: "Shampoo",
      categoryId: 5,
    },
    {
      id: 46,
      name: "Conditioner",
      categoryId: 5,
    },
    {
      id: 47,
      name: "Lotion",
      categoryId: 5,
    },
    {
      id: 48,
      name: "Toothpaste",
      categoryId: 5,
    },
    {
      id: 49,
      name: "Floss",
      categoryId: 5,
    },
    {
      id: 50,
      name: "Body wash",
      categoryId: 5,
    },
    {
      id: 51,
      name: "Deodorant",
      categoryId: 5,
    },
    {
      id: 52,
      name: "Batteries",
      categoryId: 6,
    },
    {
      id: 53,
      name: "Lightbulbs",
      categoryId: 6,
    },
    {
      id: 54,
      name: "Matches",
      categoryId: 6,
    },
    {
      id: 55,
      name: "Duct tape",
      categoryId: 6,
    },
    {
      id: 56,
      name: "Air filters",
      categoryId: 6,
    },
    {
      id: 57,
      name: "Super glue",
      categoryId: 6,
    },
  ],
  categories: [
    {
      id: 1,
      name: "Fridge & Freezer",
    },
    {
      id: 2,
      name: "Pantry",
    },
    {
      id: 3,
      name: "Household",
    },
    {
      id: 4,
      name: "Health",
    },
    {
      id: 5,
      name: "Toiletries",
    },
    {
      id: 6,
      name: "Maintenance",
    },
  ],
  stores: [
    {
      id: 1,
      name: "Kroger",
    },
    {
      id: 2,
      name: "Target",
    },
    {
      id: 3,
      name: "Walmart",
    },
    {
      id: 4,
      name: "Publix",
    },
  ],
  storeItems: [
    {
      id: 1,
      storeId: 1,
      itemId: 1,
      price: 3.99,
    },
    {
      id: 2,
      storeId: 1,
      itemId: 2,
      price: 2.95,
    },
    {
      id: 3,
      storeId: 1,
      itemId: 3,
      price: 5.45,
    },
    {
      id: 4,
      storeId: 1,
      itemId: 4,
      price: 9.98,
    },
    {
      id: 5,
      storeId: 1,
      itemId: 5,
      price: 4.99,
    },
    {
      id: 6,
      storeId: 1,
      itemId: 6,
      price: 3.95,
    },
    {
      id: 7,
      storeId: 1,
      itemId: 7,
      price: 3.95,
    },
    {
      id: 8,
      storeId: 1,
      itemId: 8,
      price: 2.89,
    },
    {
      id: 9,
      storeId: 1,
      itemId: 9,
      price: 0.99,
    },
    {
      id: 10,
      storeId: 1,
      itemId: 10,
      price: 4.95,
    },
    {
      id: 11,
      storeId: 1,
      itemId: 11,
      price: 4.97,
    },
    {
      id: 12,
      storeId: 1,
      itemId: 12,
      price: 5.99,
    },
    {
      id: 13,
      storeId: 1,
      itemId: 13,
      price: 2.98,
    },
    {
      id: 14,
      storeId: 1,
      itemId: 14,
      price: 8.5,
    },
    {
      id: 15,
      storeId: 1,
      itemId: 15,
      price: 6.99,
    },
    {
      id: 16,
      storeId: 1,
      itemId: 16,
      price: 3.5,
    },
    {
      id: 17,
      storeId: 1,
      itemId: 17,
      price: 2.87,
    },
    {
      id: 18,
      storeId: 1,
      itemId: 18,
      price: 2.25,
    },
    {
      id: 19,
      storeId: 1,
      itemId: 19,
      price: 4.1,
    },
    {
      id: 19,
      storeId: 1,
      itemId: 20,
      price: 5.87,
    },
    {
      id: 20,
      storeId: 1,
      itemId: 21,
      price: 2.99,
    },
    {
      id: 21,
      storeId: 1,
      itemId: 22,
      price: 3.98,
    },
    {
      id: 22,
      storeId: 1,
      itemId: 23,
      price: 7.45,
    },
    {
      id: 23,
      storeId: 1,
      itemId: 24,
      price: 3.55,
    },
    {
      id: 24,
      storeId: 1,
      itemId: 26,
      price: 5.9,
    },
    {
      id: 25,
      storeId: 1,
      itemId: 27,
      price: 8.98,
    },
    {
      id: 26,
      storeId: 1,
      itemId: 28,
      price: 5.77,
    },
    {
      id: 27,
      storeId: 1,
      itemId: 29,
      price: 9.98,
    },
    {
      id: 28,
      storeId: 1,
      itemId: 31,
      price: 2.99,
    },
    {
      id: 29,
      storeId: 1,
      itemId: 34,
      price: 6.98,
    },
    {
      id: 30,
      storeId: 1,
      itemId: 35,
      price: 6.99,
    },
    {
      id: 31,
      storeId: 1,
      itemId: 36,
      price: 6.99,
    },
    {
      id: 32,
      storeId: 1,
      itemId: 37,
      price: 4.45,
    },
    {
      id: 33,
      storeId: 1,
      itemId: 48,
      price: 3.1,
    },
    {
      id: 34,
      storeId: 1,
      itemId: 49,
      price: 1.99,
    },
    {
      id: 35,
      storeId: 1,
      itemId: 52,
      price: 12.79,
    },
    {
      id: 36,
      storeId: 1,
      itemId: 54,
      price: 0.99,
    },
    {
      id: 37,
      storeId: 2,
      itemId: 1,
      price: 3.99,
    },
    {
      id: 38,
      storeId: 2,
      itemId: 2,
      price: 3.5,
    },
    {
      id: 39,
      storeId: 2,
      itemId: 4,
      price: 5.89,
    },
    {
      id: 40,
      storeId: 2,
      itemId: 5,
      price: 2.5,
    },
    {
      id: 41,
      storeId: 2,
      itemId: 6,
      price: 2.1,
    },
    {
      id: 42,
      storeId: 2,
      itemId: 7,
      price: 3.0,
    },
    {
      id: 43,
      storeId: 2,
      itemId: 15,
      price: 6.99,
    },
    {
      id: 44,
      storeId: 2,
      itemId: 16,
      price: 2.99,
    },
    {
      id: 45,
      storeId: 2,
      itemId: 17,
      price: 1.99,
    },
    {
      id: 46,
      storeId: 2,
      itemId: 22,
      price: 3.99,
    },
    {
      id: 47,
      storeId: 2,
      itemId: 23,
      price: 5.98,
    },
    {
      id: 48,
      storeId: 2,
      itemId: 24,
      price: 4.99,
    },
    {
      id: 49,
      storeId: 2,
      itemId: 25,
      price: 2.98,
    },
    {
      id: 50,
      storeId: 2,
      itemId: 26,
      price: 3.49,
    },
    {
      id: 51,
      storeId: 2,
      itemId: 27,
      price: 5.67,
    },
    {
      id: 52,
      storeId: 2,
      itemId: 28,
      price: 4.89,
    },
    {
      id: 53,
      storeId: 2,
      itemId: 29,
      price: 3.67,
    },
    {
      id: 54,
      storeId: 2,
      itemId: 30,
      price: 9.49,
    },
    {
      id: 55,
      storeId: 2,
      itemId: 31,
      price: 3.98,
    },
    {
      id: 56,
      storeId: 2,
      itemId: 32,
      price: 4.89,
    },
    {
      id: 57,
      storeId: 2,
      itemId: 33,
      price: 7.9,
    },
    {
      id: 58,
      storeId: 2,
      itemId: 34,
      price: 8.99,
    },
    {
      id: 59,
      storeId: 2,
      itemId: 35,
      price: 6.87,
    },
    {
      id: 60,
      storeId: 2,
      itemId: 36,
      price: 7.1,
    },
    {
      id: 61,
      storeId: 2,
      itemId: 37,
      price: 4.98,
    },
    {
      id: 62,
      storeId: 2,
      itemId: 38,
      price: 2.9,
    },
    {
      id: 63,
      storeId: 2,
      itemId: 39,
      price: 4.0,
    },
    {
      id: 64,
      storeId: 2,
      itemId: 40,
      price: 3.5,
    },
    {
      id: 65,
      storeId: 2,
      itemId: 41,
      price: 12.99,
    },
    {
      id: 66,
      storeId: 2,
      itemId: 42,
      price: 4.13,
    },
    {
      id: 67,
      storeId: 2,
      itemId: 44,
      price: 1.99,
    },
    {
      id: 68,
      storeId: 2,
      itemId: 45,
      price: 13.8,
    },
    {
      id: 69,
      storeId: 2,
      itemId: 46,
      price: 13.8,
    },
    {
      id: 70,
      storeId: 2,
      itemId: 47,
      price: 5.0,
    },
    {
      id: 71,
      storeId: 2,
      itemId: 48,
      price: 2.99,
    },
    {
      id: 72,
      storeId: 2,
      itemId: 49,
      price: 1.9,
    },
    {
      id: 73,
      storeId: 2,
      itemId: 50,
      price: 9.9,
    },
    {
      id: 74,
      storeId: 2,
      itemId: 51,
      price: 8.99,
    },
    {
      id: 75,
      storeId: 2,
      itemId: 52,
      price: 12.9,
    },
    {
      id: 76,
      storeId: 2,
      itemId: 53,
      price: 14.98,
    },
    {
      id: 77,
      storeId: 2,
      itemId: 54,
      price: 2.98,
    },
    {
      id: 78,
      storeId: 3,
      itemId: 1,
      price: 2.1,
    },
    {
      id: 79,
      storeId: 3,
      itemId: 2,
      price: 1.98,
    },
    {
      id: 80,
      storeId: 3,
      itemId: 3,
      price: 1.7,
    },
    {
      id: 81,
      storeId: 3,
      itemId: 4,
      price: 3.1,
    },
    {
      id: 82,
      storeId: 3,
      itemId: 5,
      price: 1.8,
    },
    {
      id: 83,
      storeId: 3,
      itemId: 6,
      price: 1.98,
    },
    {
      id: 84,
      storeId: 3,
      itemId: 7,
      price: 1.8,
    },
    {
      id: 85,
      storeId: 3,
      itemId: 8,
      price: 2.4,
    },
    {
      id: 86,
      storeId: 3,
      itemId: 9,
      price: 0.78,
    },
    {
      id: 87,
      storeId: 3,
      itemId: 10,
      price: 1.49,
    },
    {
      id: 88,
      storeId: 3,
      itemId: 11,
      price: 2.5,
    },
    {
      id: 89,
      storeId: 3,
      itemId: 12,
      price: 3.1,
    },
    {
      id: 90,
      storeId: 3,
      itemId: 13,
      price: 2.1,
    },
    {
      id: 91,
      storeId: 3,
      itemId: 14,
      price: 2.7,
    },
    {
      id: 92,
      storeId: 3,
      itemId: 15,
      price: 2.9,
    },
    {
      id: 93,
      storeId: 3,
      itemId: 16,
      price: 0.99,
    },
    {
      id: 94,
      storeId: 3,
      itemId: 17,
      price: 0.98,
    },
    {
      id: 95,
      storeId: 3,
      itemId: 18,
      price: 0.99,
    },
    {
      id: 96,
      storeId: 3,
      itemId: 19,
      price: 1.1,
    },
    {
      id: 97,
      storeId: 3,
      itemId: 20,
      price: 1.3,
    },
    {
      id: 98,
      storeId: 3,
      itemId: 21,
      price: 0.89,
    },
    {
      id: 99,
      storeId: 3,
      itemId: 22,
      price: 1.99,
    },
    {
      id: 100,
      storeId: 3,
      itemId: 23,
      price: 2.3,
    },
    {
      id: 101,
      storeId: 3,
      itemId: 24,
      price: 2.3,
    },
    {
      id: 102,
      storeId: 3,
      itemId: 25,
      price: 1.99,
    },
    {
      id: 103,
      storeId: 3,
      itemId: 26,
      price: 2.49,
    },
    {
      id: 104,
      storeId: 3,
      itemId: 27,
      price: 4.89,
    },
    {
      id: 105,
      storeId: 3,
      itemId: 28,
      price: 3.78,
    },
    {
      id: 106,
      storeId: 3,
      itemId: 29,
      price: 2.34,
    },
    {
      id: 107,
      storeId: 3,
      itemId: 30,
      price: 8.89,
    },
    {
      id: 108,
      storeId: 3,
      itemId: 31,
      price: 1.1,
    },
    {
      id: 109,
      storeId: 3,
      itemId: 32,
      price: 1.89,
    },
    {
      id: 110,
      storeId: 3,
      itemId: 33,
      price: 5.4,
    },
    {
      id: 111,
      storeId: 3,
      itemId: 34,
      price: 6.8,
    },
    {
      id: 112,
      storeId: 3,
      itemId: 35,
      price: 5.3,
    },
    {
      id: 113,
      storeId: 3,
      itemId: 36,
      price: 5.5,
    },
    {
      id: 114,
      storeId: 3,
      itemId: 37,
      price: 1.8,
    },
    {
      id: 115,
      storeId: 3,
      itemId: 38,
      price: 0.9,
    },
    {
      id: 116,
      storeId: 3,
      itemId: 39,
      price: 0.9,
    },
    {
      id: 117,
      storeId: 3,
      itemId: 40,
      price: 2.8,
    },
    {
      id: 118,
      storeId: 3,
      itemId: 41,
      price: 11.99,
    },
    {
      id: 119,
      storeId: 3,
      itemId: 42,
      price: 1.49,
    },
    {
      id: 120,
      storeId: 3,
      itemId: 44,
      price: 0.89,
    },
    {
      id: 121,
      storeId: 3,
      itemId: 45,
      price: 6.99,
    },
    {
      id: 122,
      storeId: 3,
      itemId: 46,
      price: 6.99,
    },
    {
      id: 123,
      storeId: 3,
      itemId: 47,
      price: 2.99,
    },
    {
      id: 124,
      storeId: 3,
      itemId: 48,
      price: 1.1,
    },
    {
      id: 125,
      storeId: 3,
      itemId: 49,
      price: 0.89,
    },
    {
      id: 126,
      storeId: 3,
      itemId: 50,
      price: 6.99,
    },
    {
      id: 127,
      storeId: 3,
      itemId: 51,
      price: 1.89,
    },
    {
      id: 128,
      storeId: 3,
      itemId: 52,
      price: 4.95,
    },
    {
      id: 129,
      storeId: 3,
      itemId: 53,
      price: 3.89,
    },
    {
      id: 130,
      storeId: 3,
      itemId: 54,
      price: 0.79,
    },
    {
      id: 131,
      storeId: 3,
      itemId: 55,
      price: 2.99,
    },
    {
      id: 132,
      storeId: 3,
      itemId: 56,
      price: 7.95,
    },
    {
      id: 133,
      storeId: 3,
      itemId: 57,
      price: 1.89,
    },
    {
      id: 134,
      storeId: 4,
      itemId: 1,
      price: 3.99,
    },
    {
      id: 135,
      storeId: 4,
      itemId: 2,
      price: 3.3,
    },
    {
      id: 136,
      storeId: 4,
      itemId: 3,
      price: 4.98,
    },
    {
      id: 137,
      storeId: 4,
      itemId: 4,
      price: 4.89,
    },
    {
      id: 138,
      storeId: 4,
      itemId: 5,
      price: 3.1,
    },
    {
      id: 139,
      storeId: 4,
      itemId: 6,
      price: 3.1,
    },
    {
      id: 140,
      storeId: 4,
      itemId: 7,
      price: 3.1,
    },
    {
      id: 141,
      storeId: 4,
      itemId: 8,
      price: 3.99,
    },
    {
      id: 142,
      storeId: 4,
      itemId: 9,
      price: 1.99,
    },
    {
      id: 143,
      storeId: 4,
      itemId: 10,
      price: 4.89,
    },
    {
      id: 144,
      storeId: 4,
      itemId: 11,
      price: 4.99,
    },
    {
      id: 145,
      storeId: 4,
      itemId: 12,
      price: 5.89,
    },
    {
      id: 146,
      storeId: 4,
      itemId: 13,
      price: 4.99,
    },
    {
      id: 147,
      storeId: 4,
      itemId: 14,
      price: 5.98,
    },
    {
      id: 148,
      storeId: 4,
      itemId: 15,
      price: 5.69,
    },
    {
      id: 149,
      storeId: 4,
      itemId: 16,
      price: 2.98,
    },
    {
      id: 150,
      storeId: 4,
      itemId: 17,
      price: 2.8,
    },
    {
      id: 151,
      storeId: 4,
      itemId: 18,
      price: 2.99,
    },
    {
      id: 152,
      storeId: 4,
      itemId: 19,
      price: 5.78,
    },
    {
      id: 153,
      storeId: 4,
      itemId: 20,
      price: 6.1,
    },
    {
      id: 154,
      storeId: 4,
      itemId: 21,
      price: 3.1,
    },
    {
      id: 155,
      storeId: 4,
      itemId: 22,
      price: 4.78,
    },
    {
      id: 156,
      storeId: 4,
      itemId: 23,
      price: 4.9,
    },
    {
      id: 157,
      storeId: 4,
      itemId: 24,
      price: 4.78,
    },
    {
      id: 158,
      storeId: 4,
      itemId: 25,
      price: 3.8,
    },
    {
      id: 159,
      storeId: 4,
      itemId: 26,
      price: 4.89,
    },
    {
      id: 160,
      storeId: 4,
      itemId: 27,
      price: 8.99,
    },
    {
      id: 161,
      storeId: 4,
      itemId: 28,
      price: 7.89,
    },
    {
      id: 162,
      storeId: 4,
      itemId: 29,
      price: 5.69,
    },
    {
      id: 163,
      storeId: 4,
      itemId: 34,
      price: 9.99,
    },
    {
      id: 164,
      storeId: 4,
      itemId: 35,
      price: 7.99,
    },
    {
      id: 165,
      storeId: 4,
      itemId: 36,
      price: 7.99,
    },
    {
      id: 166,
      storeId: 4,
      itemId: 41,
      price: 14.99,
    },
    {
      id: 167,
      storeId: 4,
      itemId: 52,
      price: 15.99,
    },
    {
      id: 168,
      storeId: 4,
      itemId: 54,
      price: 3.99,
    },
  ],
  lists: [],
  listItems: [],
  selectedStoreId: 0,
};

export const getStores = () => {
  return database.stores.map((store) => ({ ...store }));
};

export const getCategories = () => {
  return database.categories.map((category) => ({ ...category }));
};

export const getItems = () => {
  return database.items.map((item) => ({ ...item }));
};

export const getStoreItems = () => {
  return database.storeItems.map((item) => ({ ...item }));
};

export const getLists = () => {
  return database.lists.map((list) => ({ ...list }));
};

export const getSelectedStoreId = () => {
  return database.selectedStoreId;
};

export const setList = () => {
  let newList = {
    id: database.lists.length + 1,
    storeId: getSelectedStoreId(),
    created: new Date().toString().slice(0, 15),
  };
  for (let item of database.listItems) {
    if (item.listId === database.lists.length + 1) {
      database.lists.push(newList);
      setSelectedStoreId(0);
      console.log(database.lists);
      break;
    }
  }
};

export const setListItem = (id) => {
  let newObj = {
    id: database.listItems.length + 1,
    itemId: id,
    listId: database.lists.length + 1,
  };
  database.listItems.push(newObj);
  console.log(database.listItems);
};

export const unsetListItem = (id) => {
  for (let item of database.listItems) {
    if (item.itemId === id && item.listId === database.lists.length + 1) {
      let index = database.listItems.indexOf(item);
      if (index > -1) {
        database.listItems.splice(index, 1);
      }
    }
  }
  console.log(database.listItems);
};

export const resetListItems = () => {
  for (let i = 0; i < database.listItems.length; i++) {
    let item = database.listItems[i];
    if (item.listId === database.lists.length + 1) {
      let index = database.listItems.indexOf(item);
      if (index > -1) {
        database.listItems.splice(index, 1);
        console.log("removed item!");
        i--;
      }
    }
  }
};

export const setSelectedStoreId = (id) => {
  database.selectedStoreId = id;
  document.dispatchEvent(new CustomEvent("stateChanged"));
};
