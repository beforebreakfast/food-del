import React, { useContext, useState } from 'react'
import './FoodItem.css'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../context/StoreContext'

const FoodItem = ({ id, name, price, description, image, options }) => {

    const { cartItems, addToCart, removeFromCart } = useContext(StoreContext)

    const [showPopup, setShowPopup] = useState(false)
    const [quantity, setQuantity] = useState(1)
    const [selectedOptions, setSelectedOptions] = useState({})

    const handleOpenPopup = () => {
        setQuantity(1)
        setSelectedOptions({})
        setShowPopup(true)
    }

    const handleConfirm = () => {
        for (let i = 0; i < quantity; i++) {
            addToCart(id, selectedOptions)
        }
        setShowPopup(false)
    }

    const calculateTotal = () => {
        let extra = 0

        Object.values(selectedOptions).forEach(opt => {
            if (opt?.price) {
                extra += opt.price
            }
        })

        return (price + extra) * quantity
    }

    return (
        <>
            <div className='food-item'>
                <div className="food-item-img-container">
                    <img className='food-item-image' src={image} alt="" />

                    {!cartItems[id]
                        ? <img
                            className='add'
                            onClick={handleOpenPopup}
                            src={assets.add_icon_white}
                            alt=""
                        />
                        : <div className='food-item-counter'>
                            <img
                                onClick={() => removeFromCart(id)}
                                src={assets.remove_icon_red}
                                alt=""
                            />
                            <p>{cartItems[id]}</p>
                            <img
                                onClick={handleOpenPopup}
                                src={assets.add_icon_green}
                                alt=""
                            />
                        </div>
                    }
                </div>

                <div className="food-item-info">
                    <p>{name}</p>
                    <p className="food-item-desc">{description}</p>
                    <p className="food-item-price">฿{price}</p>
                </div>
            </div>

            {showPopup && (
                <div className="popup-overlay">
                    <div className="popup-box">

                        <h3>{name}</h3>
                        <p className="popup-base-price">ราคา ฿{price}</p>

                        {options && Object.entries(options).map(([groupName, choices]) => (
                            <div key={groupName} className="popup-options-group">
                                <p className="option-title">{groupName}</p>

                                {choices.map((choice, index) => (
                                    <label key={index} className="option-item">
                                        <input
                                            type="radio"
                                            name={groupName}
                                            onChange={() =>
                                                setSelectedOptions(prev => ({
                                                    ...prev,
                                                    [groupName]: choice
                                                }))
                                            }
                                        />
                                        {typeof choice === "string"
                                            ? choice
                                            : <>
                                                {choice.label}
                                                {choice.price > 0 && ` (+฿${choice.price})`}
                                            </>
                                        }
                                    </label>
                                ))}
                            </div>
                        ))}

                        <div className="popup-quantity">
                            <button
                                onClick={() =>
                                    quantity > 1 && setQuantity(quantity - 1)
                                }
                            >
                                -
                            </button>
                            <span>{quantity}</span>
                            <button onClick={() => setQuantity(quantity + 1)}>
                                +
                            </button>
                        </div>

                        <p className="popup-total">
                            รวม ฿{calculateTotal()}
                        </p>

                        <div className="popup-buttons">
                            <button className="confirm-btn" onClick={handleConfirm}>
                                เพิ่มลงตะกร้า
                            </button>
                            <button
                                className="cancel-btn"
                                onClick={() => setShowPopup(false)}
                            >
                                ปิด
                            </button>
                        </div>

                    </div>
                </div>
            )}
        </>
    )
}

export default FoodItem