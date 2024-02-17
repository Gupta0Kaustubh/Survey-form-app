import React, { createContext, useContext, useState } from "react";
const supplier = createContext();
export const Warehouse = (props) => {
  const [allow,setAllow]=useState(false)
    const questions = [{
        question: "How long have you been using our product/service?",
        options:[{
          option: "Less than a month"
        }, {
          option: "1 to 6 months"
        }, {
          option: "6 months to 1 year"
        },{
          option: "1-3 years"
        },{
          option: "Not sure"
        },{
          option: "Never used"
        }]
      }, {
        question: "Overall, how satisfied are you with our product/service?",
        options:[{
          option: "Very satisfied"
        }, {
          option: "Satisfied"
        }, {
          option: "Neutral"
        },{
          option: "Dissatisfied"
        }, {
          option: "Very dissatisfied"
        }, {
          option: "Not sure"
        }]
      },
      {
        question: "What was the reason that attracted you to become our customer?",
        options:[{
          option: "Brand value"
        }, {
          option: "Marketing and promotion"
        }, {
          option: "Variety of products"
        }, {
          option: "Word of mouth"
        }, {
          option: "Quality of our products"
        }, {
          option: "Pricing"
        }]
      },
      {
        question: "What are the reasons for which you might choose our product/service?",
        options:[{
          option: "I already had it, but want to replace it"
        }, {
          option: "It serves a need of mine"
        }, {
          option: "For quality reasons"
        }, {
          option: "For durability reasons"
        }, {
          option: "Because of the price"
        }, {
          option: "Other"
        }]
      },
      {
        question: "In your opinion, which of the following word describes us/our product the closest?",
        options:[{
          option: "Faulty"
        }, {
          option: "Low quality"
        }, {
          option: "High quality"
        }, {
          option: "Durable"
        }, {
          option: "Economical"
        }, {
          option: "Expensive"
        }]
      },
      {
        question: "How easy is the transaction process with our company?",
        options:[{
          option: "Very difficult"
        }, {
          option: "Difficult"
        }, {
          option: "Regular"
        }, {
          option: "Easy"
        }, {
          option: "Very easy"
        }, {
          option: "Other"
        }]
      },
      {
        question: "How likely are you to recommend [Product/Service] to other businesses?",
        options:[{
          option: "Very Likely"
        }, {
          option: "Likely"
        }, {
          option: "Regular"
        }, {
          option: "Unlikely"
        }, {
          option: "very unlikely"
        }, {
          option: "Other"
        }]
      },
      {
        question: "Did the customer support team resolve all your product/service related queries?",
        options:[{
          option: "Yes, by the company's representative"
        }, {
          option: "No, it was resolved by me"
        }, {
          option: "No, the problem was never resolved"
        }, {
          option: "Never contacted the support team"
        }, {
          option: "In process"
        }, {
          option: "Other"
        }]
      }];
  return (
    <>
    <supplier.Provider value={{questions,setAllow,allow}}>
        {props.children}
    </supplier.Provider>
    </>
  )
}

export const useSupplier = () =>{
return useContext(supplier);
}

