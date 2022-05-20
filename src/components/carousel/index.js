import { Carousel } from "antd";

function CarouselComponent({ data }) {
   return (
      <Carousel autoplay>
         {data.map((item, key) => {
            return (
               <div key={key}> 
                  <h3 style={contentStyle}>{item}</h3>
               </div>
            );
         })}
      </Carousel>
   );
}

export default CarouselComponent;

const contentStyle = {
   height: "500px",
   color: "#fff",
   lineHeight: "160px",
   textAlign: "center",
   background: "#364d79",
};
