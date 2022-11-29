import React from "react";
import "./Home.css";
import { getError } from "../../pages/utils/ErrorHandlers";
import * as apis from "./../../apis";
import { validateurl } from "../../pages/utils/ValidateUrl";
import "./Home.css";
import { UrlInput } from "../../Component/InputComponents";
import CopytoClipboard from "../../Component/CopytoClipboard";
export default class Home extends React.Component {
  state = {
    inputUrl: "",
    outputUrl: "",
    loading: false,
    error: ""
  };

  handleUrlChange = (e) => {
    this.setState({ inputUrl: e.target.value });
  };
  handleShortenUrlClick = async () => {
    this.setState({ loading: true });
    try {
      const response = await apis.getShortenUrl(this.state.inputUrl);
      this.setState({ outputUrl: response.result.short_link });
      this.setState({ validate: false });
    } catch (error) {
      const err = getError(error);
      this.setState({ error: err });
    }
    this.setState({ loading: false });
  };
  render() {
    const validated = validateurl(this.state.inputUrl);

    return (
      <div className="Home">
        <div className="homie">
          <div className="home-text">
            <h2>
              Turn your url into short
              <div className="mask">
                <span>and simple</span>
              </div>
            </h2>
          </div>
          <div className="home-container">
            <div className="home">
              <div className="home-container">
                <UrlInput
                  type="text"
                  value={this.state.inputUrl}
                  onChange={this.handleUrlChange}
                  placeholder="Enter Url"
                  validated={this.state.inputUrl ? validated : true}
                  validationText="Enter a valid url"
                />
                <button
                  onClick={this.handleShortenUrlClick}
                  disabled={this.state.loading}
                >
                  {this.state.loading ? "Working..." : "Shorten Url"}
                </button>
              </div>
              <div className="output">
                {this.state.outputUrl ? (
                  <CopytoClipboard my={this.state.outputUrl} />
                ) : null}
              </div>
              {this.state.error && (
                <div className="no-param" style={{ color: "red" }}>
                  {this.state.error}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
