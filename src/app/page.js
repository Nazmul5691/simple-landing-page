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

        <div>
          <p> 1 x 1 = 1</p>
          
        </div>
      </main>
    </main>

  )
}