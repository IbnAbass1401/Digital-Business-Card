import { MdEmail } from "react-icons/md"
import { FaLinkedin } from "react-icons/fa"

export default function Contact() {
  return (
    <div className="contact">
      <a 
        className="btn email-btn"
        href="#"
        target="_blank" 
        rel="noreferrer"
        >
        <MdEmail /> Email
      </a>
      <a
        className="btn linkedin-btn"
        href="#"
        target="_blank"
        rel="noreferrer"
      >
        <FaLinkedin /> LinkedIn
      </a>
    </div>
  )
}