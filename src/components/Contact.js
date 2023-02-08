
import React, { useState } from "react";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Name: ${name}, Email: ${email}, Phone: ${phone}`);
    setName("");
    setEmail("");
    setPhone("");
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.header}>Contact Me</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <label style={styles.label}>
          Name:
          <input
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
            style={styles.input}
          />
        </label>
        <br />
        <label style={styles.label}>
          Email:
          <input
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            style={styles.input}
          />
        </label>
        <br />
        <label style={styles.label}>
          Phone:
          <input
            type="tel"
            value={phone}
            onChange={(event) => setPhone(event.target.value)}
            style={styles.input}
          />
        </label>
        <br />
        <button style={styles.button}>Submit</button>
      </form>
      <p style={styles.contactDetails}>
        Contact Number: +355 697788925 <br />
        Email: marselkutrolli404@gmail.com
      </p>
    </div>
  );
}

const styles = {
    container: {
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: 20,
        backgroundColor: "#F1F1F1",
        boxShadow: "0px 0px 10px #BBBBBB",
        borderRadius: 10,
        marginTop: 20,
        marginBottom: 20,
      },
      header: {
        fontSize: 30,
        marginBottom: 20,
        textTransform: "uppercase",
        fontWeight: "bold",
      },
      form: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "80%",
      },
      label: {
        fontSize: 20,
        marginBottom: 10,
    },
    contactDetails: {
        fontFamily: "sans-serif",
        fontSize: "1rem",
        fontWeight: "bold",
    },
  input: {
    width: "100%",
    marginTop: 10,
    marginBottom: 10,
    fontSize: 20,
    borderRadius: 5,
    border: "1px solid #222",
    letterSpacing: "0.1rem",
    color: "#222",
    padding: "0.50rem 1.8rem",
  },
  button: {
    padding: 10,
    backgroundColor: "#4CAF50",
    color: "white",
    border: "none",
    borderRadius: 5,
    cursor: "pointer",
  },
};
export default Contact;