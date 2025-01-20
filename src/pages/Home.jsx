import { useState, useEffect } from "react";
import { ComicList } from "../components/ComicList/ComicList";
import Header from "../components/Header/Header";
import comicsData from "../data/dados.js";
import './Home.scss'

export default function Home() {
  const [allComics, setAllComics] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulando uma requisição para obter os dados
    setTimeout(() => {
      setAllComics(comicsData); // Carregar os dados das HQs
      setLoading(false);
    }, 500); // Delay de 1 segundo para simular o carregamento
  }, []);


  return (
    <div>
      <Header 
      title='Olá! Tudo bem?'
          subtitle='O que você irá ler hoje?'
      />
      {loading ? (
        <p>Carregando...</p>
      ) : (
        <>
          {/* Seção: Todas as HQs */}
          <section className="container-hqs">
            <h2>Todas as HQs</h2>
            <ComicList comics={allComics} />
          </section>
        </>
      )}
    </div>
  );
}
