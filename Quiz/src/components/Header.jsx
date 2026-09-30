import logo from '../assets/images.jpg'

export default function Header(){
    return(
        <>
        <header className="d-flex flex-column align-items-center text-center py-4">
            <img className="mb-3" src={logo} alt="quiz logo" style={{ width: '80px', height: 'auto' }} />
            <h1 className="fw-bold">React Quiz</h1>
        </header>
    </>

    )
}