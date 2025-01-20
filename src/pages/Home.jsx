import { ComicList } from "../components/ComicList/ComicList";
import Header from "../components/Header/Header";


export default function Home() {
  return (
    <div>
        <Header
          title='Olá! Tudo bem?'
          subtitle='O que você irá ler hoje?'
        />
        <ComicList />
    </div>
  )
}
