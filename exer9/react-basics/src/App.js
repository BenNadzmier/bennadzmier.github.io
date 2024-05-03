//Ben Nadzmier Bensali
//CMSC 100 UV3L
import Categories from './Categories';
import ItemCard from './ItemCard';
import Cart from './Cart';

const menus = [ //for the categories
  { name: "Appliances", url: "#", id: 1},
  { name: "Groceries", url: "#", id: 2},
  { name: "Gadgets", url: "#", id: 3},
  { name: "Clothing", url: "#", id: 4},
];

const appliances = [ //items in the appliance category
  {name: "Washer", image:"https://ansons.ph/wp-content/uploads/2021/04/WFRB852BHG.png", id: 1},
  {name: "Air Fryer", image:"https://ansons.ph/wp-content/uploads/2021/11/AAF-21BG.png", id: 2},
  {name: "Aircon", image:"https://shop.union.ph/cdn/shop/products/UGAIR-12000-RC_1200x1200.jpg?v=1688622343", id: 3},
  {name: "Electric Fan", image:"https://fukuda-asia.com/wp-content/uploads/2021/11/FG128-2-1.jpg", id: 4},
  {name: "Clothes Iron", image:"https://shop.union.ph/cdn/shop/products/UGFI-300-qtr-1_1200x1200.jpg?v=1688537291", id: 5},
]

function App() {
  return (
    <div>
  	  <Categories data={menus}/>
      <ItemCard data={appliances}/>
      <Cart></Cart>
	</div>
  );
}

export default App;
