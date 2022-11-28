import "./styles.css";

const UrlInput = (props) => {
  return (
    <div className="url-input-container">
      <input
        placeholder={props.placeholder}
        onChange={props.onChange}
        value={props.value}
        className={!props.validated ? "error" : ""}
      />
      {!props.validated && (
        <div className="error-text">{props.validationText}</div>
      )}
    </div>
  );
};

export { UrlInput };
