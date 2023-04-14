import Image from "next/image"
import Layout from "@/components/layout"
import styles from "../styles/nosotros.module.css"

export default function Nosotros() {
  return (
    <Layout
        title={"Nosotros"}
        description="Sobre nosotros, guitarLA, tienda de música"
    >
    
      <main className="contenedor">
          <h1 className="heading">Nosotros</h1>
          <div className={styles.contenido}>
            <Image 
              alt="Imagen sobre nosotros"
              src="/img/nosotros.jpg"
              width={1000}
              height={800}
            />
            <div>
                <p> 
                    Lorem ipsum dolor sit amet, consectetur adipiscing    elit. Vivamus faucibus arcu lectus, sit amet congue arcu dictum ac. Curabitur maximus mattis dignissim. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed molestie 
                </p>
                <p>
                    Donec porttitor pretium lacus, ac sodales purus commodo sed. Fusce id sapien non mi viverra tincidunt. Aliquam placerat rutrum porttitor. Vestibulum luctus arcu magna, eget placerat  
                </p>
            </div>
          </div>
      </main>
    </Layout>
    
  )
}
