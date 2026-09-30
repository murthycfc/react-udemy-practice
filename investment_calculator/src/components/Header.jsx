import logo from "../assets/logo.jpg"

export default function Header(){
    return(
        <div className="text-center py-3 bg-light shadow-sm mb-4">
            <img src={logo} alt="investment calculator logo" style={{maxWidth:'80px'}}/>
            <h3 className="text-primary fw-bold ">Investment Calculator</h3>
        </div>
    )
}