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
          <p> 2 x 2 = 4</p>
          <p> 3 x 3 = 9</p>
          <p> 4 x 4 = 16</p>
          <p> 5 x 5 = 25</p>
          <p> 6 x 6 = 36</p>
          <p> 7 x 7 = 49</p>
          
        </div>
      </main>
    </main>

  )
}