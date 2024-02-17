import React from "react";

const Menu = () => {
  return (
    <div className="m-5">
      <div className="container mx-auto py-8">
        <h1 className="text-3xl font-bold mb-4 text-blue-700">
          Starbucks Menu
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Coffee Selections */}
          <div className="menu-category bg-green-300 text-green-900 rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Coffee Selections</h2>
            <ul className="list-disc ml-8">
              <li>Espresso</li>
              <li>Caffè Americano</li>
              <li>Cappuccino</li>
              <li>Latte</li>
              <li>Mocha</li>
              <li>Flat White</li>
              <li>Macchiato</li>
              <li>Cold Brew</li>
              <li>Nitro Cold Brew</li>
              <li>Frappuccino</li>
            </ul>
          </div>

          {/* Tea Selections */}
          <div className="menu-category bg-purple-300 text-purple-900 rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Tea Selections</h2>
            <ul className="list-disc ml-8">
              <li>Green Tea</li>
              <li>Black Tea</li>
              <li>Chai Tea Latte</li>
              <li>Matcha Latte</li>
              <li>Herbal Tea</li>
            </ul>
          </div>

          {/* Signature Drinks */}
          <div className="menu-category bg-pink-300 text-pink-900 rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Signature Drinks</h2>
            <ul className="list-disc ml-8">
              <li>Starbucks® Signature Hot Chocolate</li>
              <li>Starbucks® Signature Iced Tea</li>
              <li>Starbucks® Signature Pink Drink</li>
              <li>Starbucks® Signature Vanilla Sweet Cream Cold Brew</li>
            </ul>
          </div>

          {/* Brunch Items */}
          <div className="menu-category bg-orange-300 text-green-900 rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Brunch Items</h2>
            <ul className="list-disc ml-8">
              <li>Classic Oatmeal</li>
              <li>Bacon & Gouda Breakfast Sandwich</li>
              <li>Spinach & Feta Breakfast Wrap</li>
              <li>Egg & Cheese Protein Box</li>
              <li>Avocado Toast</li>
              <li>Ham & Swiss Panini</li>
              <li>Sausage, Cheddar & Egg Breakfast Sandwich</li>
              <li>Sous Vide Egg Bites (Bacon & Gruyere)</li>
              <li>Turkey & Havarti Sandwich</li>
              <li>Spinach, Feta & Cage-Free Egg White Wrap</li>
            </ul>
          </div>

          {/* Pastries & Sweets */}
          <div className="menu-category bg-blue-300 text-white rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Pastries & Sweets</h2>
            <ul className="list-disc ml-8">
              <li>Croissants (Plain, Chocolate, Almond)</li>
              <li>Blueberry Muffin</li>
              <li>Banana Nut Bread</li>
              <li>Cake Pops (Assorted Flavors)</li>
              <li>Lemon Loaf</li>
              <li>Pumpkin Bread</li>
              <li>Chocolate Chip Cookie</li>
              <li>Raspberry Swirl Pound Cake</li>
              <li>Brownie</li>
              <li>Classic Coffee Cake</li>
            </ul>
          </div>

          {/* Cold Beverages */}
          <div className="menu-category bg-pink-300 text-white rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Cold Beverages</h2>
            <ul className="list-disc ml-8">
              <li>Iced Coffee</li>
              <li>Iced Tea</li>
              <li>Refreshers (Assorted Flavors)</li>
              <li>Lemonade</li>
              <li>Bottled Water</li>
              <li>Bottled Juice</li>
            </ul>
          </div>

          {/* Seasonal Specials */}
          <div className="menu-category bg-purple-300 text-pink-900 rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Seasonal Specials</h2>
            <ul className="list-disc ml-8">
              <li>Pumpkin Spice Latte</li>
              <li>Peppermint Mocha</li>
              <li>Gingerbread Latte</li>
              <li>Eggnog Latte</li>
              <li>Caramel Brulée Latte</li>
              <li>Toasted White Chocolate Mocha</li>
            </ul>
          </div>

          {/* Kids Menu */}
          <div className="menu-category bg-orange-300 text-white rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Kids Menu</h2>
            <ul className="list-disc ml-8">
              <li>Kids Hot Chocolate</li>
              <li>Kids Steamer (Steamed Milk)</li>
              <li>Kids Chocolate Milk</li>
              <li>Kids Apple Juice</li>
              <li>Kids Cheese & Fruit Protein Box</li>
            </ul>
          </div>

          {/* Add-Ons & Extras */}
          <div className="menu-category bg-green-300 text-green-900 rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Add-Ons & Extras</h2>
            <ul className="list-disc ml-8">
              <li>Extra Shot of Espresso</li>
              <li>Soy Milk</li>
              <li>Almond Milk</li>
              <li>Coconut Milk</li>
              <li>Vanilla Syrup</li>
              <li>Caramel Syrup</li>
              <li>Hazelnut Syrup</li>
              <li>Cinnamon Dolce Syrup</li>
              <li>Whipped Cream</li>
              <li>Chocolate Drizzle</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
