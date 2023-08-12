export async function callAPI() {
  const url = "http://localhost:5000/check-email";
  const data = "Subject: naturally irresistible your corporate...#	";

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "text/plain", // Use "text/plain" for plain text body
    },
    body: data,
  });

  if (response.ok) {
    const responseData = await response.text(); // Use response.text() to get the response content
    alert("API Response: " + responseData);
  } else {
    alert("Error calling API: " + response.status);
  }
}
