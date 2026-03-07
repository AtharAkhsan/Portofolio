
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { EducationSkills } from './components/EducationSkills'
import { Projects } from './components/Projects'
import { Footer } from './components/Footer'

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground font-sans selection:bg-foreground selection:text-background">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <EducationSkills />
        <Projects />
      </main>
      <Footer />
    </div>
  )
}

export default App
