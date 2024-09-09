import { Content } from './components/Content';
import { Header } from './components/Header';
import { useState } from 'react';
import macbook from "./images/mack-book-card-1.jpg"
import Galaxy from "./images/Galaxy-card-2.jpg"
import Skuter from "./images/skuter-card-3.jpg"
import SamsungTV from "./images/samsung-Tv-card-4.jpg"
import Mask from "./images/mask-card-5.jpg"
import WashMashine from "./images/wasch-maschine-card-6.jpg"
import Holodilnik from "./images/holodilnik-card-7.jpg"
import SubCard from "./images/sub-card-8.jpg"
import Naushniki from "./images/nauschniki-card-9.jpg"
import Video from "./images/video-carta.png"

function App() {

  const [products, setProducts] = useState([
          {
    id: 1,
    name: "MacBook",
    price: 100000,
    bought: false,
    rating: 5,
    image: `${macbook}`
},
{
    id: 2,
    name: "Galaxy",
    price: 35999,
    bought: false,
    rating: 4,
    image: `${Galaxy}`
},
{
    id: 3,
    name: "Скутер",
    price: 65500,
    bought: false,
    rating: 5,
    image: `${Skuter}`
},
{
    id: 4,
    name: "Монитор Samsung",
    price: 12000,
    bought: false,
    rating: 3,
    image: `${SamsungTV}`
},
{
    id: 5,
    name: "Респераторная маска",
    price: 500,
    bought: false,
    rating: 5,
    image: `${Mask}`
},
{
    id: 6,
    name: "Стиральная машина",
    price: 100000,
    bought: false,
    rating: 3,
    image: `${WashMashine}`
},
{
    id: 7,
    name: "Белый холодильник",
    price: 43100,
    bought: false,
    rating: 5,
    image: `${Holodilnik}`
},
{
    id: 8,
    name: "Колонка",
    price: 3000,
    bought: false,
    rating: 4,
    image: `${SubCard}`
},
{
    id: 9,
    name: "Наушники",
    price: 1500,
    bought: false,
    rating: 5,
    image: `${Naushniki}`
},
    {
        id: 10,
        name: "Видеокарта RTX 3060",
        price: 41000,
        bought: false,
        rating: 8,
        image: `${Video}`
    }])

    const setBought = (idOfButton) => {
        const newBought = products.map((product)=> {
            if (product.id === idOfButton){
                return {
                    ...product,
                    bought: !product.bought}
            }
            return product;
        })
        setProducts(newBought);
    }


  return (
    <div className="app">
     <Header products={products}/>
     <Content products={products} setBought={setBought}/>
    </div>
  );
}

export default App;
