import React, {useEffect, useState} from 'react';
import BannerMain from "../../components/BannerMain"
import Carousel from "../../components/Carousel"
import categoryRepository from "../../repositories/categorias";
import PageDefault from '../../components/PageDefault/PageDefault';


function App() {

  const [dadosIniciais, setDadosIniciais] = useState([])

  // ============
  useEffect(() => {
    categoryRepository.getAllWithVideos().then((cat)=>{
      //console.log(cat);
      setDadosIniciais(cat)
    })
    .catch((err)=>{
      console.log(err.message);
    })
        
  }, []);
  // ============

  return (
    <PageDefault paddingAll={0}>

      {dadosIniciais.length === 0 && (<div>Loading...</div>)}
      {dadosIniciais.map((categoria,index)=>{
        if (index ===0) {
          return (
            <div key={categoria.id}>
              <BannerMain
                  videoTitle={dadosIniciais[0].videos[0].titulo}
                  url={dadosIniciais[0].videos[0].url}
                  videoDescription={"O que é front-end? Trabalhando na área"}
              />
              <Carousel
                ignoreFirstVideo
                category={dadosIniciais[0]}
              />
           </div>
          )
        }

        return(
          <Carousel
            key={categoria.id}
            category={categoria}
          />
        )
      })}
       
      
     
     
    
    </PageDefault>
    
  )
}

export default App;
