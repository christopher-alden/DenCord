
type ImageProps = {
    src: string
    attributes?: string,
    imgAttributes?:string,
    
}
const Image = ({src, attributes, imgAttributes}:ImageProps) =>(
    <div className={` ${attributes}`}>
        <img src={src} alt={src} className={`w-full h-full object-cover ${imgAttributes}`}/>
    </div>
)

export default Image