import "./dropDown.css";

export const DropDown = ({ options, onClick }) => {
  return (
    <ul className="dropdown-container">
      {options.map((option) => (
        <li
          className="list-style-none dropdown-option"
          key={option.value}
          onClick={() => {
            onClick(option.value);
          }}
        >
          {option.item}
        </li>
      ))}
    </ul>
  );
};
