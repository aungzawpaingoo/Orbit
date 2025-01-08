import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

const PricingTableComparison = () => {
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
  ];

  return (
    <section className="text-black body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="sm:text-5xl text-4xl font-bold title-font mb-8 text-gray-900">Pricing Comparison</h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-lg">
            Compare the features and pricing across all our plans to find the perfect fit for your needs.
          </p>
        </div>

        <TableContainer component={Paper} sx={{boxShadow:'none'}}>
          <Table sx={{ minWidth: 650 }} aria-label="pricing comparison table">
            <TableHead>
              <TableRow>
                <TableCell align="center" sx={{ fontSize:19,fontWeight: 'bold' }}>Plan</TableCell>
                <TableCell align="center" sx={{ fontSize:19,fontWeight: 'bold' }}>Monthly Price</TableCell>
                <TableCell align="center" sx={{ fontSize:19,fontWeight: 'bold' }}>Annual Price</TableCell>
                <TableCell align="center" sx={{ fontSize:19,fontWeight: 'bold' }}>Features</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {pricingPlans.map((plan, index) => (
                plan.features.map((feature, featureIndex) => (
                  <TableRow key={`${index}-${featureIndex}`} sx={{ '&:nth-of-type(odd)': { backgroundColor: '#ffffff' } }}>
                    {featureIndex === 0 && (
                      <>
                        <TableCell sx={{fontSize:16, fontWeight:'bold'}} rowSpan={plan.features.length} align="center">{plan.title}</TableCell>
                        <TableCell sx={{fontSize:16, fontWeight:'bold'}} rowSpan={plan.features.length} align="center">{plan.monthlyPrice}</TableCell>
                        <TableCell sx={{fontSize:16, fontWeight:'bold'}} rowSpan={plan.features.length} align="center">{plan.annualPrice}</TableCell>
                      </>
                    )}
                    <TableCell align="center">{feature}</TableCell>
                  </TableRow>
                ))
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </section>
  );
};

export default PricingTableComparison;
