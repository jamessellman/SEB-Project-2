import React from "react";

function Home () {
  React.useEffect(() => {
    console.log("The Home Page has mounted")
  }, [])
  return (
 <h1>Home page</h1>
  )
}

export default Home