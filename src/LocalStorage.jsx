import React, { useState, useEffect, useRef } from "react";
import AddItems from "./AddItems";
import Footer from "./Footer";
import SearchItems from "./SearchItems";

const LocalStorage = () => {
    // Initialize items from localStorage properly
    const storedItems = JSON.parse(localStorage.getItem("todo_lists")) || [];
    const [items, setItems] = useState(Array.isArray(storedItems) ? storedItems : []);

    const [searchItem, setSearchItem] = useState("");

    // Update localStorage whenever items change
    // useEffect is perform a function whenever any state in the code is called
    // If i want it only for fow the in will include dependencies
    useEffect(() => {
        console.log("Rendering")
    });

    useEffect(() => {
        localStorage.setItem("todo_lists", JSON.stringify(items));
    }, [items]);

    function handleCheck(id) {
        const listItems = items.map((item) =>
            item.id === id ? { ...item, checked: !item.checked } : item
        );
        setItems(listItems);
    }

    function handleDelete(id) {
        const listItems = items.filter((item) => item.id !== id);
        setItems(listItems);
    }

    const addItems = (item) => {
        const id = items.length && items[items.length - 1] ? items[items.length - 1].id + 1 : 1;
        const addNewItem = { id, checked: false, item };
        const listItems = [...items, addNewItem];
        setItems(listItems);
    };

    const [newItems, setNewItems] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        if (!newItems.trim()) return;
        addItems(newItems.trim());
        setNewItems("");
    }

    return (
        <div className="todoList">
            <AddItems newItems={newItems} setNewItems={setNewItems} handleSubmit={handleSubmit} />
            <SearchItems
                searchItem={searchItem}
                setSearchItem={setSearchItem}
            />
            {items.length > 0 ? (
                <ul>
                    {items.filter((item) => item?.item && item.item.toLowerCase().includes(searchItem.toLowerCase()))
                        .map((item) =>
                            item && item.id ? (
                                <li key={item.id}>
                                    <input type="checkbox" checked={item.checked} onChange={() => handleCheck(item.id)} />
                                    <label
                                        style={item.checked ? { textDecoration: "line-through" } : null}
                                        onDoubleClick={() => handleCheck(item.id)}
                                    >
                                        {item.item}
                                    </label>
                                    <button onClick={() => handleDelete(item.id)}>DELETE</button>
                                </li>
                            ) : null
                        )}
                </ul>
            ) : (
                <p>Your List is Empty</p>
            )}
            <Footer length={items.length} />
        </div>
    );
};

export default LocalStorage;
