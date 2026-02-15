import React from "react";
import "./App.css";
import { Button } from "react-bootstrap";

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
                        if (secret.style.background == "white") {
                            secret.style.background = "black";
                        } else {
                            secret.style.background = "white";
                        }
                    }
                }}
            >
                Hello World
            </div>
            <img src="/BunniesKissing" alt="a photo of two bunnies kissing" />
            Reasons Bunnies are the best animal:
            <ol>
                <li>They are super duper soft</li>
                <li>Bugs Bunny</li>
                <li>Minecraft speed potion</li>
            </ol>
            <Button
                onClick={() => {
                    console.log("Hello World!");
                }}
            >
                Log Hello World
            </Button>
        </div>
    );
}

export default App;
