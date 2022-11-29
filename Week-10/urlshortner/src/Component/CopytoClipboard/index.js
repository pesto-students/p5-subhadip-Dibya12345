import React from "react";
import { FiCopy, FiCheck } from "react-icons/fi";
import "./style.css";
export default class CopyExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = { copySuccess: "" };
  }

  copyToClipboard = (e) => {
    this.textArea.select();
    document.execCommand("copy");
    e.target.focus();
    this.setState({ copySuccess: "Copied!" });
  };

  render() {
    return (
      <div className="clipboard">
        <form>
          <textarea
            className="dan"
            ref={(textarea) => (this.textArea = textarea)}
            value={this.props.my}
          />
        </form>
        {document.queryCommandSupported("copy") && (
          <div>
            {this.state.copySuccess ? (
              <FiCheck />
            ) : (
              <button onClick={this.copyToClipboard}>
                <FiCopy />
              </button>
            )}
          </div>
        )}
      </div>
    );
  }
}
