import Accordion from "./components/Accordion";
import Banner from "./components/Banner";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <main>
      <header>
        <Navbar />
      </header>

      <main>
        <Banner/>
        
        {/* added in experimental branch */}
        <Accordion />
      </main>
    </main>

  )
}