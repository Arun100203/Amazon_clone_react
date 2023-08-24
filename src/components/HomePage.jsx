import { Carousel, HomePageCard, CarouselCategory, CarouselProduct } from "./";
import { CarouselProduct2, CarouselProduct3, CarouselProduct4 } from "./";

const HomePage = () => {
  return (
    <div className="bg-amazonclone-background">
      <div className="min-w-[1000px] max-w-[1500px] m-auto">
    
        <Carousel />
        <div className="grid grid-cols-3 xl:grid-cols-4 -mt-80">
          <HomePageCard
            title={"Electronics"}
            img={"../images/grid_electronics.jpg"}
            link={"See more"}
          />
          <HomePageCard
            title={"Toys Under $30"}
            img={"../images/grid_toys.jpg"}
            link={"Shop now"}
          />
          <HomePageCard
            title={"Shop school essentials"}
            img={"../images/grid_school.jpg"}
            link={"See more"}
          />
          <HomePageCard
            title={"Home & Kitchen Under $30"}
            img={"../images/grid_kitchen.jpg"}
            link={"Shop now"}
          />
          <HomePageCard
            title={"Health & Personal Care"}
            img={"../images/grid_health_care.jpg"}
            link={"Shop now"}
          />
          <HomePageCard
            title={"Discover fashion trends"}
            img={"../images/grid_fashion.jpg"}
            link={"See more"}
          />
          <HomePageCard
            title={"Shop Laptops & Tablets"}
            img={"../images/grid_shop_laptops.jpg"}
            link={"See more"}
          />
          <HomePageCard
            title={"Home refersh ideas"}
            img={"../images/grid_home_refresh.jpg"}
            link={"Shop kitchen updates"}
          />
          <div className="m-3 pt-8">
            <img
              className="xl:hidden"
              src={"../images/banner_image_2.jpg"}
              alt="Banner 2"
            />
          </div>
        </div>
        <CarouselProduct />
        <CarouselCategory />

        <div className="grid grid-cols-3 xl:grid-cols-4 -mt-180">
          <HomePageCard
            title={"Beauty picks"}
            img={"../images/grid_beauty_picks.jpg"}
            link={"See more"}
          />
          <HomePageCard
            title={"Smartwatches"}
            img={"../images/grid_smart_watches.jpg"}
            link={"Shop now"}
          />
          <HomePageCard
            title={"Create with strip lights"}
            img={"../images/grid_strip_lights.jpg"}
            link={"See more"}
          />
          <HomePageCard
            title={"Shop Laptops & Tablets"}
            img={"../images/grid_shop_laptops.jpg"}
            link={"See more"}
          />
          
          <div className="m-3 pt-8">
            <img
              className="xl:hidden"
              src={"../images/banner_image_2.jpg"}
              alt="Banner 2"
            />
          </div>
        </div>

        <CarouselProduct2 />

        <div className="grid grid-cols-3 xl:grid-cols-4 -mt-180">
        <HomePageCard
            title={"Kindle E readers"}
            img={"../images/grid_kindle.jpg"}
            link={"Shop now"}
          />
          <HomePageCard
            title={"Deals in tools and improvement"}
            img={"../images/grid_home_tools.jpg"}
            link={"Shop now"}
          />
          <HomePageCard
            title={"Buy amazing deals"}
            img={"../images/grid_gadgets.jpg"}
            link={"See more"}
          />
          
          <HomePageCard
            title={"Home refersh ideas"}
            img={"../images/grid_home_refresh.jpg"}
            link={"Shop kitchen updates"}
          />
          </div>

          <CarouselProduct3 />

          <div className="grid grid-cols-3 xl:grid-cols-4 -mt-180">
          <HomePageCard
              title={"25% off on Shopbop sale"}
              img={"../images/grid_25offer.jpg"}
              link={"See more from Shopbop"}
            />
            <HomePageCard
              title={"Shop footwear deals on Shopbop"}
              img={"../images/grid_footwear.jpg"}
              link={"See more from Shopbop"}
            />
            <HomePageCard
              title={"Gadget Galore"}
              img={"../images/grid_gadget_galore.jpg"}
              link={"Shop electronic products"}
            />
            
            <HomePageCard
              title={"The pre-loved edit at Shopbag"}
              img={"../images/grid_shopbag.jpg"}
              link={"See more from Shopbop"}
            />
            </div>

            <CarouselProduct4 />

            <div className="grid grid-cols-3 xl:grid-cols-4 -mt-180">
          <HomePageCard
              title={"Hot deals upto 75% off"}
              img={"../images/grid_hot.jpg"}
              link={"Shop now"}
            />
            <HomePageCard
              title={"Spring new arrivals"}
              img={"../images/grid_spring.jpg"}
              link={"Discover more"}
            />
            <HomePageCard
              title={"Capture your memories"}
              img={"../images/grid_capture.jpg"}
              link={"See more"}
            />
            
            <HomePageCard
              title={"Style Shopbags"}
              img={"../images/grid_style.jpg"}
              link={"See more"}
            />
            </div>

        <div className="h-[200px]">
          <img
            className="h-[100%] m-auto"
            src={"../images/sixer.jpg"}
            alt="Banner 1"
          />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
