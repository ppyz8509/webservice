import { useState } from 'react';
import './App.css';
import data from './data';
import Menu from './Menu';
import Categories from './Categories';

function App() {
  const [menuItems, setMenuItems] = useState(data);
  const allCategories = [
    "All",
    ...new Set(
      data.map((item) => {
        return item.category;
      })
    )
  ];
const filterItems = (category) =>{
  if(category === 'All'){
    setMenuItems(data);
  }else{
    const newItems = data.filter((item) =>item.category === category)
    setMenuItems(newItems);
  }
}
  return (
    <div>
      <h2>Workshop 2: food Menu</h2>
      <main>
        <section className='menu section'>
          <div className='title'>
            <h2>Our Menu</h2>
            <div className='underline'></div>
          </div>
          <Categories allCategories={allCategories} filterItems={filterItems} />
          <Menu menuItems={menuItems}/>
        </section>
      </main>
    </div>
  );
}

export default App;
