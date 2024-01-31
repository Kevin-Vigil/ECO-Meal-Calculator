import "./SelectorBox.css"

export default function SelectorBox(props){
  return(
    <div id="sBox">
      <div id="sBox-text">{props.text}</div>
    </div>
  )
}