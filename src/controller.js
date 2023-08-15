import React, { Component } from "react";
import axios from "axios";

class MyComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      responseText: "", // To store the API response text
    };
  }

  callAPI = () => {
    const url = "http://localhost:5000/check-email";
    const data = "Subject: naturally irresistible your corporate...#";

    fetch(url, {
      method: "POST",
      body: data,
      headers: {
        "Content-Type": "text/plain",
      },
    })
      .then((response) => response.json()) // Parse the JSON response
      .then((result) => {
        const cleanedData = result.cleaned_data; // Extract cleaned_data from the response
        this.setState({ responseText: cleanedData }); // Update the component's state
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  render() {
    return (
      <div>
        <button onClick={this.callAPI}>Call API</button>
        <div>
          <p>API Response:</p>
          <pre>{this.state.responseText}</pre>
        </div>
      </div>
    );
  }
}

export default MyComponent;
