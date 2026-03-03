import React from "react";
import "./App.css";
import { Button } from "react-bootstrap";
import Bunnies from "./BunniesKissing.webp";
function App(): React.JSX.Element {
    return (
        <div className="App" id="app">
            <header className="App-header">
                <h1 id="header">
                    <a />
                    UD CISC275 with React Hooks and TypeScript - Benjamin Zifcak
                </h1>
            </header>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload.
            </p>

            <div className="swag">
                <img
                    id="BunnyiesImg"
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
                <div>
                    <Button
                        onClick={() => {
                            console.log("Hello World!");
                        }}
                    >
                        Log Hello World
                    </Button>
                </div>
                <div>
                    <button
                        style={{ margin: "10px" }}
                        onClick={() => {
                            const BunnyImg =
                                document.getElementById("BunnyiesImg");
                            const app = document.getElementById("app");
                            const header = document.getElementById("header");
                            if (BunnyImg) {
                                BunnyImg.setAttribute(
                                    "src",
                                    "https://th.bing.com/th/id/OIP.B7O3Yismtpaf99rI8VVsbAAAAA?w=115&h=180&c=7&r=0&o=7&dpr=1.2&pid=1.7&rm=3",
                                );
                            }
                            if (app) {
                                app.style.background = "black";
                            }
                            if (header) {
                                header.innerText = "Why Did you do that?";
                                header.style.color = "red";
                            }
                        }}
                    >
                        Kill Bunnies
                    </button>
                </div>
                <div
                    style={{
                        background: "red",
                        height: "100px",
                        width: "50px",
                    }}
                />
            </div>
            <div
                id="secretSection"
                onClick={() => {
                    const secret = document.getElementById("secretSection");
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
        </div>
    );
}

export default App;
