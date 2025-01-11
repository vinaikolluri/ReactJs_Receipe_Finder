import { Recipe } from '../data/recipes';

interface RecipeCardProps {
  recipe: Recipe;
}

export function RecipeCard({ recipe }: RecipeCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <img 
        src={recipe.image} 
        alt={recipe.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{recipe.name}</h3>
        <p className="text-gray-600 mb-4">{recipe.description}</p>
        
        <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
          <div>
            <span className="font-medium">Prep:</span> {recipe.prepTime}
          </div>
          <div>
            <span className="font-medium">Cook:</span> {recipe.cookTime}
          </div>
          <div>
            <span className="font-medium">Serves:</span> {recipe.servings}
          </div>
        </div>

        <div className="mb-4">
          <h4 className="font-medium mb-2">Ingredients:</h4>
          <ul className="list-disc list-inside text-gray-600">
            {recipe.ingredients.slice(0, 3).map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
            {recipe.ingredients.length > 3 && (
              <li className="list-none text-blue-600">
                +{recipe.ingredients.length - 3} more...
              </li>
            )}
          </ul>
        </div>

        <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
          {recipe.category}
        </span>
      </div>
    </div>
  );
}