import ItemStatusFilter from './item-status-filter';
import {useState} from "react";

const ActiveFnc = () => {
    const [active,setActive] = useState(false)
    return ( <div>
    <ItemStatusFilter active={active} setActive={setActive} />
        </div>
    )

}


export default ItemStatusFilter;
