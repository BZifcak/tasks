import React from "react";
import "./App.css";

function App(): React.JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript - Benjamin Zifcak
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
        </div>
    );
}

export default App;
