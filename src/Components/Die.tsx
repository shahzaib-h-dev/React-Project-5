 export function Die(props: any){

    const styles = {
        backgroundColor: props.isHeld ? "#59E391" : "white"
  
    }

    return (
        
        <button style={styles} className="die-face">{props.value}</button>
    );
}