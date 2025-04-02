import { useState, useEffect } from "react"
import WebFont from "webfontloader"

// 👉 Nutze deine vorhandene Fontliste
const googleFonts = [
  "Roboto", "Open Sans", "Lato", "Montserrat", "Raleway", "Merriweather", "Playfair Display",
  "Poppins", "Ubuntu", "Source Sans Pro", "Oswald", "Noto Sans", "Noto Serif", "PT Sans",
  "PT Serif", "Rubik", "Inter", "Fira Sans", "Karla", "Work Sans", "Quicksand", "Bebas Neue",
  "Archivo", "Cabin", "DM Sans", "Mukta", "Nunito", "Crimson Pro", "Titillium Web", "Zilla Slab",
  "Assistant", "Heebo", "Tajawal", "Cairo", "Barlow", "Manrope", "Space Grotesk", "Syne",
  "Lexend", "Raleway Dots", "Inconsolata", "Anton", "Orbitron", "Abel", "Bitter", "Caveat",
  "Dancing Script", "Muli", "Varela Round", "Josefin Sans", "Cormorant Garamond", "Lora",
  "Play", "Prompt", "Signika", "Teko", "Urbanist", "Yeseva One", "Zeyada", "Kanit", "Jost"
]]

export default function FontPreview() {
  const [headingFont, setHeadingFont] = useState("Playfair Display")
  const [bodyFont, setBodyFont] = useState("Open Sans")
  const [text, setText] = useState("The quick brown fox jumps over the lazy dog.")

  useEffect(() => {
    WebFont.load({
      google: { families: [headingFont, bodyFont] },
    })
  }, [headingFont, bodyFont])

  return (
    <div style={{
      maxWidth: "700px",
      margin: "2rem auto",
      padding: "2rem",
      background: "#f9f9f9",
      borderRadius: "1rem",
      boxShadow: "0 5px 20px rgba(0,0,0,0.05)",
      fontFamily: "sans-serif"
    }}>
      <h1 style={{ fontSize: "1.75rem", marginBottom: "1.5rem" }}>
        🎨 Font Pairing Generator
      </h1>

      <label style={{ fontWeight: "bold" }}>example text</label>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="The quick brown fox jumps over the lazy dog."
        style={{
          padding: "0.6rem",
          width: "100%",
          marginBottom: "1.5rem",
          border: "1px solid #ccc",
          borderRadius: "0.5rem"
        }}
      />

      <div style={{ display: "flex", gap: "1rem", marginBottom: "1.5rem" }}>
        <div style={{ flex: 1 }}>
          <label style={{ fontWeight: "bold" }}>Heading-font</label>
          <select
            value={headingFont}
            onChange={(e) => setHeadingFont(e.target.value)}
            style={{
              width: "100%",
              padding: "0.5rem",
              borderRadius: "0.4rem",
              border: "1px solid #ccc"
            }}
          >
            {googleFonts.map((font) => (
              <option key={font} value={font}>{font}</option>
            ))}
          </select>
        </div>
        <div style={{ flex: 1 }}>
          <label style={{ fontWeight: "bold" }}>Body-font</label>
          <select
            value={bodyFont}
            onChange={(e) => setBodyFont(e.target.value)}
            style={{
              width: "100%",
              padding: "0.5rem",
              borderRadius: "0.4rem",
              border: "1px solid #ccc"
            }}
          >
            {googleFonts.map((font) => (
              <option key={font} value={font}>{font}</option>
            ))}
          </select>
        </div>
      </div>

      <hr style={{ margin: "2rem 0" }} />

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
