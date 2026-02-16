import React from "react";
import "./App.css";
import { Button } from "react-bootstrap";
import Bunnies from "./BunniesKissing.webp";
function App(): React.JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                <h1>
                    UD CISC275 with React Hooks and TypeScript - Benjamin Zifcak
                </h1>
            </header>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload.
            </p>
            <div
                id="secretSection"
                onClick={() => {
                    var secret = document.getElementById("secretSection");
                    if (secret) {
                        if (secret.style.background == "pink") {
                            secret.style.background = "black";
                        } else {
                            secret.style.background = "pink";
                        }
                    }
                }}
            >
                Hello World
            </div>
            <div className="swag">
                <img
                    src={Bunnies}
                    alt="a photo of two bunnies kis sing"
                    height="200px"
                />
                <div style={{ margin: "5px" }}>
                    Reasons Bunnies are the best animal:
                    <ol>
                        <li>They are super duper soft</li>
                        <li>Bugs Bunny</li>
                        <li>Minecraft speed potion</li>
                    </ol>
                </div>
                <Button
                    onClick={() => {
                        console.log("Hello World!");
                    }}
                >
                    Log Hello World
                </Button>
                <div
                    style={{
                        background: "red",
                        height: "100px",
                        width: "50px",
                    }}
                />
            </div>
        </div>
    );
}

export default App;
