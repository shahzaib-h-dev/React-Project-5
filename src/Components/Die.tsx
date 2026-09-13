 export function Die(props: any){
    return (
        // Value render ki hai aur class add ki hai
        <button className="die-face">{props.value}</button>
    );
}