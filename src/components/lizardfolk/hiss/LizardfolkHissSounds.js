import {Component} from "react";

class LizardfolkHissSounds extends Component {

    render() {
        let angrySoundsTable = [];

        for (let i = 0; i < 3; i++) {
            angrySoundsTable.push({label: `button ${i}`, value:`hiss_lizard_${i}`});
        }

        return <tr>{angrySoundsTable.map(btn => {
                        return (
                            <td key={btn.label} id={`table-sound-filed`}><button id={`${btn.label}-btn`} onClick={() => {
                                console.log('inside play');
                                let filePath = 'hissLizard/';
                                let audioFile = new Audio(filePath + btn.value +".mp3")
                                console.log("audio file: " + audioFile);
                                audioFile.load();
                                audioFile.play();
                            }}>{btn.value}</button> </td>
                        );
                    })}
                </tr>
    }
}

export default LizardfolkHissSounds;
