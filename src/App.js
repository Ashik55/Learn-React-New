import './App.css';
import {useState} from "react";
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    const [name, setName] = useState("ashik")

    function abc() {
        console.log("Hello")
        console.log(name)
    }

    function changeName(){
        setName("Rakib")
    }


    return (
        <div>
            <Button onClick={abc}>Hello</Button>
            <br/>             <br/>             <br/>
            <Button onClick={changeName}>Button 2</Button>
            <br/>             <br/>             <br/>

            <p>{name}</p>

        </div>
    );
}

export default App;
