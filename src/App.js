import React, { useState }   from 'react' ;
import Item from './components/Item';
import { Button } from 'primereact/button';




function App() {

  const[ dataTable, setData] = useState([
    {id:Date.now(), firstName:'John', secondName : 'Connor', lastName:'Arc', country: 'USA', state:'blabla', email:'y@g.com',phone:'335'}
    
  ]);

  const[firstName, setFirstName] = useState('')
  const[secondName, setSecondName] = useState('')
  const[lastName, setLastName] = useState('')
  const[country, setCountry] = useState('')
  const[state, setState] = useState('')
  const[email, seteEmail] = useState('')
  const[phone, setPhone] = useState('')

  const addNewUser = () =>{
    const newUser ={
      id: Date.now() ,
      firstName,
      secondName ,
      lastName,
      country,
      state,
      email,
      phone
    }
    
    setData([...dataTable, addNewUser]); 
  }



  return (

    <div className="App">
     {dataTable.map( data =>
      <Item data = {data} key = {data.id} />
      )}
      
      <Button onClick = {addNewUser}> Add new User</Button>
      
    </div>
  );
}

export default App;
