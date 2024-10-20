import './App.css';
import { AddCategory } from './components/AddCategory';
import { useState } from 'react';
import { GifGrid } from './components/GifGrid';
function App() {
  const [categories, setCategories] = useState(["First Category"])

  const onAddCategory = (category) => {
    setCategories(list => [...list, category])
  }

  return (
    <>
      <h1>Gif Expert</h1>
      <AddCategory onAddCategory={onAddCategory} />
      {
        categories.map(
          (category, key) => {
            return <GifGrid category={category} key={key} />
          }
        )
      }
    </>
  );
}

export default App;


