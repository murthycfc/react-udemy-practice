import Content from "./components/Content"
import Header from "./components/Header"
import ThemeContextProvider from "./components/ThemeContext";

function App() {

  return (
    <>
      <ThemeContextProvider>
        <Header />
        <Content />
      </ThemeContextProvider>
    </>
  )
}

export default App
