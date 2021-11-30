import React, { useState }   from 'react' ;




function App() {
  const [likes, setLikes] = useState (5); // useState це масив який дозволяє відшукувати зміни  значень змінних. 1-ша це значення 2 це функція тобто
  //likes = 5 по дефолту  а setLikes це вже функція яка робить перевірку ми її надаєм параметри setLikes (likes +- 1) або setValue(event.target.value)
  const [value, setValue] = useState('some string');


    function increment(){
      setLikes (likes + 1)
    };                      //2 функції які встановлюють значення setLikes +- 1 
    function decrement(){
      setLikes(likes - 1)
    }



  return (
    <div className="App">
      <h1>{likes}</h1>
      <h1>{value}</h1>
      <input type = "text"
       value = {value}
      onChange = {event => setValue(event.target.value)} // Дозволяє змінювати контент динамічно в заголовку з жс value
       ></input> 
      <button onClick = {increment}>increment</button>
      <button onClick = {decrement} >decrement</button>
    </div>
  );
}

export default App;
