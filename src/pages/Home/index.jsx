import { useContext } from "react";
import { Card } from "../../components/Card";
import { Layout } from "../../components/Layout";
import { ProductDetail } from "../../components/ProductDetail/index";
import { ShoppingCartContext } from "../../contexts";
import { SliderData } from "../../Slider/SliderData";
import Slider from "../../Slider/Slider";
// import { Nothing_related } from "./nothing_related_svg";

function Home() {
  const context = useContext(ShoppingCartContext);

  const renderView = () => {
    if (context.filteredItems?.length > 0) {
      return (
        <div className="grid place-items-center justify-center xl:gap-4 md:gap-3 sm:gap-2 xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 w-full max-w-screen-lg  m my-10">
          {context.filteredItems?.map((item) => {
            return <Card data={item} key={item.id} />;
          })}
        </div>
      );
    } else {
      return (
        <div className=" w-full h-full flex justify-center items-center flex-col">

            <p className=" font-semibold">Nothing related :(</p>
        </div>
      );
    }
  };
  return (
    <div className="my-5">
          <Slider slides={SliderData} />
    
      <Layout>
        <div className="flex items-center justify-center  relative w-80 mb-4 my-5">
          Home
        </div>
        <input
          className="rounded-lg border border-black w-80 p-4 mb-4 focus:outline-none"
          type="text"
          placeholder="Search a product"
          onChange={(event) => context.setSearchTitleBar(event.target.value)}
        />
        {renderView()}
        <ProductDetail></ProductDetail>
      </Layout>

    </div>
  );
}

export default Home;
