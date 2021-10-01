import { useState } from "react"
import { useDispatch } from "react-redux"
import addDigimonsThunk from "../../store/modules/digimons/thunks"


export default function Search(){

    const [input, setInput] = useState()
    const [error, setError] = useState(false);


    const dispatch = useDispatch();


    function handleSearch(){
        setError(false);
        dispatch(addDigimonsThunk(input))
        setInput("");
    }


    return (
        <div>
            <h2>Procure pelo digimon</h2>
            <div>
                <input type='text' placeholder='procure pelo seu digimon' value={input} onChange={(e) => setInput(e.target.value)}/>
            </div>
            <button onClick={handleSearch}>Pesquisar</button>
        </div>
    )
}