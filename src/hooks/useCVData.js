import { useState } from "react";
import { CategoriesMeta, Categories } from "../models/Categories";
import uniqid from "uniqid";

function useCVData() {
    const initState = () => {
        const initialState = Object
            .values(CategoriesMeta)
            .map((category) => [
                [category], [
                    {
                        id: uniqid(),
                        ...Categories[category].model(),
                    }
                ]
            ]);
        return Object.fromEntries(initialState);
    }

    const [state, setState] = useState(initState());

    const addCategoryItem = (categoryName) => {
        let category = state[categoryName].slice();
        category = [
            ...category,
            { id: uniqid(), ...Categories[categoryName].model() },
        ];
        setState({
            ...state,
            [categoryName]: category,
        });
    }

    const editCategoryItem = (categoryName, id, property, value) => {
        const category = state[categoryName].slice();
        const index = category.findIndex((item) => item.id === id);
        category[index][property] = value;
        setState({
            ...state,
            category,
        });
    }

    const removeCategoryItem = (categoryName, id) => {
        const category = state[categoryName];
        setState({
            ...state,
            [categoryName]: category.filter((item) => item.id !== id),
        });
    }

    const reset = () => {
        setState(initState());
    }

    return [
        state,
        addCategoryItem,
        editCategoryItem,
        removeCategoryItem,
        reset
    ];
}

export { useCVData }