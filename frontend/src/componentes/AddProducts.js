/*Importamos el Hook useState desde React que nos
permite mantener un estado local en un componente de función*/
import { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

//declara una funcion 
const AddProduct = ()=>{
    /*declaramos una variable useState que nos devuelve un par de valores
    title variable que guarda el string con el nombre del titulo que
    la inicializamos en "" pasando como único argumento a useState
    segundo elemento setTitle es una función que nos permite actualizar el Title*/
    const[title,setTitle]=useState("");
    const[price,setPrice]=useState("");
    const history = useHistory();

    const saveProduct = async(e)=>{
        e.preventDefault();
        await axios.post('http://localhost:5000/products',{
            title:title,
            price:price
        });
        history.push("/");
    }

    return  (
        /*«div HTML», este elemento puede dividir tu página web en
        secciones para que puedas darles propiedades CSS únicas*/
        <div>
            <form onSubmit={saveProduct}>
                <div className="field">
                    <label className="label">Title</label>
                    <input
                        className="input"
                        type="text"
                        placeholder="Titulo"
                        value = {title}
                        onChange={(e)=>setTitle(e.target.value)}
                    />
                </div>
                <div className="field">
                    <label className="label">Price</label>
                    <input
                        className="input"
                        type="text"
                        placeholder="Price"
                        value = {price}
                        onChange={(e)=>setPrice(e.target.value)}
                    />
                </div>
                <div className="field">
                    <button className="button is-primary">Guardar</button>
                </div>
            </form>
        </div>
    )

}
export default AddProduct