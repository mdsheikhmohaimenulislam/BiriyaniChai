import React from "react";

const Banner = () => {
  return (
    <div>
      <div
        className="hero"
        style={{
          backgroundImage:
            "url(../../../public/d815e816-4664-472e-990b-d880be41499f--chicken-biryani-recipe.jpg)",
        }}
      >
        <div className="hero-overlay"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-2xl font-bold">
              Biriyanidibe (কোথায় বিরিয়ানি দিবে)
            </h1>
            <p className="mb-5 text-xl">
              A platform inspired by amanah (trust) and transparency. Helping
              you find verified Iftar Biryani with honesty and transparency.
              Because sharing authentic information is part of amanah (trust).
              Let’s build a trustworthy community together, InshaAllah.
            </p>
         
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
