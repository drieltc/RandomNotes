// InstrumentoCordas.js
import Instrumento from './Instrumento.js';

class InstrumentoCordas extends Instrumento {
    showPosition(amntNotes, tuning, amntFrets, position, showFrets, showNotes, see) {
    const matrix = this.calculateMatrixPositions(amntNotes, tuning, amntFrets, position, see);

    let chord = "";
    if (showFrets) {
        const fretNumbers = Array.from({ length: amntFrets }, (_, index) => { return index + 1 <= see ? (index + 1) % 10 : null;}).filter(fret => fret !== null);
        const fretLine = fretNumbers.map(fret => (fret === 0 ? "0" : fret) + "|").join("");
        chord += (showNotes === true? "  " : "") + fretLine + "\n";
    }

    chord += matrix
        .map((value, index) => {
        const notes = showNotes ? tuning[index] + " " : "";
        const row = value
            .map(val => (val === "*" ? "" : val === "1" ? "•|" : val === "X" ? "X|" : "-|"))
            .join("");
        return notes + row;
        }).join("\n");

    return chord;
    }
    
    calculateMatrixPositions(amntNotes, tuning, amntFrets, position, see) {
    const matrix = [];

    const pRow = position.map((_, i) => tuning.indexOf(tuning[i]) + 1);
    const pColumn = position;

    for (let i = 0; i < amntNotes; i++) {
        const matrixRow = [];
        for (let j = 1; j <= amntFrets; j++) {
        matrixRow.push(j > see ? "*" : j === pColumn[i] && i + 1 === pRow[i] ? "1" : "X" === pColumn[i] && i + 1 === pRow[i] ? "X" : "0");
        }
        matrix.push(matrixRow);
    }

    return matrix;
    }
    
    play(note, position, options = {}) {
    const { showFrets = false, showNotes = false, see = this.amntFrets } = options;
    console.log(`${note} = [${position}]`);
    const chord = this.showPosition(this.tuning.length, this.tuning, this.amntFrets, position, showFrets, showNotes, see);
    console.log(chord);
    }
}

export default InstrumentoCordas;