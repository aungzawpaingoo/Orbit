import React from 'react';

const FeatureCards = () => {
  return (
    <section className="text-gray-600 body-font bg-white py-12">
      <div className="container mx-auto bg-white">
        <div className="flex flex-wrap w-full mb-12">
          <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
            <h1 className="text-3xl lg:text-4xl font-medium title-font mb-2 text-gray-900">
              Pitchfork Kickstarter Taxidermy
            </h1>
            <div className="h-1 w-20 bg-indigo-500 rounded"></div>
          </div>
          <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">
            Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke
            farm-to-table.
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          {[1, 2, 3, 4].map((_, idx) => (
            <div key={idx} className="p-4 sm:w-1/2 lg:w-1/4">
              <div className="bg-white p-6 rounded-lg shadow">
                <img
                  className="h-40 rounded w-full object-cover object-center mb-6"
                  src={`https://dummyimage.com/720x40${idx}`}
                  alt="content"
                />
                <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">
                  SUBTITLE
                </h3>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                  {`Title ${idx + 1}`}
                </h2>
                <p className="leading-relaxed text-base">
                  Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison
                  bulbche.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureCards;
