import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import TextField from "@mui/material/TextField";
import "../assets/styles/Contact.scss";

function Contact() {
  const [result, setResult] = useState<string>("");

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setResult("Sending....");

    const formElement = event.currentTarget;
    const formData = new FormData(formElement);

    // Replace with your actual Web3Forms API key
    formData.append("access_key", "3693c1bf-e102-48e2-b291-f7178b372edf");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();

      if (data.success) {
        setResult("Form Submitted Successfully");
        formElement.reset();
      } else {
        console.error("Error", data);
        setResult(data.message || "An error occurred.");
      }
    } catch (error) {
      console.error("Error sending form", error);
      setResult("An error occurred while sending the form.");
    }
  };

  return (
    <Box className="contact-wrapper" id="contact">
      <Box className="contact-form-container">
        <h2 className="form-title">Contact Me</h2>
        <form onSubmit={onSubmit} className="contact-form">
          <TextField
            fullWidth
            label="Name"
            name="name"
            id="name"
            required
            sx={{ marginBottom: "1rem" }}
          />
          <TextField
            fullWidth
            label="Email"
            name="email"
            type="email"
            id="email"
            required
            sx={{ marginBottom: "1rem" }}
          />
          <TextField
            fullWidth
            label="Message"
            name="message"
            id="message"
            required
            multiline
            rows={4}
            sx={{ marginBottom: "1rem" }}
          />

          <Button
            variant="contained"
            type="submit"
            endIcon={<SendIcon />}
            sx={{ textTransform: "none", fontWeight: "bold" }}
          >
            Submit Form
          </Button>
        </form>

        {result && (
          <p className="submit-result">{result}</p>
        )}

       
      </Box>
    </Box>
  );
}

export default Contact;
