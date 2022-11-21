import { Video } from "../../assets/images/images";

export const MainContent = () => {
   return(
   <section className="main__content">
      <div className="content__header">
         <h2 className="content__header-title title">Awesome experiences with virtual reality world</h2>
         {/* <!--У процесі img буде змінено на video--> */}
         <img src={Video} className="content__video" alt=""/>
      </div>
   </section>
   );
}
