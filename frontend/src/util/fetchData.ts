const API_URL = "http://localhost:5000";

export async function fetchData(input: RequestInfo, init?: RequestInit) {
  const response = await fetch(`${API_URL}${input}`, init);
  if (response.ok) {
    return response;
  } else {
    const errorBody = await response.json();
    const errorMessage = errorBody.error;

    throw Error(errorMessage);
  }
}
