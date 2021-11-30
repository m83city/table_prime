
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import '../css/item.css';
 
function Item (props){
    console.log(props); 

    return(
        <div className = "mainbox" >
            <ul className = 'item-box'>
                <li>
<InputText  value = {props.data.firstName}/>

 </li>
                <li>
<InputText  value = {props.data.secondName}/>

 </li>
                <li>
<InputText  value = {props.data.lastName}/>

 </li>
                <li>
<InputText  value = {props.data.country}/>

 </li>
                <li>
<InputText  value = {props.data.state}/>

 </li>
                <li>
<InputText  value = {props.data.email}/>

 </li>
                <li>
<InputText  value = {props.data.phone}/>

 </li>
            </ul>
            <Button label="Delete" />
            
        </div>
    );
}
export default Item;