import MainContent from "@/components/MainContent";
import ContentArticle from "@/components/Content";
import { ContentArticleProps } from "@/utils/types";
import Pokemon from "./pokemon/page";

const article: ContentArticleProps[] = [
  // { title: "Pasta", image: "/pasta.jpg", style: "nice" },
  // { title: "Matooke", image: "/matooke.jpg", style: "better" },
  // { title: "Sweet", image: "/sweet.jpg", style: "good" },
  // { title: "Rolex", image: "/rolex.jpg", style: "best" },
  // { title: "Posho", image: "/posho.jpg", style: "excellent" },
  // { title: "Rice", image: "/rice.jpg", style: "delicious" }
  { title: "Stunning", image: "/pokemon1.jpg", style: "nice" },
  { title: "Mwetwo", image: "/pokemon2.jpg", style: "better" },
  { title: "Character", image: "/pokemon3.jpg", style: "good" },
  { title: "Series", image: "/pokemon4.jpg", style: "best" },
  { title: "Generation", image: "/pokemon5.jpg", style: "excellent" },
  { title: "Famous", image: "/pokemon6.jpg", style: "delicious" }

]


export default function Home() {
  return (
    <>
      {/* <Pokemon/> */}
      {/* <MainContent data="Have you worked with sass yet" /> */}
      <div className="home-grid">
        {article.map((item: ContentArticleProps, index: number) => <ContentArticle key={index} {...item} />)}
      </div>
    </>
  );
}
