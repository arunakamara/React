import { useContext } from "react";

import Modal from "./UI/Modal";
import CartContext from "../store/CartContext";
import { currencyFormatter } from "../util/formatting";
import Input from "./UI/Input";
import Button from "./UI/Button";
import UserProgressContext from "../store/UserProgressContext";


export default function Checkout() {
    const {items} = useContext(CartContext);
    const {progress, hideCheckout}= useContext(UserProgressContext);

    const cartTotal = items.reduce((totalPrice, item) => totalPrice + item.quantity * item.price, 0);

    function handleClose(){
        hideCheckout();
    }

    function handleSubmit(e){
        e.preventDefault();

        const fd = new FormData(e.target);
        const customerData = Object.fromEntries(fd.entries());
    }

    return <Modal open={progress === 'checkout'} onClose={handleClose}>
        <form onSubmit={handleSubmit}>
            <h2>Checkout</h2>
            <p>Total Amount: {currencyFormatter.format(cartTotal)}</p>

            <Input label="Full Name" type="text" id="full-name"/>
            <Input label="E-Mail Address" type="email" id="email"/>
            <Input label="Street Address" type="text" id="street"/>

            <div className="control-row">
                <Input label="Postal Code" type="text" id="postal-code"/>
                <Input label="City" type="text" id="city"/>
            </div>

            <p className="modal-actions">
                <Button type="button" onClick={handleClose} textOnly>Close</Button>
                <Button >Submit Order</Button>
            </p>
        </form>
    </Modal>
}