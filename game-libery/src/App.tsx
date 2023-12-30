import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";

function App() {
const [alertVisble, setAlertVisbility] = useState(false);

  return (
    <div>
      { alertVisble && <Alert onClose={()=>setAlertVisbility (false) }>The all</Alert>}
      <Button  onClick={() => setAlertVisbility(true)}>my button</Button>
    </div>
  );
}

export default App;
