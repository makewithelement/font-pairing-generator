import { useState, useEffect } from "react"
import Head from "next/head"
import WebFont from "webfontloader"

const googleFonts = [
  "Roboto",
  "Open Sans",
  "Lato",
  "Montserrat",
  "Raleway",
  "Merriweather",
  "Playfair Display",
  "Poppins",
  "Ubuntu",
  "Source Sans Pro",
  "Oswald"
]

export default function Home() {
  const [headingFont, setHeadingFont] = useState("Roboto")
  const [bodyFont, setBodyFont] = useState("Open Sans")
  const [text, setText] = useState("Lorem ipsum dolor sit amet.")
  const [generated, setGenerated] = useState(false)

  useEffect(() => {
    WebFont.load({
      google: {
        families: [headingFont, bodyFont],
      },
    })
  }, [headingFont, bodyFont, generated])

  return (
    <div style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <Head>
        <title>Font Pairing Generator</title>
      </Head>
      <h1 style={{ fontSize: "2rem", fontWeight: "bold" }}>Font Pairing Generator</h1>

      <div style={{ display: "flex", gap: "1rem", marginTop: "1rem" }}>
        <div>
          <label>Heading Font</label>
          <select value={headingFont} onChange={(e) => setHeadingFont(e.target.value)}>
            {googleFonts.map((font) => (
              <option key={font} value={font}>{font}</option>
            ))}
          </select>
        </div>
        <div>
          <label>Body Font</label>
          <select value={bodyFont} onChange={(e) => setBodyFont(e.target.value)}>
            {googleFonts.map((font) => (
              <option key={font} value={font}>{font}</option>
            ))}
          </select>
        </div>
      </div>

      <div style={{ marginTop: "1rem" }}>
        <label>Beispieltext</label>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Gib deinen Beispieltext ein"
          style={{ display: "block", padding: "0.5rem", width: "100%", maxWidth: "400px" }}
        />
      </div>

      <button
        onClick={() => setGenerated(!generated)}
        style={{ marginTop: "1rem", padding: "0.5rem 1rem", background: "black", color: "white" }}
      >
        Generieren
      </button>

      {generated && (
        <div style={{ marginTop: "2rem" }}>
          <h2 style={{ fontFamily: headingFont, fontSize: "1.5rem" }}>{text}</h2>
          <p style={{ fontFamily: bodyFont }}>{text}</p>
        </div>
      )}
    </div>
  )
}
