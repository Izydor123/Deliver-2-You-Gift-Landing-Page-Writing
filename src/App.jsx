import './App.css'
import Header from './components/Header'
import Product from './components/Product'
import ProductsList from './components/ProductsList'
import Catalogue from './components/Catalogue'
import Footer from './components/Footer'
import imageMain from './assets/skinset.jpg'
import image1 from './assets/penwood.jpg'
import image2 from './assets/penwood2.jpg'
import image3 from './assets/blackpencil.jpg'
import image4 from './assets/setwood.jpg'

function App() {

  return (
    <section className='app'>
      <Header title="Escrita" desc1="Explore a seleção de materiais de escrita que une funcionalidade e elegância." desc2="Desde canetas sofisticadas até lápis práticos e modernos, oferecemos ferramentas perfeitas para soltar a sua criatividade e trazer excelência ao seu dia a dia."/>
      <Product
       image={imageMain} 
       title="Set Niveum: Elegância e Sofisticação em Pormenor" 
       desc1="O Set Niveum representa o encontro perfeito entre funcionalidade e design refinado. Composto por duas canetas elegantes e um estojo em couro sintético, este conjunto é ideal para profissionais e entusiastas que valorizam pormenores e estilo."
       desc2="Fabricado em materiais de alta qualidade - poliuretano (PU) e metal - o conjunto combina durabilidade com um aspeto contemporâneo e sofisticado. Com um diâmetro compacto de 13,6 cm e um peso leve, torna-se um acessório prático e discreto para qualquer ocasião."
       link="https://generalcatalogue2025.eu/deliver2yougift/#page/455"/>
      <ProductsList 
        data={[
        {id:1, text:"Esferografica Ponteiro Fobox", link:"https://generalcatalogue2025.eu/deliver2yougift/#page/441", image:image1},
        {id:2, text:"Lapis Eterno Soiny", link:"https://generalcatalogue2025.eu/deliver2yougift/#page/437", image:image2},
        {id:3, text:"Esferografica Bropex", link:"https://generalcatalogue2025.eu/deliver2yougift/#page/471", image:image3},
        {id:4, text:"Estojo Marfik", link:"https://generalcatalogue2025.eu/deliver2yougift/#page/476", image:image4},
        ]}
        title="Outros produtos desta categoria"/>
      <Catalogue text="Conheça os nossos outros produtos associados à escrita" link="https://generalcatalogue2025.eu/deliver2yougift/#page/414  "/>
      <Footer/>
    </section>
  )
}

export default App
