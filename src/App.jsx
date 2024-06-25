import { useState } from "react";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { QRCode } from "react-qrcode-logo";
import "./App.css";
import github from "./assets/github.png";
function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ name, email, message });
    setName("");
    setEmail("");
    setMessage("");
    setOpen(false);
  };

  return (
    <div className="business-card">
      <div className="card-content">
        <div className="left">
          <div>
            <p className="hashtag">#Name</p>
            <p className="info">Yinon maman</p>
            <p className="hashtag">#Profession</p>
            <p className="info">Programmer</p>
            <p className="hashtag">#Details</p>
            <p className="info">Phone: 050-4461479</p>
            <p className="info">Email: yinon231@gmail.com</p>
            <Button className="btn" variant="contained" onClick={handleOpen}>
              Contact me
            </Button>
            <Modal open={open} onClose={handleClose}>
              <Box className="modal-box">
                <p>#Contact Me</p>
                <form className="form" onSubmit={handleSubmit}>
                  <TextField
                    className="input"
                    label="Your Name"
                    variant="filled"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                  <TextField
                    className="input"
                    id="outlined-basic"
                    label="Your Email"
                    variant="filled"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <TextField
                    className="input"
                    id="filled-multiline-static"
                    label="Your Message"
                    variant="filled"
                    multiline
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                  />
                  <Button className="btn" type="submit" variant="contained">
                    Send
                  </Button>
                </form>
              </Box>
            </Modal>
          </div>
          <div className="social-links">
            <a
              href="https://github.com/yinon231"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={github} style={{ width: "30px", height: "30px" }} />
            </a>
          </div>
        </div>
        <div className="image-qrcode">
          <img
            className="personal-photo"
            src="https://lh3.googleusercontent.com/u/0/drive-viewer/AKGpihY-MbZiyNwX0VSyyGE43LrEtViEMzozL8ccpLA9D2SexWhiBpiBzhoGVlhfCFPPRtjtYKajzygE0V6X1enLkY5yS5S78uqV77Q=w1960-h2124-rw-v1"
          ></img>
          <div className="qr-code">
            <p className="scan-me">SCAN ME</p>
            <QRCode
              value="https://www.linkedin.com/in/yinon-maman-8a973b21b/"
              size={100}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;