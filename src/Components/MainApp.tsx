import { Die } from "./Die";

export function MainApp(){

   function generateAllNewDice(){
    return new Array(10).fill(0)
    .map(() => Math.ceil(Math.random()+ 6))
    }
   

    return (
        <main>
            <div className="die-container">
                <Die value={1} />
                <Die value={2} />
                <Die value={3} />
                <Die value={4} />
                <Die value={5} />
                <Die value={6} />
                <Die value={1} />
                <Die value={1} />
                <Die value={1} />
                <Die value={1} />
            </div>
        </main>
    );
}