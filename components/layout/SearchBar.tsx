import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

export default function SearchBar() {
  return (
    <FontAwesomeIcon
      icon={faMagnifyingGlass}
      className="cursor-pointer text-xl"
    />
    // <h1 className="hidden">Search</h1>
  );
}
