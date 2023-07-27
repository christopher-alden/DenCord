
type ImageProps = {
    src: string
    attributes?: string,
    
}
const Image = ({src, attributes}:ImageProps) =>(
    <div className={` ${attributes}`}>
        <img src={src} alt={src} className="w-full h-full object-cover object-center" />
    </div>
)

export default Image