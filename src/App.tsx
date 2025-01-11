import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { recipes } from './data/recipes';
import { RecipeCard } from './components/RecipeCard';

function App() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredRecipes = recipes.filter(recipe => {
    const searchLower = searchTerm.toLowerCase();
    return (
      recipe.name.toLowerCase().includes(searchLower) ||
      recipe.ingredients.some(ingredient => 
        ingredient.toLowerCase().includes(searchLower)
      )
    );
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">Recipe Book</h1>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        {/* Search Bar */}
        <div className="relative max-w-xl mx-auto mb-8">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Search recipes by name or ingredient..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>

        {/* Recipe Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredRecipes.map(recipe => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </div>

        {/* No Results Message */}
        {filteredRecipes.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">
              No recipes found matching your search.
            </p>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;