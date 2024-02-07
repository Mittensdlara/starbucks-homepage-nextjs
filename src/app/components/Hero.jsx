import heroPink from "../img/hero-pink-img.webp";
import heroGreen from "../img/hero-green-img.webp";
import heroPurple from "../img/hero-purple-img.jpg"
import heroOrenge from "../img/hero-orenge-img.webp"
import heroBlue from "../img/hero-blue-img.jpg"
import heroGrass from "../img/hero-grass-img.jpg"
import staff from "../img/smile-hero.webp"


import Image from "next/image";
const Hero = () => {
  return (
    <div className="m-5">
      <div className=" lg:flex items-center justify-center bg-Pink m-0 lg:m-5 text-DarkPink">
        <div className=" w-full h-full">
          <Image src={heroPink} alt="hero-pink-img" />
        </div>
        <div className=" text-center p-5 space-y-5 ">
          <h1 className="text-2xl font-bold lg:text-4xl ">
            Love at First Sip Duo, now in the app
          </h1>
          <p className="text-xl font-medium p-5 leading-10">
            Join Starbucks® Rewards and say “be mine” to the <br />
            Chocolate-Covered Strawberry Crème Frappuccino® drink or Chocolate
            Hazelnut Cookie Cold Brew, perfect for sharing. Here for a limited
            time.
          </p>
          <button className="btn btn-outline">Download to order</button>
        </div>
      </div>

      {/* Hero section 2 */}

      <div className=" lg:flex items-center justify-between bg-Green m-0 lg:m-5 text-DarkGreen">
        <div className=" text-center p-5 space-y-5 ">
          <h1 className="text-4xl font-semibold mt-5 leading-relaxed">
            Next-level <br /> luxurious
          </h1>
          <p className="text-2xl font-medium leading-10 p-5">
            Velvety smooth, deliciously lush. Try the new Oleato Golden Foam™
            Iced Shaken Espresso with Toffeenut and the Oleato™ Caffè Latte with
            Oatmilk.
          </p>
          <button className="btn btn-outline">Order now</button>
        </div>
        <div className=" w-full h-full">
          <Image src={heroGreen} alt="hero-pink-img" />
        </div>
      </div>
      {/* Hero section 3 */}
      <div className="lg:flex items-center justify-between bg-Purple m-0 lg:m-5 text-DarkPurple">
        <div className=" w-full h-full">
          <Image src={heroPurple} alt="hero-purple-img" />
        </div>
        <div className=" text-center p-5 space-y-5 ">
          <h1 className="text-4xl font-bold ">Happy Lunar New Year</h1>
          <p className="text-xl font-medium p-5 leading-10">
            It’s the dragon’s time to shine with this Starbucks eGift, the
            perfect way to wish someone a happy 2024.
          </p>
          <button className="btn btn-outline">Send an eGift</button>
        </div>
      </div>
      {/* Hero section 4 */}

      <div className=" lg:flex items-center justify-between bg-Orenge m-0 lg:m-5 text-DarkGreen">
        <div className=" text-center p-5 space-y-5 ">
          <h1 className="text-4xl font-semibold mt-5 leading-relaxed">
            Bold and bright
          </h1>
          <p className="text-2xl font-medium leading-10 p-5">
            Celebrate the Year of the Dragon with the fruity, lively Dragon
            Drink™.
          </p>
          <button className="btn btn-outline">Order now</button>
        </div>
        <div className=" w-full h-full">
          <Image src={heroOrenge} alt="hero-pink-img" />
        </div>
      </div>
      {/* Hero section 5 */}
      <div className=" lg:flex items-center justify-between bg-Grass m-0 lg:m-5 text-White">
        <div className=" w-full h-full">
          <Image src={heroGrass} alt="hero-pink-img" />
        </div>
        <div className=" text-center p-5 space-y-5 ">
          <h1 className="text-3xl font-bold ">Icy and cozy and creamy—oh my</h1>
          <p className="text-xl font-medium p-5 leading-10">
            All is well when you’re sipping a Pistachio Cream Cold Brew with a
            salted brown-buttery topping.
          </p>
          <button className="btn btn-outline text-White">Download to order</button>
        </div>
      </div>
      {/* Hero section 6 */}

      <div className=" lg:flex items-center justify-between bg-Blue m-0 lg:m-5 text-White">
        <div className=" text-center p-5 space-y-5 ">
          <h1 className="text-4xl font-semibold mt-5 leading-relaxed">
            Do your day right
          </h1>
          <p className="text-2xl font-medium leading-10 p-5">
            Grab a savory Bacon, Sausage & Egg Wrap, our Chicken, Maple Butter &
            Egg Sandwich or the Impossible™ Breakfast Sandwich*.
          </p>
          <button className="btn btn-outline text-White">Order now</button>
        </div>
        <div className=" w-full h-full">
          <Image src={heroBlue} alt="hero-pink-img" />
        </div>
      </div>
      {/* Hero section 7 */}
      <div className=" lg:flex items-center justify-between bg-Grass m-0 lg:m-5 text-White">
        <div className=" w-full h-full">
          <Image src={staff} alt="hero-pink-img" />
        </div>
        <div className=" text-center p-5 space-y-5 ">
          <h1 className="text-2xl font-bold ">
            “A smile makes a big difference.”
          </h1>
          <p className="text-xl font-medium p-5 leading-10">
            - Brenda, Starbucks Partner (Employee) <br />
            Our partners uplift each
            other and their communities every day.
          </p>
          <button className="btn btn-outline text-White">Download to order</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
