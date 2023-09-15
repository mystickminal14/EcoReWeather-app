import React, { useState ,useContext} from "react";
import { AppContext } from "../Weather/wea";
import {motion,AnimatePresence} from 'framer-motion'
export default function Crds({ items }) {
  const [selectedCard, setSelectedCard] = useState(null);
  const { setCard, setCardIndex } = useContext(AppContext);
  const handleAddToCart = (index) => {
    setSelectedCard(index);
  };

return (
    <>
      {items.map((desired, i) => (
        <div className="mini" key={desired.id}>
          <div className="minIm">
            <img src={desired.url} alt="itemsImg" />
          </div>
          <h1 className="dd px-3">{desired.name}</h1>
          <h5>{desired.stars}</h5>
          <button
            className="cart"
            onClick={() => {
              handleAddToCart(i);
            }}
          >
            Add to Cart
          </button>
          <AnimatePresence>  {selectedCard === i && (
            <motion.div initial={{opacity:0,y:-100}} animate={{opacity:1,y:0}} transition={{ease:"easeInOut",duration:0.3}}className="addCat" key={desired.id} exit={{opacity:0,transition:{duration:0.4}}}>
              <div className="minIm">
                <img src={desired.url} alt="itemsImg" />
              </div>
              <div className="lab">
                <label htmlFor={`quantity${i}`}>Add quantity</label>
                <input
                  type="number"
                  id={`quantity${i}`}
                  name={`quantity${i}`}
                  min="1"
                  max="10"
                  step="1"
                  placeholder="1-10"
                  required
                />
              </div>
              <button className="addBtn" onClick={()=>{
                setSelectedCard('')
                setCard(desired)
                setCardIndex(i)
              }}>Add +</button>
            </motion.div>
          )}    </AnimatePresence>
          <h2 className="px-3">{desired.tag}</h2>
          <div className="price">
            <h1 className="px-3">Rs.{desired.price}</h1>
            <h3>
              <del>Rs.{desired.og}</del>
              <span>(25% off)</span>
            </h3>
          </div>
        </div>
      ))}
    </>
  );
}
