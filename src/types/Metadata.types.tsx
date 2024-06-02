 import OpenGraph from "./OpenGraph.types"
 
 interface Metadata {
   title: string
   description: string
   keywords: string
   metadataBase: URL
   alternates: {
     canonical: string
     languages: Record<string, string>
   }
   openGraph: OpenGraph
   twitter?: {
     card: string
     site: string
     creator: string
     title: string
     description: string
     images: URL[]
   }
 }

export default Metadata
