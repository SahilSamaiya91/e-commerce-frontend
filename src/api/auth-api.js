const BASE_URL = "http://localhost:8080/v1/api";

export const registerUser = async (userData) => {
  try {
    const response = await fetch(`${BASE_URL}/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });

    if (!response.ok) {
      // Extract error message from response JSON if available
      let message = "Registration Failed";

      try {
        const data = await response.json();
        if (data?.message) message = data.message;
      } catch (err) {
        // fallback to text
        const text = await response.text();
        if (text) message = text;
      }

      throw new Error(message); // note capital E
    }

    return await response.json(); // AuthResponse: { token, email, firstname }
  } catch (err) {
    // Re-throw to let the frontend handler catch it
    throw err;
  }
};

export const loginUser = async (userData) => {
  try {
    const response = await fetch(`${BASE_URL}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });

    if (!response.ok) {
      const error = await response.json();
      if(error.status == 503) {
        error.message = "Services Are Down";
      }
      error.message = "Login Failed";
    }

    return await response.json();
  } catch (error) {
    console.error("Login error:", error.message);
    throw error;
  }
};
