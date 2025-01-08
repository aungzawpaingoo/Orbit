import React, { useState } from 'react'

const PricingDataCards = () => {
  const [billingCycle, setBillingCycle] = useState('monthly')

  const pricingPlans = [
    {
      title: "Basic",
      monthlyPrice: "$5/month",
      annualPrice: "$50/year",
      features: [
        "1 Active Project",
        "Task Management",
        "Team Collaboration",
        "Basic File Sharing",
        "Mobile & Web App Access",
      ],
    },
    {
      title: "Team",
      monthlyPrice: "$15/month",
      annualPrice: "$150/year",
      features: [
        "Up to 5 Active Projects",
        "Advanced Task Management",
        "Team Collaboration & Comments",
        "File Sharing & Version Control",
        "Integrations with Google Drive & Slack",
        "Mobile & Web App Access",
      ],
    },
    {
      title: "Business",
      monthlyPrice: "$25/month",
      annualPrice: "$250/year",
      features: [
        "Unlimited Active Projects",
        "Advanced Reporting & Analytics",
        "Custom User Roles & Permissions",
        "Time Tracking & Invoicing",
        "Priority Support",
        "Mobile & Web App Access",
      ],
    },
    {
      title: "Enterprise",
      monthlyPrice: "$50/month",
      annualPrice: "$500/year",
      features: [
        "Unlimited Projects & Users",
        "Advanced Customization & Branding",
        "Dedicated Account Manager",
        "Advanced Reporting & Analytics",
        "Priority Customer Support",
        "Custom Integrations & APIs",
        "Mobile & Web App Access",
      ],
    },
  ]

  return (
    <section className="text-gray-600 body-font overflow-hidden">
      <div className="container px-5 py-4 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="sm:text-6xl text-5xl font-bold title-font mb-2 text-gray-900">Affordable Pricing Plans</h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-900">
            Choose the best plan that suits your team. Start with a free option or scale up for more advanced features.
          </p>
          <div className="flex mx-auto border-2 border-blue-500 rounded overflow-hidden mt-6">
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`py-1 px-4 ${billingCycle === 'monthly' ? 'bg-blue-500 text-white' : 'text-gray-600'} focus:outline-none`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingCycle('annual')}
              className={`py-1 px-4 ${billingCycle === 'annual' ? 'bg-blue-500 text-white' : 'text-gray-600'} focus:outline-none`}
            >
              Annually
            </button>
          </div>
        </div>
        <div className="flex flex-wrap -m-4">
          {pricingPlans.map((plan) => (
            <div key={plan.title} className="p-4 xl:w-1/4 md:w-1/2 w-full">
              <div className="h-full p-6 rounded-lg shadow-xl flex flex-col relative overflow-hidden">
                <h2 className="text-sm tracking-widest mb-1 font-bold text-blue-500">{plan.title}</h2>
                <h1 className="text-4xl text-gray-900 pb-4 pt-4 mb-4 border-b font-bold border-gray-200 leading-none">
                  {billingCycle === 'monthly' ? plan.monthlyPrice : plan.annualPrice}
                </h1>
                <ul className="mb-4">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-900 font-medium mb-4">
                      <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                        <svg fill="green" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-3 h-3 bg-green-500" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path d="M12 5v14m7-7H5"></path>
                        </svg>
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="mt-auto text-white bg-blue-500 border-0 py-2 px-4 w-full focus:outline-none hover:bg-blue-600 rounded">
                  Choose Plan
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PricingDataCards
