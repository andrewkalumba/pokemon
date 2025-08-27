import Image from "next/image";
import { ContentArticleProps } from "@/utils/types";


const ContentArticle = ({ title, image, style }: ContentArticleProps) => {
  return (
    <div className={`home-grid__article ${style}`}>
      <h1 className="pageTitle">{title}</h1>
      <Image src={image} alt={title} width={200} height={200} />
    </div>
  );
};

export default ContentArticle;

