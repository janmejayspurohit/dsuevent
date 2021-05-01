import React, { useEffect, useState } from "react";

function App() {
  const [fetchedData, setFetchedData] = useState([]);

  useEffect(() => {
    fetch("https://reqres.in/api/users")
      .then((response) => response.json())
      .then((responseData) => {
        console.log("🚀 -> file: App.js -> line 6 -> responseData", responseData.data);
        return setFetchedData(responseData.data);
      })
      // .catch((e) => console.log("🚀 -> file: App.js -> line 9 -> e", e.message));
    fetch("https://reqres.in/api/users", {
      method: "POST",
      body: {
        name: "testing",
        job: "development",
      },
    })
      .then((response) => response.json())
      .then((responseData) => {
        console.log("🚀 -> file: App.js -> line 6 -> responseData", responseData);
        // return setFetchedData(responseData.data);
      })
      .catch((e) => console.log("🚀 -> file: App.js -> line 9 -> e", e.message));
  }, []);
  // console.log("🚀 -> file: App.js -> line 5 -> fetchedData", fetchedData);
  return (
    <div>
      <h1>Hello dsu!</h1>
      {fetchedData?.length > 0 &&
        fetchedData.map((fd, i) => {
          return (
            <h2 key={"name"+ i}>
              {fd.first_name} : {fd.email}
            </h2>
          );
        })}
    </div>
  );
}

export default App;
