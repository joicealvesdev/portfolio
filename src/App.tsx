import { useEffect, useState } from 'react'
import { ArrowUpRight, BriefcaseBusiness, Camera, Code2, Mail, Moon, PlaySquare, Sun } from 'lucide-react'

import profileImage from '../assets/eu-perfil.png'

type Theme = 'light' | 'dark'

const technologyGroups = [
  {
    name: 'Front-end',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'React', 'Expo', 'Vue.js', 'Vite'],
  },
  {
    name: 'Back-end',
    technologies: ['Node.js', 'Express.js', 'Prisma', 'MongoDB', 'React Native'],
  },
  {
    name: 'Design',
    technologies: ['Figma', 'GIMP'],
  },
]

const socialLinks = [
  { label: 'GitHub', url: 'https://github.com/joicealvesdev', icon: Code2 },
  { label: 'LinkedIn', url: 'https://www.linkedin.com/in/joice-alves-dev0101', icon: BriefcaseBusiness },
  { label: 'Instagram', url: 'https://www.instagram.com', icon: Camera },
  { label: 'YouTube', url: 'https://www.youtube.com/@joice2003', icon: PlaySquare },
]

function App() {
  const [theme, setTheme] = useState<Theme>(() => {
    const savedTheme = localStorage.getItem('portfolio-theme')
    return savedTheme === 'dark' ? 'dark' : 'light'
  })

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    localStorage.setItem('portfolio-theme', theme)
  }, [theme])

  const toggleTheme = () => setTheme((currentTheme) => (currentTheme === 'light' ? 'dark' : 'light'))

  return (
    <div className="page-shell">
      <header className="site-header container">
        <a className="brand" href="#inicio" aria-label="Ir para o início">JA<span>.</span></a>
        <nav className="main-nav" aria-label="Navegação principal">
          <a href="#sobre">Sobre mim</a>
          <a href="#contato">Contato</a>
        </nav>
        <button className="theme-button" onClick={toggleTheme} aria-label="Alternar tema">
          {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
        </button>
      </header>

      <main>
        <section className="hero container" id="inicio">
          <div className="hero-copy">
            <p className="eyebrow">Olá, eu sou a Joice Alves</p>
            <h1>Ideias que ganham <em>vida</em> na tela.</h1>
            <p className="hero-text">Sou desenvolvedora front-end e estudante de Análise e Desenvolvimento de Sistemas. Crio experiências visuais funcionais, acessíveis e responsivas.</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#sobre">Conheça meu processo <ArrowUpRight size={17} /></a>
              <a className="button button-secondary" href="https://www.linkedin.com/in/joice-alves-dev0101" target="_blank" rel="noreferrer"><Mail size={17} /> Vamos conversar</a>
            </div>
            <p className="availability"><span /> Aberta a oportunidades de estágio e junior</p>
          </div>
          <div className="portrait-wrap">
            <div className="portrait-note">front-end<br />developer</div>
            <img src={profileImage} alt="Joice Alves" className="portrait" />
            <div className="portrait-outline" />
          </div>
        </section>

        <section className="intro-band" id="sobre">
          <div className="container intro-grid">
            <p className="section-kicker">01 / sobre mim</p>
            <div>
              <h2>Construo com curiosidade, cuidado e intenção.</h2>
              <p className="body-copy">A tecnologia me encanta porque transforma uma ideia em algo que pode ser experimentado por qualquer pessoa. No meu processo, gosto de entender o problema, cuidar dos detalhes e aprender algo novo em cada projeto.</p>
              <p className="body-copy">Aqui você encontra um pouco da minha trajetória, dos meus estudos e das tecnologias que fazem parte do meu crescimento como desenvolvedora.</p>
            </div>
          </div>
        </section>

        <section className="skills-section container">
          <div className="section-heading"><p className="section-kicker">02 / tecnologias</p><h2>Tecnologias que eu utilizo</h2></div>
          <div className="technology-groups">{technologyGroups.map((group) => <div className="technology-group" key={group.name}><h3>{group.name}</h3><div className="technology-list">{group.technologies.map((technology) => <span key={technology}>{technology}</span>)}</div></div>)}</div>
        </section>

        <section className="contact-section" id="contato"><div className="container contact-content"><div><p className="section-kicker">03 / contato</p><h2>Vamos criar algo<br /><em>bacana</em> juntos?</h2></div><a className="contact-link" href="https://www.linkedin.com/in/joice-alves-dev0101" target="_blank" rel="noreferrer">LinkedIn <ArrowUpRight size={20} /></a></div></section>
      </main>

      <footer className="site-footer container"><p>Feito com cuidado por <strong>Joice Alves</strong></p><div className="social-links">{socialLinks.map(({ label, url, icon: Icon }) => <a key={label} href={url} target="_blank" rel="noreferrer" aria-label={label}><Icon size={18} /></a>)}</div><p className="footer-year">© {new Date().getFullYear()}</p></footer>
    </div>
  )
}

export default App