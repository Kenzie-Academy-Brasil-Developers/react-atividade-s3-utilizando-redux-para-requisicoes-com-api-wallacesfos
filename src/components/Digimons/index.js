import { useSelector } from "react-redux"

const Digimons = () => {
  const { digimons } = useSelector((state) => state);
    
  return (
      <div>
        <ul>
          {digimons.map((item) => {
            return <li>{item}</li>
          })}
        </ul>
      </div>
    )
  }
  
  export default Digimons