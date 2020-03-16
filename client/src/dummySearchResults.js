import React from "react";

const dummySearchResults = [
  {
      "id": 591479,
      "title": "Cheese Popovers",
      "image": "https://spoonacular.com/recipeImages/591479-312x231.jpg",
      "imageType": "jpg",
      "usedIngredientCount": 2,
      "missedIngredientCount": 1,
      "missedIngredients": [
          {
              "id": 1023,
              "amount": 145.0,
              "unit": "grams",
              "unitLong": "grams",
              "unitShort": "g",
              "aisle": "Cheese",
              "name": "gruyere cheese",
              "original": "5 ounces (145 grams) cheese such as gruyere, swiss, or parmesan, grated",
              "originalString": "5 ounces (145 grams) cheese such as gruyere, swiss, or parmesan, grated",
              "originalName": "ounces cheese such as gruyere, swiss, or parmesan, grated",
              "metaInformation": [
                  "grated"
              ],
              "meta": [
                  "grated"
              ],
              "image": "https://spoonacular.com/cdn/ingredients_100x100/gruyere.jpg"
          }
      ],
      "usedIngredients": [
          {
              "id": 1123,
              "amount": 4.0,
              "unit": "large",
              "unitLong": "larges",
              "unitShort": "large",
              "aisle": "Milk, Eggs, Other Dairy",
              "name": "eggs",
              "original": "4 large eggs",
              "originalString": "4 large eggs",
              "originalName": "eggs",
              "metaInformation": [],
              "meta": [],
              "image": "https://spoonacular.com/cdn/ingredients_100x100/egg.png"
          },
          {
              "id": 1077,
              "amount": 2.0,
              "unit": "cups",
              "unitLong": "cups",
              "unitShort": "cup",
              "aisle": "Milk, Eggs, Other Dairy",
              "name": "whole milk",
              "original": "2 cups (16 fluid ounces, 1 pint) whole milk",
              "originalString": "2 cups (16 fluid ounces, 1 pint) whole milk",
              "originalName": "(16 fluid ounces, 1 pint) whole milk",
              "metaInformation": [
                  "whole",
                  "(16 fluid-ounces, 1 pint)"
              ],
              "meta": [
                  "whole",
                  "(16 fluid-ounces, 1 pint)"
              ],
              "image": "https://spoonacular.com/cdn/ingredients_100x100/milk.png"
          }
      ],
      "unusedIngredients": [
          {
              "id": 1041009,
              "amount": 1.0,
              "unit": "serving",
              "unitLong": "serving",
              "unitShort": "serving",
              "aisle": "Cheese",
              "name": "cheese",
              "original": "cheese",
              "originalString": "cheese",
              "originalName": "cheese",
              "metaInformation": [],
              "meta": [],
              "image": "https://spoonacular.com/cdn/ingredients_100x100/cheddar-cheese.png"
          },
          {
              "id": 23572,
              "amount": 1.0,
              "unit": "serving",
              "unitLong": "serving",
              "unitShort": "serving",
              "aisle": "Frozen;Meat",
              "name": "beef",
              "original": "beef",
              "originalString": "beef",
              "originalName": "beef",
              "metaInformation": [],
              "meta": [],
              "image": "https://spoonacular.com/cdn/ingredients_100x100/beef-cubes-raw.png"
          }
      ],
      "likes": 1397
  },
  {
      "id": 65417,
      "title": "Parmesan Cheese Muffins",
      "image": "https://spoonacular.com/recipeImages/65417-312x231.jpg",
      "imageType": "jpg",
      "usedIngredientCount": 2,
      "missedIngredientCount": 1,
      "missedIngredients": [
          {
              "id": 1033,
              "amount": 0.75,
              "unit": "cup",
              "unitLong": "cups",
              "unitShort": "cup",
              "aisle": "Cheese",
              "name": "parmesan cheese",
              "original": "3/4 cup shredded Parmesan cheese",
              "originalString": "3/4 cup shredded Parmesan cheese",
              "originalName": "shredded Parmesan cheese",
              "metaInformation": [
                  "shredded"
              ],
              "meta": [
                  "shredded"
              ],
              "extendedName": "shredded parmesan cheese",
              "image": "https://spoonacular.com/cdn/ingredients_100x100/parmesan.jpg"
          }
      ],
      "usedIngredients": [
          {
              "id": 1123,
              "amount": 2.0,
              "unit": "large",
              "unitLong": "larges",
              "unitShort": "large",
              "aisle": "Milk, Eggs, Other Dairy",
              "name": "eggs",
              "original": "2 large eggs",
              "originalString": "2 large eggs",
              "originalName": "eggs",
              "metaInformation": [],
              "meta": [],
              "image": "https://spoonacular.com/cdn/ingredients_100x100/egg.png"
          },
          {
              "id": 1077,
              "amount": 1.0,
              "unit": "cup",
              "unitLong": "cup",
              "unitShort": "cup",
              "aisle": "Milk, Eggs, Other Dairy",
              "name": "milk",
              "original": "1 cup milk",
              "originalString": "1 cup milk",
              "originalName": "milk",
              "metaInformation": [],
              "meta": [],
              "image": "https://spoonacular.com/cdn/ingredients_100x100/milk.png"
          }
      ],
      "unusedIngredients": [
          {
              "id": 1041009,
              "amount": 1.0,
              "unit": "serving",
              "unitLong": "serving",
              "unitShort": "serving",
              "aisle": "Cheese",
              "name": "cheese",
              "original": "cheese",
              "originalString": "cheese",
              "originalName": "cheese",
              "metaInformation": [],
              "meta": [],
              "image": "https://spoonacular.com/cdn/ingredients_100x100/cheddar-cheese.png"
          },
          {
              "id": 23572,
              "amount": 1.0,
              "unit": "serving",
              "unitLong": "serving",
              "unitShort": "serving",
              "aisle": "Frozen;Meat",
              "name": "beef",
              "original": "beef",
              "originalString": "beef",
              "originalName": "beef",
              "metaInformation": [],
              "meta": [],
              "image": "https://spoonacular.com/cdn/ingredients_100x100/beef-cubes-raw.png"
          }
      ],
      "likes": 0
  },
  {
      "id": 563184,
      "title": "Goat Cheese, Black Pepper, and Honey Popovers",
      "image": "https://spoonacular.com/recipeImages/563184-312x231.jpg",
      "imageType": "jpg",
      "usedIngredientCount": 2,
      "missedIngredientCount": 2,
      "missedIngredients": [
          {
              "id": 1159,
              "amount": 4.0,
              "unit": "oz",
              "unitLong": "ounces",
              "unitShort": "oz",
              "aisle": "Cheese",
              "name": "goat cheese",
              "original": "4 oz goat cheese, room temperature",
              "originalString": "4 oz goat cheese, room temperature",
              "originalName": "goat cheese, room temperature",
              "metaInformation": [
                  "room temperature"
              ],
              "meta": [
                  "room temperature"
              ],
              "image": "https://spoonacular.com/cdn/ingredients_100x100/goat-cheese.jpg"
          },
          {
              "id": 19296,
              "amount": 2.0,
              "unit": "tbsp",
              "unitLong": "tablespoons",
              "unitShort": "Tbsp",
              "aisle": "Nut butters, Jams, and Honey;Health Foods",
              "name": "honey",
              "original": "2 tbsp honey",
              "originalString": "2 tbsp honey",
              "originalName": "honey",
              "metaInformation": [],
              "meta": [],
              "image": "https://spoonacular.com/cdn/ingredients_100x100/honey.png"
          }
      ],
      "usedIngredients": [
          {
              "id": 1123,
              "amount": 3.0,
              "unit": "large",
              "unitLong": "larges",
              "unitShort": "large",
              "aisle": "Milk, Eggs, Other Dairy",
              "name": "eggs",
              "original": "3 large eggs, room temperature",
              "originalString": "3 large eggs, room temperature",
              "originalName": "eggs, room temperature",
              "metaInformation": [
                  "room temperature"
              ],
              "meta": [
                  "room temperature"
              ],
              "image": "https://spoonacular.com/cdn/ingredients_100x100/egg.png"
          },
          {
              "id": 1077,
              "amount": 1.5,
              "unit": "cups",
              "unitLong": "cups",
              "unitShort": "cup",
              "aisle": "Milk, Eggs, Other Dairy",
              "name": "milk",
              "original": "1 1/2 cups 2% milk, room temperature",
              "originalString": "1 1/2 cups 2% milk, room temperature",
              "originalName": "2% milk, room temperature",
              "metaInformation": [
                  "2%",
                  "room temperature"
              ],
              "meta": [
                  "2%",
                  "room temperature"
              ],
              "image": "https://spoonacular.com/cdn/ingredients_100x100/milk.png"
          }
      ],
      "unusedIngredients": [
          {
              "id": 1041009,
              "amount": 1.0,
              "unit": "serving",
              "unitLong": "serving",
              "unitShort": "serving",
              "aisle": "Cheese",
              "name": "cheese",
              "original": "cheese",
              "originalString": "cheese",
              "originalName": "cheese",
              "metaInformation": [],
              "meta": [],
              "image": "https://spoonacular.com/cdn/ingredients_100x100/cheddar-cheese.png"
          },
          {
              "id": 23572,
              "amount": 1.0,
              "unit": "serving",
              "unitLong": "serving",
              "unitShort": "serving",
              "aisle": "Frozen;Meat",
              "name": "beef",
              "original": "beef",
              "originalString": "beef",
              "originalName": "beef",
              "metaInformation": [],
              "meta": [],
              "image": "https://spoonacular.com/cdn/ingredients_100x100/beef-cubes-raw.png"
          }
      ],
      "likes": 6203
  },
  {
      "id": 61893,
      "title": "Butterscotch Cheesecake With Chocolate Drizzle",
      "image": "https://spoonacular.com/recipeImages/61893-312x231.jpg",
      "imageType": "jpg",
      "usedIngredientCount": 2,
      "missedIngredientCount": 2,
      "missedIngredients": [
          {
              "id": 19070,
              "amount": 1.0,
              "unit": "cups",
              "unitLong": "cup",
              "unitShort": "cup",
              "aisle": "Baking",
              "name": "butterscotch chips",
              "original": "1-3/4 cups (11-oz. pkg.) HERSHEY'S Butterscotch Chips",
              "originalString": "1-3/4 cups (11-oz. pkg.) HERSHEY'S Butterscotch Chips",
              "originalName": "(11-oz. pkg.) HERSHEY'S Butterscotch Chips",
              "metaInformation": [
                  "(11-oz. pkg.)"
              ],
              "meta": [
                  "(11-oz. pkg.)"
              ],
              "image": "https://spoonacular.com/cdn/ingredients_100x100/peanut-butter-or-butterscotch-chips.jpg"
          },
          {
              "id": 1017,
              "amount": 24.0,
              "unit": "oz",
              "unitLong": "ounces",
              "unitShort": "oz",
              "aisle": "Cheese",
              "name": "cream cheese",
              "original": "3 packages (8 oz. each) cream cheese, softened",
              "originalString": "3 packages (8 oz. each) cream cheese, softened",
              "originalName": "packages each) cream cheese, softened",
              "metaInformation": [
                  "softened"
              ],
              "meta": [
                  "softened"
              ],
              "image": "https://spoonacular.com/cdn/ingredients_100x100/cream-cheese.jpg"
          }
      ],
      "usedIngredients": [
          {
              "id": 1123,
              "amount": 4.0,
              "unit": "",
              "unitLong": "",
              "unitShort": "",
              "aisle": "Milk, Eggs, Other Dairy",
              "name": "eggs",
              "original": "4 eggs",
              "originalString": "4 eggs",
              "originalName": "eggs",
              "metaInformation": [],
              "meta": [],
              "image": "https://spoonacular.com/cdn/ingredients_100x100/egg.png"
          },
          {
              "id": 1077,
              "amount": 2.0,
              "unit": "Tbsps",
              "unitLong": "Tbsps",
              "unitShort": "Tbsp",
              "aisle": "Milk, Eggs, Other Dairy",
              "name": "milk",
              "original": "2 Tbsps milk",
              "originalString": "2 Tbsps milk",
              "originalName": "milk",
              "metaInformation": [],
              "meta": [],
              "image": "https://spoonacular.com/cdn/ingredients_100x100/milk.png"
          }
      ],
      "unusedIngredients": [
          {
              "id": 1041009,
              "amount": 1.0,
              "unit": "serving",
              "unitLong": "serving",
              "unitShort": "serving",
              "aisle": "Cheese",
              "name": "cheese",
              "original": "cheese",
              "originalString": "cheese",
              "originalName": "cheese",
              "metaInformation": [],
              "meta": [],
              "image": "https://spoonacular.com/cdn/ingredients_100x100/cheddar-cheese.png"
          },
          {
              "id": 23572,
              "amount": 1.0,
              "unit": "serving",
              "unitLong": "serving",
              "unitShort": "serving",
              "aisle": "Frozen;Meat",
              "name": "beef",
              "original": "beef",
              "originalString": "beef",
              "originalName": "beef",
              "metaInformation": [],
              "meta": [],
              "image": "https://spoonacular.com/cdn/ingredients_100x100/beef-cubes-raw.png"
          }
      ],
      "likes": 16
  },
  {
      "id": 51111,
      "title": "Grandma’s Cottage Cheese Pancakes With Blood Orange Syrup",
      "image": "https://spoonacular.com/recipeImages/51111-312x231.jpg",
      "imageType": "jpg",
      "usedIngredientCount": 2,
      "missedIngredientCount": 2,
      "missedIngredients": [
          {
              "id": 1012,
              "amount": 1.0,
              "unit": "cup",
              "unitLong": "cup",
              "unitShort": "cup",
              "aisle": "Cheese",
              "name": "cottage cheese",
              "original": "1 cup cottage cheese",
              "originalString": "1 cup cottage cheese",
              "originalName": "cottage cheese",
              "metaInformation": [],
              "meta": [],
              "image": "https://spoonacular.com/cdn/ingredients_100x100/cottage-cheese.jpg"
          },
          {
              "id": 2050,
              "amount": 0.5,
              "unit": "tsp",
              "unitLong": "teaspoons",
              "unitShort": "tsp",
              "aisle": "Baking",
              "name": "vanilla extract",
              "original": "½ tsp vanilla extract",
              "originalString": "½ tsp vanilla extract",
              "originalName": "vanilla extract",
              "metaInformation": [],
              "meta": [],
              "image": "https://spoonacular.com/cdn/ingredients_100x100/vanilla.jpg"
          }
      ],
      "usedIngredients": [
          {
              "id": 1123,
              "amount": 6.0,
              "unit": "",
              "unitLong": "",
              "unitShort": "",
              "aisle": "Milk, Eggs, Other Dairy",
              "name": "eggs",
              "original": "6 eggs",
              "originalString": "6 eggs",
              "originalName": "eggs",
              "metaInformation": [],
              "meta": [],
              "image": "https://spoonacular.com/cdn/ingredients_100x100/egg.png"
          },
          {
              "id": 1077,
              "amount": 0.25,
              "unit": "cup",
              "unitLong": "cups",
              "unitShort": "cup",
              "aisle": "Milk, Eggs, Other Dairy",
              "name": "milk",
              "original": "¼ cup milk",
              "originalString": "¼ cup milk",
              "originalName": "milk",
              "metaInformation": [],
              "meta": [],
              "image": "https://spoonacular.com/cdn/ingredients_100x100/milk.png"
          }
      ],
      "unusedIngredients": [
          {
              "id": 1041009,
              "amount": 1.0,
              "unit": "serving",
              "unitLong": "serving",
              "unitShort": "serving",
              "aisle": "Cheese",
              "name": "cheese",
              "original": "cheese",
              "originalString": "cheese",
              "originalName": "cheese",
              "metaInformation": [],
              "meta": [],
              "image": "https://spoonacular.com/cdn/ingredients_100x100/cheddar-cheese.png"
          },
          {
              "id": 23572,
              "amount": 1.0,
              "unit": "serving",
              "unitLong": "serving",
              "unitShort": "serving",
              "aisle": "Frozen;Meat",
              "name": "beef",
              "original": "beef",
              "originalString": "beef",
              "originalName": "beef",
              "metaInformation": [],
              "meta": [],
              "image": "https://spoonacular.com/cdn/ingredients_100x100/beef-cubes-raw.png"
          }
      ],
      "likes": 9
  },
  {
      "id": 1105306,
      "title": "Parmesan Puffs",
      "image": "https://spoonacular.com/recipeImages/1105306-312x231.jpg",
      "imageType": "jpg",
      "usedIngredientCount": 2,
      "missedIngredientCount": 2,
      "missedIngredients": [
          {
              "id": 1145,
              "amount": 0.25,
              "unit": "cup",
              "unitLong": "cups",
              "unitShort": "cup",
              "aisle": "Milk, Eggs, Other Dairy",
              "name": "unsalted butter",
              "original": "1/4 cup unsalted butter",
              "originalString": "1/4 cup unsalted butter",
              "originalName": "unsalted butter",
              "metaInformation": [
                  "unsalted"
              ],
              "meta": [
                  "unsalted"
              ],
              "image": "https://spoonacular.com/cdn/ingredients_100x100/butter-sliced.jpg"
          },
          {
              "id": 1033,
              "amount": 1.0,
              "unit": "cup",
              "unitLong": "cup",
              "unitShort": "cup",
              "aisle": "Cheese",
              "name": "parmesan",
              "original": "1 cup fresh grated parmesan",
              "originalString": "1 cup fresh grated parmesan",
              "originalName": "fresh grated parmesan",
              "metaInformation": [
                  "fresh",
                  "grated"
              ],
              "meta": [
                  "fresh",
                  "grated"
              ],
              "extendedName": "fresh parmesan",
              "image": "https://spoonacular.com/cdn/ingredients_100x100/parmesan.jpg"
          }
      ],
      "usedIngredients": [
          {
              "id": 1077,
              "amount": 0.25,
              "unit": "cup",
              "unitLong": "cups",
              "unitShort": "cup",
              "aisle": "Milk, Eggs, Other Dairy",
              "name": "milk",
              "original": "1/4 cup milk",
              "originalString": "1/4 cup milk",
              "originalName": "milk",
              "metaInformation": [],
              "meta": [],
              "image": "https://spoonacular.com/cdn/ingredients_100x100/milk.png"
          },
          {
              "id": 1123,
              "amount": 2.0,
              "unit": "large",
              "unitLong": "larges",
              "unitShort": "large",
              "aisle": "Milk, Eggs, Other Dairy",
              "name": "eggs",
              "original": "2 large eggs",
              "originalString": "2 large eggs",
              "originalName": "eggs",
              "metaInformation": [],
              "meta": [],
              "image": "https://spoonacular.com/cdn/ingredients_100x100/egg.png"
          }
      ],
      "unusedIngredients": [
          {
              "id": 1041009,
              "amount": 1.0,
              "unit": "serving",
              "unitLong": "serving",
              "unitShort": "serving",
              "aisle": "Cheese",
              "name": "cheese",
              "original": "cheese",
              "originalString": "cheese",
              "originalName": "cheese",
              "metaInformation": [],
              "meta": [],
              "image": "https://spoonacular.com/cdn/ingredients_100x100/cheddar-cheese.png"
          },
          {
              "id": 23572,
              "amount": 1.0,
              "unit": "serving",
              "unitLong": "serving",
              "unitShort": "serving",
              "aisle": "Frozen;Meat",
              "name": "beef",
              "original": "beef",
              "originalString": "beef",
              "originalName": "beef",
              "metaInformation": [],
              "meta": [],
              "image": "https://spoonacular.com/cdn/ingredients_100x100/beef-cubes-raw.png"
          }
      ],
      "likes": 1
  },
  {
      "id": 364120,
      "title": "Blue Cheese Yorkshire Puddings",
      "image": "https://spoonacular.com/recipeImages/364120-312x231.jpg",
      "imageType": "jpg",
      "usedIngredientCount": 2,
      "missedIngredientCount": 2,
      "missedIngredients": [
          {
              "id": 13833,
              "amount": 0.25,
              "unit": "cup",
              "unitLong": "cups",
              "unitShort": "cup",
              "aisle": "Meat",
              "name": "prime rib",
              "original": "1/4 cup pan drippings from Prime Rib with Horseradish Cream",
              "originalString": "1/4 cup pan drippings from Prime Rib with Horseradish Cream",
              "originalName": "pan drippings from Prime Rib with Horseradish Cream",
              "metaInformation": [
                  "with horseradish cream"
              ],
              "meta": [
                  "with horseradish cream"
              ],
              "image": "https://spoonacular.com/cdn/ingredients_100x100/prime-rib.png"
          },
          {
              "id": 1021004,
              "amount": 4.0,
              "unit": "ounces",
              "unitLong": "ounces",
              "unitShort": "oz",
              "aisle": "Cheese",
              "name": "stilton cheese",
              "original": "4 ounces Stilton cheese, crumbled",
              "originalString": "4 ounces Stilton cheese, crumbled",
              "originalName": "Stilton cheese, crumbled",
              "metaInformation": [
                  "crumbled"
              ],
              "meta": [
                  "crumbled"
              ],
              "image": "https://spoonacular.com/cdn/ingredients_100x100/blue-cheese.png"
          }
      ],
      "usedIngredients": [
          {
              "id": 1123,
              "amount": 5.0,
              "unit": "large",
              "unitLong": "larges",
              "unitShort": "large",
              "aisle": "Milk, Eggs, Other Dairy",
              "name": "eggs",
              "original": "5 large eggs, lightly beaten",
              "originalString": "5 large eggs, lightly beaten",
              "originalName": "eggs, lightly beaten",
              "metaInformation": [
                  "lightly beaten"
              ],
              "meta": [
                  "lightly beaten"
              ],
              "image": "https://spoonacular.com/cdn/ingredients_100x100/egg.png"
          },
          {
              "id": 1077,
              "amount": 2.0,
              "unit": "cups",
              "unitLong": "cups",
              "unitShort": "cup",
              "aisle": "Milk, Eggs, Other Dairy",
              "name": "milk",
              "original": "2 cups milk",
              "originalString": "2 cups milk",
              "originalName": "milk",
              "metaInformation": [],
              "meta": [],
              "image": "https://spoonacular.com/cdn/ingredients_100x100/milk.png"
          }
      ],
      "unusedIngredients": [
          {
              "id": 1041009,
              "amount": 1.0,
              "unit": "serving",
              "unitLong": "serving",
              "unitShort": "serving",
              "aisle": "Cheese",
              "name": "cheese",
              "original": "cheese",
              "originalString": "cheese",
              "originalName": "cheese",
              "metaInformation": [],
              "meta": [],
              "image": "https://spoonacular.com/cdn/ingredients_100x100/cheddar-cheese.png"
          },
          {
              "id": 23572,
              "amount": 1.0,
              "unit": "serving",
              "unitLong": "serving",
              "unitShort": "serving",
              "aisle": "Frozen;Meat",
              "name": "beef",
              "original": "beef",
              "originalString": "beef",
              "originalName": "beef",
              "metaInformation": [],
              "meta": [],
              "image": "https://spoonacular.com/cdn/ingredients_100x100/beef-cubes-raw.png"
          }
      ],
      "likes": 0
  },
  {
      "id": 543391,
      "title": "Cheesy Popovers",
      "image": "https://spoonacular.com/recipeImages/543391-312x231.jpg",
      "imageType": "jpg",
      "usedIngredientCount": 2,
      "missedIngredientCount": 2,
      "missedIngredients": [
          {
              "id": 1033,
              "amount": 0.5,
              "unit": "cup",
              "unitLong": "cups",
              "unitShort": "cup",
              "aisle": "Cheese",
              "name": "parmesan cheese",
              "original": "1/2 cup parmesan cheese, grated",
              "originalString": "1/2 cup parmesan cheese, grated",
              "originalName": "parmesan cheese, grated",
              "metaInformation": [
                  "grated"
              ],
              "meta": [
                  "grated"
              ],
              "image": "https://spoonacular.com/cdn/ingredients_100x100/parmesan.jpg"
          },
          {
              "id": 1145,
              "amount": 2.0,
              "unit": "tablespoons",
              "unitLong": "tablespoons",
              "unitShort": "Tbsp",
              "aisle": "Milk, Eggs, Other Dairy",
              "name": "unsalted butter",
              "original": "2 tablespoons unsalted butter, melted",
              "originalString": "2 tablespoons unsalted butter, melted",
              "originalName": "unsalted butter, melted",
              "metaInformation": [
                  "unsalted",
                  "melted"
              ],
              "meta": [
                  "unsalted",
                  "melted"
              ],
              "image": "https://spoonacular.com/cdn/ingredients_100x100/butter-sliced.jpg"
          }
      ],
      "usedIngredients": [
          {
              "id": 1123,
              "amount": 3.0,
              "unit": "large",
              "unitLong": "larges",
              "unitShort": "large",
              "aisle": "Milk, Eggs, Other Dairy",
              "name": "eggs",
              "original": "3 large eggs",
              "originalString": "3 large eggs",
              "originalName": "eggs",
              "metaInformation": [],
              "meta": [],
              "image": "https://spoonacular.com/cdn/ingredients_100x100/egg.png"
          },
          {
              "id": 1077,
              "amount": 2.0,
              "unit": "cups",
              "unitLong": "cups",
              "unitShort": "cup",
              "aisle": "Milk, Eggs, Other Dairy",
              "name": "milk",
              "original": "2 cups milk",
              "originalString": "2 cups milk",
              "originalName": "milk",
              "metaInformation": [],
              "meta": [],
              "image": "https://spoonacular.com/cdn/ingredients_100x100/milk.png"
          }
      ],
      "unusedIngredients": [
          {
              "id": 1041009,
              "amount": 1.0,
              "unit": "serving",
              "unitLong": "serving",
              "unitShort": "serving",
              "aisle": "Cheese",
              "name": "cheese",
              "original": "cheese",
              "originalString": "cheese",
              "originalName": "cheese",
              "metaInformation": [],
              "meta": [],
              "image": "https://spoonacular.com/cdn/ingredients_100x100/cheddar-cheese.png"
          },
          {
              "id": 23572,
              "amount": 1.0,
              "unit": "serving",
              "unitLong": "serving",
              "unitShort": "serving",
              "aisle": "Frozen;Meat",
              "name": "beef",
              "original": "beef",
              "originalString": "beef",
              "originalName": "beef",
              "metaInformation": [],
              "meta": [],
              "image": "https://spoonacular.com/cdn/ingredients_100x100/beef-cubes-raw.png"
          }
      ],
      "likes": 0
  },
  {
      "id": 65518,
      "title": "Peppered Cheddar Muffins",
      "image": "https://spoonacular.com/recipeImages/65518-312x231.jpg",
      "imageType": "jpg",
      "usedIngredientCount": 2,
      "missedIngredientCount": 2,
      "missedIngredients": [
          {
              "id": 18371,
              "amount": 1.0,
              "unit": "tablespoon",
              "unitLong": "tablespoon",
              "unitShort": "Tbsp",
              "aisle": "Baking",
              "name": "baking powder",
              "original": "1 tablespoon baking powder",
              "originalString": "1 tablespoon baking powder",
              "originalName": "baking powder",
              "metaInformation": [],
              "meta": [],
              "image": "https://spoonacular.com/cdn/ingredients_100x100/white-powder.jpg"
          },
          {
              "id": 1031009,
              "amount": 4.0,
              "unit": "ounces",
              "unitLong": "ounces",
              "unitShort": "oz",
              "aisle": "Cheese",
              "name": "sharp cheddar cheese",
              "original": "1 cup (4 ounces) shredded sharp Cheddar cheese",
              "originalString": "1 cup (4 ounces) shredded sharp Cheddar cheese",
              "originalName": "cup shredded sharp Cheddar cheese",
              "metaInformation": [
                  "shredded"
              ],
              "meta": [
                  "shredded"
              ],
              "extendedName": "shredded sharp cheddar cheese",
              "image": "https://spoonacular.com/cdn/ingredients_100x100/cheddar-cheese.png"
          }
      ],
      "usedIngredients": [
          {
              "id": 1123,
              "amount": 1.0,
              "unit": "large",
              "unitLong": "large",
              "unitShort": "large",
              "aisle": "Milk, Eggs, Other Dairy",
              "name": "egg",
              "original": "1 large egg",
              "originalString": "1 large egg",
              "originalName": "egg",
              "metaInformation": [],
              "meta": [],
              "image": "https://spoonacular.com/cdn/ingredients_100x100/egg.png"
          },
          {
              "id": 1077,
              "amount": 1.25,
              "unit": "cups",
              "unitLong": "cups",
              "unitShort": "cup",
              "aisle": "Milk, Eggs, Other Dairy",
              "name": "milk",
              "original": "1 1/4 cups milk",
              "originalString": "1 1/4 cups milk",
              "originalName": "milk",
              "metaInformation": [],
              "meta": [],
              "image": "https://spoonacular.com/cdn/ingredients_100x100/milk.png"
          }
      ],
      "unusedIngredients": [
          {
              "id": 1041009,
              "amount": 1.0,
              "unit": "serving",
              "unitLong": "serving",
              "unitShort": "serving",
              "aisle": "Cheese",
              "name": "cheese",
              "original": "cheese",
              "originalString": "cheese",
              "originalName": "cheese",
              "metaInformation": [],
              "meta": [],
              "image": "https://spoonacular.com/cdn/ingredients_100x100/cheddar-cheese.png"
          },
          {
              "id": 23572,
              "amount": 1.0,
              "unit": "serving",
              "unitLong": "serving",
              "unitShort": "serving",
              "aisle": "Frozen;Meat",
              "name": "beef",
              "original": "beef",
              "originalString": "beef",
              "originalName": "beef",
              "metaInformation": [],
              "meta": [],
              "image": "https://spoonacular.com/cdn/ingredients_100x100/beef-cubes-raw.png"
          }
      ],
      "likes": 0
  },
  {
      "id": 81669,
      "title": "Paneed Round Steak With Everyday Marinara & Angel Hair",
      "image": "https://spoonacular.com/recipeImages/81669-312x231.jpg",
      "imageType": "jpg",
      "usedIngredientCount": 2,
      "missedIngredientCount": 3,
      "missedIngredients": [
          {
              "id": 18079,
              "amount": 2.0,
              "unit": "cups",
              "unitLong": "cups",
              "unitShort": "cup",
              "aisle": "Pasta and Rice",
              "name": "breadcrumbs",
              "original": "2 cups Italian breadcrumbs or Italian panko",
              "originalString": "2 cups Italian breadcrumbs or Italian panko",
              "originalName": "Italian breadcrumbs or Italian panko",
              "metaInformation": [
                  "italian"
              ],
              "meta": [
                  "italian"
              ],
              "extendedName": "italian breadcrumbs",
              "image": "https://spoonacular.com/cdn/ingredients_100x100/breadcrumbs.jpg"
          },
          {
              "id": 1033,
              "amount": 0.5,
              "unit": "cup",
              "unitLong": "cups",
              "unitShort": "cup",
              "aisle": "Cheese",
              "name": "parmesan cheese",
              "original": "1/2 cup Parmesan cheese, finely grated",
              "originalString": "1/2 cup Parmesan cheese, finely grated",
              "originalName": "Parmesan cheese, finely grated",
              "metaInformation": [
                  "finely grated"
              ],
              "meta": [
                  "finely grated"
              ],
              "image": "https://spoonacular.com/cdn/ingredients_100x100/parmesan.jpg"
          },
          {
              "id": 23617,
              "amount": 1.5,
              "unit": "lbs",
              "unitLong": "pounds",
              "unitShort": "lb",
              "aisle": "Meat",
              "name": "round steak",
              "original": "1 1/2 lbs round steak, cut into serving sizes and tenderized (I use this or you could also use cube steak)",
              "originalString": "1 1/2 lbs round steak, cut into serving sizes and tenderized (I use this or you could also use cube steak)",
              "originalName": "round steak, cut into serving sizes and tenderized (I use this or you could also use cube steak)",
              "metaInformation": [
                  "cut into serving sizes and tenderized (i use this or you could also use cube steak)"
              ],
              "meta": [
                  "cut into serving sizes and tenderized (i use this or you could also use cube steak)"
              ],
              "image": "https://spoonacular.com/cdn/ingredients_100x100/round-steak.jpg"
          }
      ],
      "usedIngredients": [
          {
              "id": 1123,
              "amount": 3.0,
              "unit": "",
              "unitLong": "",
              "unitShort": "",
              "aisle": "Milk, Eggs, Other Dairy",
              "name": "eggs",
              "original": "3 eggs",
              "originalString": "3 eggs",
              "originalName": "eggs",
              "metaInformation": [],
              "meta": [],
              "image": "https://spoonacular.com/cdn/ingredients_100x100/egg.png"
          },
          {
              "id": 1077,
              "amount": 1.0,
              "unit": "cup",
              "unitLong": "cup",
              "unitShort": "cup",
              "aisle": "Milk, Eggs, Other Dairy",
              "name": "milk",
              "original": "1 cup milk",
              "originalString": "1 cup milk",
              "originalName": "milk",
              "metaInformation": [],
              "meta": [],
              "image": "https://spoonacular.com/cdn/ingredients_100x100/milk.png"
          }
      ],
      "unusedIngredients": [
          {
              "id": 1041009,
              "amount": 1.0,
              "unit": "serving",
              "unitLong": "serving",
              "unitShort": "serving",
              "aisle": "Cheese",
              "name": "cheese",
              "original": "cheese",
              "originalString": "cheese",
              "originalName": "cheese",
              "metaInformation": [],
              "meta": [],
              "image": "https://spoonacular.com/cdn/ingredients_100x100/cheddar-cheese.png"
          },
          {
              "id": 23572,
              "amount": 1.0,
              "unit": "serving",
              "unitLong": "serving",
              "unitShort": "serving",
              "aisle": "Frozen;Meat",
              "name": "beef",
              "original": "beef",
              "originalString": "beef",
              "originalName": "beef",
              "metaInformation": [],
              "meta": [],
              "image": "https://spoonacular.com/cdn/ingredients_100x100/beef-cubes-raw.png"
          }
      ],
      "likes": 2
  }
]

export default dummySearchResults;