import React, { Component } from "react";

class MyComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      response: null, // To store the API response data
      emailBody: "", // To store the entered email body
    };
  }

  callAPI = (emailBody) => {
    const url = "https://giosroom.pythonanywhere.com/check-email";

    fetch(url, {
      method: "POST",
      body: emailBody, // Use the email body from the form
      headers: {
        "Content-Type": "text/plain",
      },
    })
      .then((response) => response.json())
      .then((result) => {
        this.setState({ response: result }); // Store the entire response object
      })
      .catch((error) => {
        alert("Error:", error);
      });
  };

  handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission
    this.callAPI(this.state.emailBody); // Call the API with the entered email body
  };

  render() {
    return (
      <div>
        <div className="col-9 mx-auto">
          <form onSubmit={this.handleSubmit}>
            <div className="mb-3">
              <label
                htmlFor="exampleFormControlTextarea1"
                className="form-label"
              >
                Enter your Email Body here:
              </label>
              <textarea
                className="form-control m-1"
                id="exampleFormControlTextarea1"
                rows="3"
                value={this.state.emailBody} // Set the value from the state
                onChange={(e) => this.setState({ emailBody: e.target.value })} // Update state on change
              ></textarea>
              <button className="btn btn-primary m-3" type="submit">
                Check
              </button>
            </div>
          </form>
        </div>

        <ResponseArea response={this.state.response} />
      </div>
    );
  }
}

export default MyComponent;

function ResponseArea(props) {
  const { response } = props;

  if (!response) {
    return null; // If no response, don't render anything
  }

  const { Spam, Confidence_rate, Accuracy_rate } = response;

  console.log(response);

  return (
    <div className="container m-3">
      <div className="row">
        <div className="col-5 mx-auto">
          <div
            className={`alert ${
              Spam ? "alert-danger" : "alert-success"
            } fw-bold fs-6`}
            role="alert"
          >
            Is this a spam: {Spam.toString()}
          </div>
          <div className="alert alert-primary fw-bold fs-6" role="alert">
            Confidence rate: {Confidence_rate}
          </div>
          <div className="alert alert-primary fw-bold fs-6" role="alert">
            Accuracy rate: {Accuracy_rate}
          </div>
        </div>
      </div>
    </div>
  );
}
