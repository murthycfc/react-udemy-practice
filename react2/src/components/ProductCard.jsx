
export default function ProductCard({header, image, footer, children, className}){
    return(
        <div className={className}>
            <div className="mb-3">
                {header}
            </div>
            <div className="mb-3">
                {image}
            </div>
            <div>
                {children}
            </div>
            <div className="mt-3">
                {footer}
            </div>
        </div>
    )
}