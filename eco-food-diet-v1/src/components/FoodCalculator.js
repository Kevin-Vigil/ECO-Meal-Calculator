import React from "react";

export default function FoodCalculator(props){
  // props.history: arr
  // props.tastes: dict
  // props.availableFoods: Set of objects(FoodNode)
  // props.calCapacity


  //Create Hueristic:
  // Create food set that is available
  /** Find which percentage is weakest (taste, variety). complete full sort based on this ordering.
   * If percentage is equal, auto compare by balance, variety, then taste. Balance is always the forefront
   * Perform CSP with 3000 cal pool (or 5k)
   * 
   * 
   * CSP: Set of nodes (props.availableFoods)
   * Priority 1: Balance
   * Priority 2: Variety
   * Priority 3: Taste
   * Priority 4: Alphabetically 
   */


  function select_unassigned_node(){
    
  }
}