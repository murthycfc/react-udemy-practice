
export default function Input({label, isTextArea,ref, ...props}){
    const style = "w-full p-1  rounded-md border-stone-300 bg-stone-200 text-stone-700 focus:outline-none  "

    return(
        <div className="flex flex-col gap-1 m-4">
            <label className="text-sm font-bold uppercase text-stone-500">{label}</label>
            {isTextArea ? 
                (<textarea ref={ref} className={style} {...props}/>) : 
                (<input ref={ref} className={style} {...props}/>)}
        </div>
    )
}