import React, { createContext, useContext, useState } from "react";
const supplier = createContext();
export const Warehouse = (props) => {
  const [allow,setAllow]=useState(false)
    const questions = [{
        question: "How long have you been using our product/service?",
        options:[{
          option: "Less than a month",isRight:true
        }, {
          option: "1 to 6 months",isRight:false
        }, {
          option: "6 months to 1 year",isRight:false
        },{
          option: "1-3 years",isRight:false
        },{
          option: "Not sure",isRight:false
        },{
          option: "Never used",isRight:false
        }]
      }, {
        question: "Overall, how satisfied are you with our product/service?",
        options:[{
          option: "Very satisfied",isRight:false
        }, {
          option: "Satisfied",isRight:false
        }, {
          option: "Neutral",isRight:true
        },{
          option: "Dissatisfied",isRight:true
        }, {
          option: "Very dissatisfied",isRight:true
        }, {
          option: "Not sure",isRight:true
        }]
      },
      {
        question: "What was the reason that attracted you to become our customer?",
        options:[{
          option: "Brand value",isRight:false
        }, {
          option: "Marketing and promotion",isRight:true
        }, {
          option: "Variety of products",isRight:false
        }, {
          option: "Word of mouth",isRight:false
        }, {
          option: "Quality of our products",isRight:false
        }, {
          option: "Pricing",isRight:false
        }]
      },
      {
        question: "What are the reasons for which you might choose our product/service?",
        options:[{
          option: "I already had it, but want to replace it",isRight:false
        }, {
          option: "It serves a need of mine",isRight:true
        }, {
          option: "For quality reasons",isRight:false
        }, {
          option: "For durability reasons",isRight:false
        }, {
          option: "Because of the price",isRight:false
        }, {
          option: "Other",isRight:false
        }]
      },
      {
        question: "In your opinion, which of the following word describes us/our product the closest?",
        options:[{
          option: "Faulty",isRight:false
        }, {
          option: "Low quality",isRight:true
        }, {
          option: "High quality",isRight:false
        }, {
          option: "Durable",isRight:false
        }, {
          option: "Economical",isRight:false
        }, {
          option: "Expensive",isRight:false
        }]
      },
      {
        question: "How easy is the transaction process with our company?",
        options:[{
          option: "Very difficult",isRight:false
        }, {
          option: "Difficult",isRight:true
        }, {
          option: "Regular",isRight:false
        }, {
          option: "Easy",isRight:false
        }, {
          option: "Very easy",isRight:false
        }, {
          option: "Other",isRight:false
        }]
      },
      {
        question: "How likely are you to recommend [Product/Service] to other businesses?",
        options:[{
          option: "Very Likely",isRight:false
        }, {
          option: "Likely",isRight:true
        }, {
          option: "Regular",isRight:false
        }, {
          option: "Unlikely",isRight:false
        }, {
          option: "very unlikely",isRight:false
        }, {
          option: "Other",isRight:false
        }]
      },
      {
        question: "Did the customer support team resolve all your product/service related queries?",
        options:[{
          option: "Yes, by the company's representative",isRight:false
        }, {
          option: "No, it was resolved by me",isRight:true
        }, {
          option: "No, the problem was never resolved",isRight:false
        }, {
          option: "Never contacted the support team",isRight:false
        }, {
          option: "In process",isRight:false
        }, {
          option: "Other",isRight:false
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

