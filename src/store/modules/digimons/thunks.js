import axios from "axios";
import { addDigimon } from "./action";

const addDigimonsThunk = (digimon, setError) => (dispatch) =>{

    axios.get('https://digimon-api.vercel.app/api/digimon')
    .then(res => dispatch(addDigimon(res.data[0].name)))

}

export default addDigimonsThunk