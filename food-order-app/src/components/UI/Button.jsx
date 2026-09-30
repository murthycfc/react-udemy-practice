
export default function Button({children, textOnly, css, ...props}){
    let cssClasses = textOnly ? 'text-button' : 'button';
    cssClasses+= ' '+ css;
    return (
        <button className={cssClasses} {...props}>
            {children}
        </button>
    )
}