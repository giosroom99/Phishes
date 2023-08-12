import "./App.css";
import { useState } from "react";
import { callAPI } from "./controller";

export function Header() {
  return (
    <div className="row">
      <div className="col-8 mx-auto pt-4">
        <h1 className="fw-bold"> Phishes</h1>
        <p>There are lots of fishes in the ocean, Can you spot the bad one?</p>
        <p className>Let Phishes help you</p>
      </div>
    </div>
  );
}
function MyForm() {
  const [emailBody, setEmailBody] = useState("");
  console.log(emailBody);
  return (
    <div className="row">
      <div className=" col-9 mx-auto">
        <form>
          <div class="mb-3">
            <label for="exampleFormControlTextarea1" class="form-label">
              Enter your Email Body here:
            </label>
            <textarea
              class="form-control m-1"
              id="exampleFormControlTextarea1"
              rows="3"
              onChange={(e) => setEmailBody(e.target.value)}
            ></textarea>
            <button
              className="btn btn-primary m-3"
              type="submit"
              onClick={() => callAPI()}
            >
              Check
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

function ResponseArea() {
  return (
    <div className="container">
      <p className="" id="prediction-id">
        Is this a spam:{" "}
      </p>
      <p className="" id="confidence-id">
        Confidence rate:{" "}
      </p>
      <p className="" id="accuracy-id">
        Accuracy rate:{" "}
      </p>
    </div>
  );
}

function App() {
  return (
    <div className="App container">
      <Header />
      <MyForm />
      <ResponseArea />
    </div>
  );
}

export default App;

