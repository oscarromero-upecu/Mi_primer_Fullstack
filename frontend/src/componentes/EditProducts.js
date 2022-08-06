import { useState, useEffect } from "react";
/** Axios es una biblioteca que se utiliza para realizar solicitudes HTTP
desde el navegador a través de la plataforma Node y Express.js*/
import axios from "axios";
import {useHistory, useParams} from "react-router-dom";

const EditProduct = () => {
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const history = useHistory();
    const { id } = useParams();

    const updatePruduct = async (e)=>{
        e.preventDefaul();
        await axios.patch(`http://localhost:5000/products/${id}`,{
            title:title,
            price:price
        });
        history.push("/");
    }
    //Actualiza el Producto del documento usando la API del navegador
    useEffect(() => {
        getProductById();
    });
 
    const getProductById = async () => {
        const response = await axios.get(`http://localhost:5000/products/${id}`);
        setTitle(response.data.title);
        setPrice(response.data.price);
    }

    return(
       <div>
            <form onSubmit={ updatePruduct }>
                <div className="field">
                    <label className="label">Title</label>
                    <input 
                        className="input"
                        type="text"
                        placeholder="Title"
                        value={ title }
                        onChange={ (e) => setTitle(e.target.value) }
                    />
                </div>
 
                <div className="field">
                    <label className="label">Price</label>
                    <input 
                        className="input"
                        type="text"
                        placeholder="Price"
                        value={ price }
                        onChange={ (e) => setPrice(e.target.value) }
                    />
                </div>
 
                <div className="field">
                    <button className="button is-primary">Update</button>
                </div>
            </form>
        </div>
    )
}
export default EditProduct

