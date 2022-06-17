import React from "react";

export const OrderForm = ()=>{

    return <form>
        <label>
            Dish name:
            <input
                type="text"
                name="name"
                value=""
                required
            />
        </label><br/>
        <label>
            Preparation time:
            <input
                type="time"
                name="time"
                placeholder="00:00:00"
                value="00:00:00"
                step="1"
                required
            />
        </label><br/>
        <label>
            Type:
            <select name="type" id="">
                <option value="pizza">Pizza</option>
                <option value="soup">Soup</option>
                <option value="sandwich">Sandwich</option>
            </select>
        </label><br/>
        <button>Order now!</button>
    </form>
}
