import React from "react";
import Mail from "../Mail";
import Cardinfo from "../Cardinfo";
import Treecount from "../Treecount";
import { Normalinfo } from "../Normalinfo";
import Payment from "../Payment";


export default function Result( { 
    NumResidents,
    LivingType,
    HouseSize,
    cleanEnergy,
    Recycle,
    DietType,
    LongFlights,
    shortFlights,
    mediumFlights,
    hotel,
    selectedOptions,
    AverageTravel,
       AverageTravelForMetro,
       AnnualMileage,
       fueleconomy,
       isChecked,
       isChecked1,
       isChecked2,
       isChecked3,
       
    
  
  }) {
    // Define the carbon footprint calculation logic here
    var carbonFootprint = NumResidents * 100;
    //maps
    const numResidentsMap = {
      1: 20.21,
      2: 16.03,
      3: 13.47,
      4: 12.20,
      5: 11.35,
      "6+": 10.22,
    };
    const LivingTypeMap = {
      "Detached Single family home": 1.41,
      "attached Single family home": -0.67,
      "Apartment": -0.81,
      "Apartment(5+)": -4.16,
      "Mobile Home": -3.49,
    
    };
    const HouseSizeMap={
      "Under 500 sq ft":-2.52,
      "500-1000 sq ft":-3.02,
      "1000-1500 sq ft":-2.52,
      "1500-2000 sq ft":-0.38
    }
    const cleanEnergyMap={
      "Yes,some":-19.02+17.62,
      "Yes,most":-19.02+16.17,
      "Yes,all":-19.02+14.76,
      "No":0
    }
    const RecycleMap={
      "Yes":-17.62+17.48,
      "No":0
    }
    const DietTypeMap={
     "Vegetarian":16.82-17.62,
     "Non-Vegetarian":18.42-17.62,
     "No beef":17.02-17.62,
     "Vegan":16.62-17.62
     
    }
     
    const selectedOptionsMap={
  
      "I have programmable thermostat":15.40-16.48,
      "I use energy star appliances":15.67-16.48,
      "I use energy efficient lightbulbs":15.88-16.48,
      "I line dry my laundry":16.38-16.48,
      "Yes":15.67-15.74
      
    }
    const AverageTravelMap={
      "Under 5 Miles":15.69-15.67,
      "Under 5 to 9.9 Miles":15.73-15.67,
      "10 to 14.9 Miles":15.77-15.67,
      "15 to 19.9 Miles":15.81-15.67,
      "20 to 29.9 Miles":15.87-15.67,
      "30+ Miles":15.95-15.67
    }
    const AverageTravelForMetroMap={
      "Under 5 Miles":15.69-15.67,
      "Under 5 to 9.9 Miles":15.71-15.67,
      "10 to 14.9 Miles":15.73-15.67,
      "15 to 19.9 Miles":15.76-15.67,
      "20 to 29.9 Miles":15.79-15.67,
      "30+ Miles":15.84-15.67
    }
    const AnnualMileageMap={
      "Under 1,000 Miles":500,
      "1,000 Miles to 2,499 Miles":1750,
      "2,500 Miles to 4,999 Miles":5000,
      "5,0000 Miles to 9,999 Miles":7500,
      "10,0000 Miles to 14,999 Miles":1500,
      "15,0000 Miles to 19,999 Miles":17500,
      "20,0000 Miles to 29,999 Miles":25000,
     
      "30,0000 Miles + Miles":30000,
  
  
    }
    const fueleconomyMap={
      "0 to 14 MPG":7,
      "15-19 MPG":17,
      "20-24 MPG (US Average)":22,
      "25-29 MPG":27,
      "30-34 MPG":32,
      "35-39 MPG":37,
      "40-49 MPG":42,
      "50-59 MPG":52,
      "60-79 MPG":62,
      "80-99 MPG":82
    }
    const hotelMap={
      "1 to 2 nights":15.73-15.67,
      "3 -4 nights":15.81-15.67,
      "5-6 nights":15.89-15.67,
      "1-2 weeks":15.89-15.67,
      "3-4 weeks":16.61-15.67,
      "1-2 months":17.40-15.67,
  
    }
    const LongFlightsMap={
      "0":0,
      "1":0.85,
      "2":0.85*2,
      "3":0.85*3,
      "4":0.85*4,
      "5 to 9":0.85*7,
      "9-14":0.85*11,
    }
    const shortFlightsMap={
      "0":0,
      "1":0.4,
      "2":0.4*2,
      "3":0.4*3,
      "4":0.4*4,
      "5 to 9":0.4*7,
      "9-14":0.4*11.5,
    }
    const mediumFlightsMap={
      "0":0,
      "1":0.08,
      "2":0.08*2,
      "3":0.08*3,
      "4":0.08*4,
      "5 to 9":0.08*7,
      "9-14":0.08*11.5,
    }
  
    carbonFootprint =
    NumResidents in numResidentsMap
      ? numResidentsMap[NumResidents]
      : "0";
      carbonFootprint +=
      LivingType in LivingTypeMap
      ? LivingTypeMap[LivingType]
      : "0";
      
      carbonFootprint +=
      HouseSize in HouseSizeMap
      ? HouseSizeMap[HouseSize]
      : "0";
  
      carbonFootprint +=
  cleanEnergy in cleanEnergyMap
      ? cleanEnergyMap[cleanEnergy]
      : "0";
  
      carbonFootprint +=
      Recycle in RecycleMap
          ? RecycleMap[Recycle]
          : "0";
  
          carbonFootprint +=
      DietType in DietTypeMap
          ? DietTypeMap[DietType]
          : "0";
      
  
      console.log(selectedOptions);
  
      for (const option of selectedOptions) {
          if (option in selectedOptionsMap) {
            carbonFootprint =parseFloat(carbonFootprint) + parseFloat(selectedOptionsMap[option]);
          }
        }
  
  
        console.log(carbonFootprint);
  
  
  
  
  
  
        if(isChecked)
        {
          carbonFootprint +=
          AverageTravel in AverageTravelMap
              ? AverageTravelMap[AverageTravel]
              : "0";
  
        }
        if(isChecked1)
        {
          carbonFootprint +=
          AverageTravelForMetro in AverageTravelForMetroMap
              ? AverageTravelForMetroMap[AverageTravelForMetro]
              : "0";
  
        }
        if(isChecked2)
        {
               var m= AnnualMileage in AnnualMileageMap
               ? AnnualMileageMap[AnnualMileage]
               : "0";
               var mpg= fueleconomy in fueleconomyMap
               ? fueleconomyMap[fueleconomy]
               : "0";
  
               carbonFootprint += (m/mpg)*0.0089 ;
        }
        carbonFootprint +=
        hotel in hotelMap
            ? parseFloat(hotelMap[hotel])
            : "0";
            if(LongFlights)
            {
              carbonFootprint =parseFloat(carbonFootprint)+LongFlightsMap[LongFlights];
            }
            if(shortFlights)
            {
              carbonFootprint =parseFloat(carbonFootprint)+shortFlightsMap[shortFlights];
            }
            if(mediumFlights)
            {
              carbonFootprint =parseFloat(carbonFootprint)+mediumFlightsMap[mediumFlights];
            }
  
  
              console.log(carbonFootprint);
    
  
  console.log(typeof(carbonFootprint));
  
  
  const trees=parseInt(carbonFootprint/0.07);
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
return(
<div>
<Payment 
trees={trees}
carbonFootprint={carbonFootprint}  / >
 <Normalinfo 
 trees={trees}
 carbonFootprint={carbonFootprint}  / >
<Treecount 
trees={trees}
carbonFootprint={carbonFootprint}  / > 
<Cardinfo 
trees={trees}
carbonFootprint={carbonFootprint}  / > 
<Mail 
trees={trees}
carbonFootprint={carbonFootprint}/>



</div>

)

}