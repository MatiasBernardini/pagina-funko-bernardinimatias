import { useState, useContext } from "react"
import { Context } from "../../Context/CartContext";
import {db} from "../../firebase/firebase"
import { addDoc, collection } from "firebase/firestore";
import "./Checkout.css"

const Checkout = () => {
    const {cart, getTotal, clear} = useContext (Context)

    const [orderId, setOrderId] = useState()

    const [buyer, setBuyer] = useState ({
        Nombre: '',
        Email:'',
        Telefono:''
    })
    
    const {Nombre, Email, Telefono} = buyer

    const generateOrder = async (data) => {
        try {
            const col = collection(db, "ordenes")
            const order = await addDoc(col, data)
            setOrderId(order.id)
            clear()
        } catch (error) {
            console.log(error)
        }
    }

    const handleInputChange = (e) =>{
        setBuyer (({
            ...buyer, 
            [e.target.name]: e.target.value
        }))
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        const items = cart.map (e=>{return { id:e.id,title:e.title,price:e.price}})
        const dia = new Date()
        const total = getTotal()
        const data = {buyer, items, dia, total} 
        generateOrder(data)
    }

    return (
        <>
            <div className="divDelCheckout">
                <h1 className="titleCheckout">Finalizando Compra</h1>
                <hr />

                {!orderId? 
                
                    (   <div className="divDelFormulario">
                            <h2>Completar Datos:</h2>
                            <form onSubmit={handleSubmit}>
                                <input className="inputFormulario" 
                                    type="text"
                                    name="Nombre"
                                    placeholder="Nombre"
                                    value={Nombre}
                                    onChange={handleInputChange}
                                />
                                <br />
                                
                                <input className="inputFormulario"
                                    type="email"
                                    name="Email"
                                    placeholder="Email"
                                    value={Email}
                                    onChange={handleInputChange}
                                />
                                <br />

                                <input className="inputFormulario"
                                    type="number"
                                    min={0}
                                    name="Telefono"
                                    placeholder="Telefono"
                                    value={Telefono}
                                    onChange={handleInputChange}
                                />

                                <br /> <br />

                                <input 
                                type="submit"
                                value= "Guardar Datos"
                                className="buttonFinalizarCompra" 
                                
                                />

                            </form> 
                        </div>)
                    :
                    <h2 className="idOrden">Su Orden de compra es: "{orderId}"</h2>
                }
            </div>

        </>

    )
}

export default Checkout