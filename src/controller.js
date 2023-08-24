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
    const url = "http://127.0.0.1:5000/check-email";
    if (emailBody !== "") {
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
    } else {
      alert("Enter an email");
    }
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

  const { label, probability_spam, probability_not_spam, email } = response;

  console.log(response);

  return (
    <div className="container m-3">
      <div className="row">
        <div className="col-8 mx-auto ">
          <div class="card" style={{ width: "auto" }}>
            <div class="card-body">
              <h5 class="card-title">Your Email</h5>
              <p class="card-text">{email}</p>
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">
                Probability email is spam: {probability_spam}%
              </li>
              <li class="list-group-item">
                Probability email is not spam: {probability_not_spam}%
              </li>
              <li class="list-group-item">
                {" "}
                Is this a spam: {label.toString()}
              </li>
            </ul>
            <div class="card-body">
              <p> Are you statisfy with results?</p>
              <a href="#" class="card-link">
                YES
              </a>
              <a href="#" class="card-link">
                NO
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
