
export default function Die(props) {

  const styles = {
    backgroundColor: props.isHeld ? "#59E391" : "white"
  }

  return(
    <div className="die" style={styles}>
      <p>{props.value}</p>
    </div>
  )

}