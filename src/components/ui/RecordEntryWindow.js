import React from "react";
import {
  Window,
  WindowHeader,
  Button,
  WindowContent,
  NumberField,
  TextField,
  Select,
  Toolbar,
} from "react95";
import { Link } from "react-router-dom";

export default class RecordEntryWindow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isDisplayingDatePicker: false,
    };
  }

  displayDatePicker() {
    this.setState({
      isDisplayingDatePicker: true,
    });
  }

  entryVerification() {
    //use email login requirements
    //console log an object
  }

  render() {
    return (
      <>
        <div>
          <Window className="windowColoring" style={{ width: 400 }}>
            <WindowHeader
              className="windowTopBar"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <h2>Record Entry (*＾▽＾) </h2>
              <Button
                style={{ marginRight: "-6px", marginTop: "1px" }}
                size={"sm"}
                square
              >
                <span
                  style={{ fontWeight: "bold", transform: "translateY(-1px)" }}
                >
                  x
                </span>
              </Button>
            </WindowHeader>
            <Toolbar>
              <Link to="/home-page">
                <Button
                  style={{ backgroundColor: "#cdcece" }}
                  variant="menu"
                  size="sm"
                >
                  back
                </Button>
              </Link>
            </Toolbar>
            <WindowContent>
              <p>amount</p>
              <NumberField
                style={{ backgroundColor: "white", marginBottom: 50 }}
                value={10}
                onChange={(value) => console.log(value)}
              />
              <div>
                <label htmlFor="email">Date</label>
                <TextField
                  style={{ backgroundColor: "white", marginBottom: 50 }}
                  type="email"
                />
              </div>

              {/* select buttons for categories  */}
            </WindowContent>
          </Window>
        </div>
      </>
    );
  }
}