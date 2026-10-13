import { useState } from "react";

function ColorChanger() {
    const [background, setBackground] = useState<string>("#ffffff")

function newColorGenerator() {
    const newColor =
    "#" + Math.floor(Math.random()*16777215)
    .toString(16)
    .padStart(6, "0");

    setBackground(newColor);
}

return (
    <section
    style={{
        backgroundColor: background,
        minHeight: "100px"
    }}
    >
        <h2>Véletlenszerű háttérszín</h2>

        <p>Aktuális szín: {background}</p>

        <button onClick={newColorGenerator}>
    Új szín generálása
        </button>
    </section>
    )
}

export default ColorChanger;