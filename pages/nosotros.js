import Link from "next/link"
import Layout from "@/components/layout"

export default function Nosotros() {
  return (
    <Layout
        title={"Nosotros"}
        description="Sobre nosotros, guitarLA, tienda de música"
    >
        <div>Desde nosotros.js</div>

        <Link href="/">Inicio</Link>
    </Layout>
    
  )
}
