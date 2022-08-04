import './App.css';
import LizardfolkAngrySounds from "./components/lizardfolk/angry/LizardfolkAngrySounds";
import LizardfolkHissSounds from "./components/lizardfolk/hiss/LizardfolkHissSounds";
import LizardfolkSoundTable from "./components/lizardfolk/LizardfolkSoundTable";

function App() {
    return (
        <div id={`soundboard-container`}>
            <LizardfolkSoundTable/>
        </div>
    );
}

export default App;
