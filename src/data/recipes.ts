export interface Recipe {
  id: number;
  name: string;
  description: string;
  ingredients: string[];
  instructions: string[];
  image: string;
  prepTime: string;
  cookTime: string;
  servings: number;
  category: string;
}

export const recipes: Recipe[] = [
  {
    id: 1,
    name: "Classic Margherita Pizza",
    description: "A traditional Italian pizza with fresh basil, mozzarella, and tomatoes",
    ingredients: [
      "Pizza dough",
      "Fresh mozzarella",
      "Fresh basil leaves",
      "Tomato sauce",
      "Olive oil",
      "Salt"
    ],
    instructions: [
      "Preheat oven to 450°F (230°C)",
      "Roll out pizza dough",
      "Spread tomato sauce",
      "Add mozzarella chunks",
      "Bake for 12-15 minutes",
      "Top with fresh basil and olive oil"
    ],
    image: "https://images.unsplash.com/photo-1604068549290-dea0e4a305ca",
    prepTime: "20 mins",
    cookTime: "15 mins",
    servings: 4,
    category: "Italian"
  },
  {
    id: 2,
    name: "Grilled Salmon",
    description: "Perfectly grilled salmon with lemon and herbs",
    ingredients: [
      "Salmon fillet",
      "Lemon",
      "Fresh dill",
      "Olive oil",
      "Garlic",
      "Black pepper",
      "Sea salt"
    ],
    instructions: [
      "Marinate salmon with olive oil, garlic, and herbs",
      "Preheat grill to medium-high",
      "Grill salmon for 4-5 minutes per side",
      "Garnish with lemon and dill"
    ],
    image: "https://images.unsplash.com/photo-1485921325833-c519f76c4927",
    prepTime: "10 mins",
    cookTime: "10 mins",
    servings: 2,
    category: "Seafood"
  },
  {
    id: 3,
    name: "Chocolate Chip Cookies",
    description: "Soft and chewy chocolate chip cookies",
    ingredients: [
      "Flour",
      "Butter",
      "Brown sugar",
      "White sugar",
      "Eggs",
      "Vanilla extract",
      "Chocolate chips",
      "Baking soda",
      "Salt"
    ],
    instructions: [
      "Cream butter and sugars",
      "Add eggs and vanilla",
      "Mix in dry ingredients",
      "Fold in chocolate chips",
      "Bake at 375°F for 10-12 minutes"
    ],
    image: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e",
    prepTime: "15 mins",
    cookTime: "12 mins",
    servings: 24,
    category: "Dessert"
  }
];