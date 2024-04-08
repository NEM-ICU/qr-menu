import { produce } from "immer";
import { create } from "zustand";

const initialState = {
  menu: [
    [
      {
        id: 101,
        category: "Appetizers",
        name: "Spring Rolls",
        price: 8.99,
        image: "images/spring_rolls.jpg",
        description: "Crispy rolls filled with savory vegetables and shrimp.",
      },
      {
        id: 102,
        category: "Appetizers",
        name: "Calamari Fritti",
        price: 12.5,
        image: "images/calamari_fritti.jpg",
        description:
          "Lightly fried squid rings served with a spicy marinara sauce and lemon wedge.",
      },
      {
        id: 103,
        category: "Appetizers",
        name: "Bruschetta",
        price: 7.95,
        image: "images/bruschetta.jpg",
        description:
          "Toasted bread topped with fresh chopped tomatoes, garlic, basil, and olive oil.",
      },
      {
        id: 104,
        category: "Appetizers",
        name: "Edamame",
        price: 5.95,
        image: "images/edamame.jpg",
        description:
          "Steamed or boiled soybeans in their pods, sprinkled with sea salt.",
      },
    ],
    [
      {
        id: 201,
        category: "Main Courses",
        name: "Grilled Salmon",
        price: 24.95,
        image: "images/grilled_salmon.jpg",
        description:
          "Fresh salmon fillet grilled to perfection with roasted vegetables and a light lemon dill sauce.",
      },
      {
        id: 202,
        category: "Main Courses",
        name: "Steak Diane",
        price: 32.0,
        image: "images/steak_diane.jpg",
        description:
          "Flamed filet mignon with a creamy brandy sauce, served with mashed potatoes and seasonal greens.",
      },
      {
        id: 203,
        category: "Main Courses",
        name: "Penne Arrabbiata",
        price: 18.75,
        image: "images/penne_arrabbiata.jpg",
        description:
          "Spicy tomato sauce tossed with penne pasta, parmesan cheese, and fresh basil. Vegetarian option available.",
      },
      {
        id: 204,
        category: "Main Courses",
        name: "Chicken Piccata",
        price: 21.5,
        image: "images/chicken_piccata.jpg",
        description:
          "Thinly sliced chicken breasts sauteed with lemon, butter, and capers, served over pasta.",
      },
    ],
    [
      {
        id: 301,
        category: "Salads",
        name: "Caesar Salad",
        price: 12.95,
        image: "images/caesar_salad.jpg",
        description:
          "Romaine lettuce with grilled chicken, parmesan cheese, croutons, and creamy Caesar dressing.",
      },
      {
        id: 302,
        category: "Salads",
        name: "Greek Salad",
        price: 14.25,
        image: "images/greek_salad.jpg",
        description:
          "Feta cheese, olives, tomatoes, cucumbers, red onion, and oregano, tossed with olive oil and lemon juice.",
      },
      {
        id: 303,
        category: "Salads",
        name: "Chopped Salad",
        price: 15.75,
        image: "images/chopped_salad.jpg",
        description:
          "A variety of chopped vegetables, grilled chicken or tofu, with a balsamic vinaigrette dressing.",
      },
    ],
    [
      {
        id: 401,
        category: "Desserts",
        name: "Chocolate Cake",
        price: 6.5,
        image: "images/chocolate_cake.jpg",
        description: "Rich chocolate cake with creamy chocolate frosting.",
      },
      {
        id: 402,
        category: "Desserts",
        name: "Tiramisu",
        price: 7.25,
        image: "images/tiramisu.jpg",
        description:
          "Ladyfingers layered with coffee, mascarpone cheese, and cocoa powder.",
      },
      {
        id: 403,
        category: "Desserts",
        name: "Fruit Salad",
        price: 5.95,
        image: "images/fruit_salad.jpg",
        description:
          "A seasonal selection of fresh fruits with a light honey dressing. Vegan option available.",
      },
      {
        id: 404,
        category: "Desserts",
        name: "New York Cheesecake",
        price: 7.5,
        image: "images/new_york_cheesecake.jpg",
        description:
          "Classic New York-style cheesecake with a graham cracker crust.",
      },
    ],
  ],
  categories: [
    { id: 1, category: "Appetizers" },
    { id: 2, category: "Main Courses" },
    { id: 3, category: "Salads" },
    { id: 4, category: "Desserts" },
  ],
  selectedCategory: "Appetizers",
};

export const useMenuStore = create((set) => ({
  menu: initialState.menu,
  categories: initialState.categories,
  selectedCategory: initialState.selectedCategory,
  addCategory: (category) =>
    set(
      produce((state) => {
        state.menu.push({ category: category, items: [] });
      })
    ),
  setSelectedCategory: (category) =>
    set(
      produce((state) => {
        console.log(category, "category xyz");
        state.selectedCategory = category;
      })
    ),
  moveCategory: (categoryArr, foodArr) =>
    set(
      produce((state) => {
        state.categories = categoryArr;
        state.menu = foodArr;
      })
    ),
  moveFoodItems: (arr) =>
    set(
      produce((state) => {
        const menuPos = state.menu.find((item, index) => {
          if (item[0].category == state.selectedCategory) {
            state.menu[index] = arr;
          }
        });
      })
    ),
}));
