import { FaXTwitter, FaGithub, FaInstagram } from "react-icons/fa6"

const socials = [
  { name: "X", icon: <FaXTwitter />, url: "#" },
  { name: "GitHub", icon: <FaGithub />, url: "#" },
  { name: "Instagram", icon: <FaInstagram />, url: "#" },
]

export default function Footer() {
  return (
    <footer className="footer">
      {socials.map((social) => (
        <a
          key={social.name}
          href={social.url}
          target="_blank"
          rel="noreferrer"
          aria-label={social.name}
        >
          {social.icon}
        </a>
      ))}
    </footer>
  )
}