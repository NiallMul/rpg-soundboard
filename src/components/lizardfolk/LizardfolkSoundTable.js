import {Component} from "react";
import LizardfolkAngrySounds from "./angry/LizardfolkAngrySounds";
import LizardfolkHissSounds from "./hiss/LizardfolkHissSounds";

class LizardfolkSoundTable extends Component {

    render() {
        return <div id={`lizardfolk-table-container`}>
            <h3 id={`lizard-sound-title`}>Lizardfolk sounds</h3>
            <table id={`lizardfolk-table`}>
                <tbody>
                <LizardfolkAngrySounds/>
                <LizardfolkHissSounds/>
                </tbody>
            </table>
        </div>
    }
}

export default LizardfolkSoundTable;
