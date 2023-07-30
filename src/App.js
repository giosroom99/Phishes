import "./App.css";
import { useState } from "react";

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
              class="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
              onChange={(e) => setEmailBody(e.target.value)}
            ></textarea>
          </div>
        </form>
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="App container">
      <Header />
      <MyForm />
    </div>
  );
}

export default App;
