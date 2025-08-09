import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faLinktree } from "@fortawesome/free-brands-svg-icons";

export default function FooterIcons() {
  return (
    <div className="flex gap-3">
      <a
        href="https://www.instagram.com/akcse.uoft/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faInstagram} className="text-2xl" />
      </a>
      <a
        href="https://linktr.ee/akcse.uoft"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faLinktree} className="text-2xl" />
      </a>
    </div>
  );
}
