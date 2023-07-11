import { ethers } from 'ethers'

// Components
import Rating from './Rating'

const Section = ({ title, items, togglePop }) => {
    return (
        <div className='cards__section'>
            <h3 id={title}>{title}</h3>

            <hr />

            <div className='cards'>
                {items.map((items, index) => (
                    <div className='card' key={index} onClick={() => togglePop(items)}>
                        <div className='card__image'>
                            <img src={items.image} alt="Item" />
                        </div>
                        <div className='card__info'>
                            <h4>{items.name}</h4>
                            <Rating value={items.rating} />
                            <p>{ethers.utils.formatUnits(items.cost.toString(), 'ether')} ETH</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Section;