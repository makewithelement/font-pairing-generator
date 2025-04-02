
import { useState, useEffect } from "react"
import WebFont from "webfontloader"

const googleFonts = [
  "Roboto", "Open Sans", "Lato", "Montserrat", "Raleway", "Merriweather", "Playfair Display",
  "Poppins", "Ubuntu", "Source Sans Pro", "Oswald", "Noto Sans", "Noto Serif", "PT Sans",
  "PT Serif", "Rubik", "Inter", "Fira Sans", "Karla", "Work Sans", "Quicksand", "Bebas Neue",
  "Archivo", "Cabin", "DM Sans", "Mukta", "Nunito", "Crimson Pro", "Titillium Web", "Zilla Slab",
  "Assistant", "Heebo", "Tajawal", "Cairo", "Barlow", "Manrope", "Space Grotesk", "Syne",
  "Lexend", "Raleway Dots", "Inconsolata", "Anton", "Orbitron", "Abel", "Bitter", "Caveat",
  "Dancing Script", "Muli", "Varela Round", "Josefin Sans", "Cormorant Garamond", "Lora",
  "Play", "Prompt", "Signika", "Teko", "Urbanist", "Yeseva One", "Zeyada", "Kanit", "Jost"
]

const fontPairs = [
  ["Playfair Display", "Open Sans"],
  ["Montserrat", "Merriweather"],
  ["Roboto", "Roboto"],
  ["Raleway", "Lora"],
  ["Bebas Neue", "Open Sans"],
  ["Lato", "Crimson Pro"],
  ["DM Sans", "Fira Sans"],
  ["Oswald", "Inter"],
  ["Poppins", "PT Serif"],
  ["Titillium Web", "Varela Round"]
]

export default function FontPreview() {
  const [headingFont, setHeadingFont] = useState("Playfair Display")
  const [bodyFont, setBodyFont] = useState("Open Sans")
  const [text, setText] = useState("The quick brown fox jumps over the lazy dog.")
  const [darkMode, setDarkMode] = useState(true)

  const toggleTheme = () => setDarkMode(!darkMode)

  const randomizePair = () => {
    const random = fontPairs[Math.floor(Math.random() * fontPairs.length)]
    setHeadingFont(random[0])
    setBodyFont(random[1])
  }

  useEffect(() => {
    WebFont.load({
      google: { families: [headingFont, bodyFont] },
    })
  }, [headingFont, bodyFont])

  const colors = {
    background: darkMode ? "#121212" : "#fff",
    text: darkMode ? "#f1f1f1" : "#222",
    inputBg: darkMode ? "#1e1e1e" : "#f9f9f9",
    border: darkMode ? "#444" : "#ccc",
    label: darkMode ? "#aaa" : "#333",
  }

  return (
    <div style={{
      maxWidth: "700px",
      margin: "2rem auto",
      padding: "2rem",
      background: colors.background,
      borderRadius: "1rem",
      boxShadow: "0 5px 20px rgba(0,0,0,0.2)",
      fontFamily: "sans-serif",
      color: colors.text
    }}>
      <h1 style={{ fontSize: "1.75rem", marginBottom: "1.5rem" }}>
        🎨 Font Pairing Generator
      </h1>

      <button onClick={toggleTheme} style={{
        padding: "0.5rem 1rem",
        background: colors.inputBg,
        border: "1px solid " + colors.border,
        borderRadius: "0.5rem",
        marginBottom: "1rem",
        color: colors.text
      }}>
        Toggle {darkMode ? "Light" : "Dark"} Mode
      </button>

      <button onClick={randomizePair} style={{
        marginLeft: "1rem",
        padding: "0.5rem 1rem",
        background: "#0070f3",
        color: "#fff",
        border: "none",
        borderRadius: "0.5rem"
      }}>
        Random Pair
      </button>

      <label style={{ fontWeight: "bold", display: "block", marginTop: "1.5rem", color: colors.label }}>Sample Text</label>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="The quick brown fox jumps over the lazy dog."
        style={{
          padding: "0.6rem",
          width: "100%",
          marginBottom: "1.5rem",
          border: "1px solid " + colors.border,
          borderRadius: "0.5rem",
          background: colors.inputBg,
          color: colors.text
        }}
      />

      <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", marginBottom: "1.5rem" }}>
        <div style={{ flex: "1 1 200px" }}>
          <label style={{ fontWeight: "bold", marginBottom: "0.5rem", color: colors.label }}>Heading Font</label>
          <select
            value={headingFont}
            onChange={(e) => setHeadingFont(e.target.value)}
            style={{
              width: "100%",
              padding: "0.5rem",
              borderRadius: "0.4rem",
              border: "1px solid " + colors.border,
              background: colors.inputBg,
              color: colors.text
            }}
          >
            {googleFonts.map((font) => (
              <option key={font} value={font}>{font}</option>
            ))}
          </select>
        </div>
        <div style={{ flex: "1 1 200px" }}>
          <label style={{ fontWeight: "bold", marginBottom: "0.5rem", color: colors.label }}>Body Font</label>
          <select
            value={bodyFont}
            onChange={(e) => setBodyFont(e.target.value)}
            style={{
              width: "100%",
              padding: "0.5rem",
              borderRadius: "0.4rem",
              border: "1px solid " + colors.border,
              background: colors.inputBg,
              color: colors.text
            }}
          >
            {googleFonts.map((font) => (
              <option key={font} value={font}>{font}</option>
            ))}
          </select>
        </div>
      </div>

      <hr style={{ margin: "2rem 0", borderColor: colors.border }} />

      <div>
        <h2 style={{
          fontFamily: headingFont,
          fontSize: "1.6rem",
          marginBottom: "1rem"
        }}>
          {text}
        </h2>
        <p style={{
          fontFamily: bodyFont,
          fontSize: "1.1rem",
          lineHeight: "1.7"
        }}>
          {text}
        </p>
      </div>
    </div>
  )
}
