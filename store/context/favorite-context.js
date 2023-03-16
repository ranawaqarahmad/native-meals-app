import { createContext , useState } from "react";

export const FavoritesContext  = createContext({
    ids: [],
    addFavorite: (id) => {},
    removeFavorite: (id) => {}
})

const FavoritesContextProvider = ({children}) => {
    const [favouriteMealsIds , setFavoriteMealsIds] = useState([]);

    const addFavorite = (id) => {
        setFavoriteMealsIds((prevState) => [...prevState , id])
    }

    const removeFavorite = (id) => {
        setFavoriteMealsIds((prevState) => prevState.filter((mealId) => mealId !== id))
    }

    const value = {
        ids: favouriteMealsIds,
        addFavorite: addFavorite,
        removeFavorite: removeFavorite
    }

    return (
        <FavoritesContext.Provider value={value}>
            {children}
        </FavoritesContext.Provider>
    )
}

export default FavoritesContextProvider