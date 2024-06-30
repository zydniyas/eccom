import { Carousel, Flowbite } from "flowbite-react";

const customTheme = {
  carousel: {
    scrollContainer: {
      base: "flex h-full snap-mandatory overflow-y-hidden overflow-x-scroll scroll-smooth", // Removed 'rounded-lg'
    },
  },
};

function Hero() {
  return (
    <Flowbite theme={{ theme: customTheme }}>
      <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
        <Carousel
          className="overflow-hidden h-[580px]"
          onSlideChange={(index) => console.log("onSlideChange()", index)}
        >
          <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white bg-[url('https://img.freepik.com/free-photo/attractive-asian-woman-showing-smartphone-app-shopping-bags-buying-online-via-application-standi_1258-156867.jpg?t=st=1719750180~exp=1719753780~hmac=32fe2c8d6ba071a2003e2e36675f0f689ea9f319a99012d1ddd90964956e0c70&w=1380')] bg-cover bg-no-repeat bg-center">
            Slide 1
          </div>
          <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white bg-[url('https://img.freepik.com/free-photo/ecommerce-online-shopping-concept-satisfied-asian-female-client-showing-thumbs-up-using-smar_1258-166202.jpg?t=st=1719750392~exp=1719753992~hmac=4b7313f5a19911fffdc7b8337f55902089b99d27b1daf51d889daa1b025e864f&w=1380')] bg-cover bg-no-repeat bg-center">
            Slide 2
          </div>
          <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white bg-[url('https://img.freepik.com/free-photo/side-view-woman-shopping-online-with-smartphone-cyber-monday-with-copy-space_23-2148657653.jpg?t=st=1719750257~exp=1719753857~hmac=195fd918a51eafa16ee93a6ed0f7e702f4af4069d650718246a02db0cc264b4b&w=1380')] bg-cover bg-no-repeat bg-center">
            Slide 3
          </div>
        </Carousel>
      </div>
    </Flowbite>
  );
}

export default Hero;
