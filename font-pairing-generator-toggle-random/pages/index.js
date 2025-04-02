import dynamic from "next/dynamic"
import Head from "next/head"

const FontPreview = dynamic(() => import("../components/FontPreview"), {
  ssr: false,
})

export default function Home() {
  return (
    <>
      <Head>
        <title>Font Pairing Generator</title>
      </Head>
      <FontPreview />
    </>
  )
}
