import SelectorBox from "../components/SelectorBox"
import "./Body.css"

export default function Body(){
  return(
    <div id="body">
      <div id="selection-box">
        <div className="selection-box-row">
          <SelectorBox text="Baking"/>
          <SelectorBox text="Campfire"/>
        </div>
        <div className="selection-box-row">
          <SelectorBox text="Charred Food"/>
          <SelectorBox text="Cooking"/>
        </div>
        <div className="selection-box-row">
          <SelectorBox text="Ingredients"/>
          <SelectorBox text="Preserved Foods"/>
        </div>
        <div className="selection-box-row">
          <SelectorBox text="Produce"/>
          <SelectorBox text="Raw Meat"/>
        </div>
      </div>
    </div>
  )
}