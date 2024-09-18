import { GifItem } from "./GifItem";
import { useEffect, useState } from "react";
import "../App.css"

const getGifs = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=66Vvb2WG5U5ACvj6RNlAEcxIpQnQ47WB&q=${category}&limit=1&offset=0&rating=g&lang=en&bundle=messaging_non_clips`;
    const resp = await fetch(url);
    const { data } = await resp.json();
    const gifs = data.map(img => {
      return {
        id: img.id,
        title: img.title,
        url: img.images?.fixed_height?.url || 'No existe'
      }
    });
  
    return gifs;
  }
  
  export const GifGrid = ({ category }) => {
    const [images, setImages] = useState([]);

    const getImages = async () => {
      const images = await getGifs(category);
      console.log(images);  
      setImages(images);
  };
  

    useEffect(() => {
        getImages();
    }, []);

    return (
        <>
            <div className="card-grid">
                {images.map((image, key) => {
                    return <GifItem  key={key} category={category}
                    {...image} />;
                })}
            </div>
        </>
    );
};
  
