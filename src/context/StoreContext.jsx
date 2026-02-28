import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets";

export const StoreContext = createContext(null)

const StoreContextProvider = (props) => {

    const [cartItems, setCartItems] = useState({})

    const generateCartKey = (itemId, selectedOptions) => {
        const optionsString = selectedOptions
            ? Object.values(selectedOptions)
                .map(opt =>
                    typeof opt === "string"
                        ? opt
                        : opt.label
                )
                .join("_")
            : ""

        return `${itemId}_${optionsString}`
    }

    const addToCart = (itemId, selectedOptions = {}) => {

        const cartKey = generateCartKey(itemId, selectedOptions)

        setCartItems(prev => {

            if (prev[cartKey]) {
                return {
                    ...prev,
                    [cartKey]: {
                        ...prev[cartKey],
                        quantity: prev[cartKey].quantity + 1
                    }
                }
            }

            return {
                ...prev,
                [cartKey]: {
                    itemId,
                    selectedOptions,
                    quantity: 1
                }
            }
        })
    }

    const removeFromCart = (cartKey) => {

        setCartItems(prev => {

            if (prev[cartKey].quantity === 1) {
                const newCart = { ...prev }
                delete newCart[cartKey]
                return newCart
            }

            return {
                ...prev,
                [cartKey]: {
                    ...prev[cartKey],
                    quantity: prev[cartKey].quantity - 1
                }
            }
        })
    }

    const getTotalCartAmount = () => {

    let totalAmount = 0;

    Object.entries(cartItems).forEach(([cartKey, cartData]) => {

        const itemInfo = food_list.find(
            product => product._id === cartData.itemId
        );

        if (!itemInfo) return;

        let extraPrice = 0;

        Object.values(cartData.selectedOptions || {}).forEach(opt => {
            if (typeof opt === "object" && opt.price) {
                extraPrice += opt.price;
            }
        });

        const finalPrice = itemInfo.price + extraPrice;

        totalAmount += finalPrice * cartData.quantity;
    });

    return totalAmount;
};

    const contextValue = {
        food_list,
        cartItems,
        addToCart,
        removeFromCart,
        getTotalCartAmount
    }

    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider;