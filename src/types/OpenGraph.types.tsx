interface OpenGraph {
  title: string
  description: string
  type: string
  images?: Array<{
    url: URL
    width?: number
    height?: number
    alt?: string
  }>
  siteName?: string
  imageType?: string
  imageWidth?: number
  imageHeight?: number
}

export default OpenGraph
