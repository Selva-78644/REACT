import { useState } from "react";

function Car() {
    const [brand, setBrand] = useState("Ford");

    return (
        <>
          <h1>My {brand}</h1>
          </>
  )
}
export default Car; 