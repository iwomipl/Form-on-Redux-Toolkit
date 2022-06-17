import React, {ChangeEvent} from "react";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../store";
import {setDish, setName, setTime} from "../../features/form/form-slice";

export const OrderForm = ()=>{
    const dispatch = useDispatch();
    const {name, time, dish } = useSelector((store: RootState )=> store.orderForm );

    const updateData = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>, name: string)=>{
        if (name === 'name') {
            dispatch(setName(e.target.value));
        } else if (name === 'time') {
            dispatch(setTime(e.target.value));
        }else if (name === 'dish') {
            dispatch(setDish(e.target.value));
        }
    }
    return (<form>
        <label>
            Dish name:
            <input
                type="text"
                name="name"
                value={name}
                onChange={(e)=> updateData(e, 'name')}
                required
            />
        </label><br/>
        <label>
            Preparation time:
            <input
                type="time"
                name="time"
                placeholder="00:00:00"
                value={time}
                step="1"
                onChange={(e)=> updateData(e, 'time')}
                required
            />
        </label><br/>
        <label>
            Type:
            <select
                name="dish"
                value={dish}
                onChange={(e)=> updateData(e, 'dish')}
                required
            >
                <option value="pizza">Pizza</option>
                <option value="soup">Soup</option>
                <option value="sandwich">Sandwich</option>
            </select>
        </label><br/>
        <button>Order now!</button>
    </form>)
}
