class Instrumento {
  C() {}
  Cs() {}
  D() {}
  Ds() {}
  E() {}
  F() {}
  Fs() {}
  G() {}
  Gs() {}
  A() {}
  As () {}
  B() {}
}

class InstrumentoCordas extends Instrumento {
  showPosition(amntNotes, tuning, amntFrets, position, showFrets, showNotes, see, flip) {
    const matrix = this.calculateMatrixPositions(amntNotes, tuning, amntFrets, position, see, flip);

    let chord = "";
    if (showFrets) {
      const fretNumbers = Array.from({ length: amntFrets }, (_, index) => {
        return index + 1 <= see ? (index + 1) % 10 : null;
      }).filter(fret => fret !== null);
      const fretLine = fretNumbers.map(fret => (fret === 0 ? "0" : fret) + "|").join("");
      chord += (showNotes === true? "  " : "") + fretLine + "\n";
    }

    chord += matrix.map((value, index) => {
      const notes = showNotes ? tuning[index] + " " : "";
      const row = value.map(val => (val === "*" ? "" : val === "1" ? "•|" : val === "X" ? "X|" : "-|")).join("");
      return notes + row;
    }).join("\n");

      if (flip){
        chord = this.flipChord(chord)
      }
    return chord;
  }

  flipChord(chord){
    let arrayChord = chord.split('\n')
    for(let i = 0; i < arrayChord.length; i++){
      arrayChord[i] = arrayChord[i].split('').reverse().join('')
    }
    arrayChord = arrayChord.join('\n')
    return arrayChord
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
    const { showFrets = false, showNotes = false, see = this.amntFrets, flip = false } = options;
    console.log(`${note} = [${position}]`);
    const chord = this.showPosition(this.tuning.length, this.tuning, this.amntFrets, position, showFrets, showNotes, see, flip);
    console.log(chord);
  }
}

class Ukulele extends InstrumentoCordas {
  tuning = ["G", "C", "E", "A"];
  amntFrets = 18;

  C(options = {}) {
    const position = [0, 0, 0, 3];
    this.play("Dó = C", position, options);
  }

  D(options = {}) {
    const position = [2, 2, 2, 0];
    this.play("Ré = D", position, options);
  }

  E(options = {}) {
    const position = [1, 4, 0, 2];
    this.play("Mi = E", position, options);
  }

  F(options = {}) {
    const position = [2, 0, 1, 0];
    this.play("Fá = F", position, options);
  }

  G(options = {}) {
    const position = [0, 2, 3, 2];
    this.play("Sol = G", position, options);
  }

  A(options = {}) {
    const position = [2, 1, 0, 0];
    this.play("Lá = A", position, options);
  }

  B(options = {}) {
    const position = [4, 3, 2, 2];
    this.play("Si = B", position, options);
  }
}

class Violao extends InstrumentoCordas {
  tuning = ["E", "A", "D", "G", "B", "e"];
  amntFrets = 22;

  C(options = {}) {
    const position = ["X", 3, 2, 0, 1, 0];
    this.play("Dó = C", position, options);
  }

  E(options = {}) {
    const position = [0, 2, 2, 1, 0, 0];
    this.play("Mi = E", position, options);
  }
}

const v = new Violao();
v.C({ showNotes: false, showFrets: true, flip:true });
v.E({ showNotes: false, showFrets: false, see : 10, flip:false });

const u = new Ukulele();
u.C({ showNotes: true, showFrets: true, see: 18, flip: true });