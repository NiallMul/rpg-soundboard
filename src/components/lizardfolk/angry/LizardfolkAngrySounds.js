import {Component} from "react";

class LizardfolkAngrySounds extends Component {

    render() {
        let angrySoundsTable = [];

        for (let i = 0; i < 3; i++) {
            angrySoundsTable.push({label: `button ${i}`, value:`angry_lizard_${i}`});
        }

        return <tr>
                    {angrySoundsTable.map(btn => {
                        return (
                            <td key={btn.label}><button id={`${btn.label}-btn`} onClick={() => {
                                console.log('inside play');
                                let filePath = 'angryLizard/';
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

export default LizardfolkAngrySounds;
