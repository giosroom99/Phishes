import React, { useState } from "react";
import axios from "axios";

export async function callAPI() {
  const url = "http://localhost:5000/check-email";
  const data = "Subject: naturally irresistible your corporate...#	";

  const response = await axios.post(url, data, {
    headers: {
      "Content-Type": "text/plain",
    },
  });

  if (response.status === 200) {
    const responseData = await response.data;
    alert("API Response: " + responseData);
  } else {
    alert("Error calling API: " + response.status);
  }
}

export const AppI = () => {
  const [data, setData] = useState("");

  const handleClick = () => {
    const url = "http://localhost:5000/check-email";
    const data = "Subject: naturally irresistible your corporate...#	";

    axios
      .post(url, data, {
        headers: {
          "Content-Type": "text/plain",
        },
      })
      .then((response) => {
        if (response.status === 200) {
          alert(response.data);
          setData(response.data);
        } else {
          alert("Error calling API: " + response.status);
        }
      });
  };

  return (
    <div>
      <button onClick={handleClick}>Call API</button>
      <div>{data}</div>
    </div>
  );
};
