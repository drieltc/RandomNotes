class Instrumento {
  do() {}
  re() {}
  mi() {}
  fa() {}
  sol() {}
  la() {}
}

class InstrumentoCordas extends Instrumento {
  showPosition(amntNotes, tuning, amntFrets, position, flip, showFrets, showNotes, see) {
    const matrix = this.calculateMatrixPositions(amntNotes, tuning, amntFrets, position);
  
    let chord = "";
    if (showFrets) {
      const fretNumbers = Array.from({ length: amntFrets }, (_, index) => (index + 1) % 10);
      const fretLine = flip
        ? fretNumbers.reverse().map(fret => (fret === 0 ? "0" : fret) + "|").join("")
        : fretNumbers.map(fret => (fret === 0 ? "0" : fret) + "|").join("");
      chord += "  " + fretLine + "\n";
    }
  
    chord += matrix
      .map((value, index) => {
        const notes = showNotes ? (flip ? tuning[amntNotes - 1 - index] + " " : tuning[index] + " ") : "";
        const row = value
          .map(val => (val === "1" ? "•|" : val === "X" ? "X|" : "-|"))
          .join("");
        return notes + row;
      })
      .join("\n");
  
    return chord;
  }
  
  calculateMatrixPositions(amntNotes, tuning, amntFrets, position) {
    const matrix = [];

    const pRow = position.map((_, i) => tuning.indexOf(tuning[i]) + 1);
    const pColumn = position;

    for (let i = 0; i < amntNotes; i++) {
      const matrixRow = [];

      for (let j = 1; j <= amntFrets; j++) {
        matrixRow.push(j === pColumn[i] && i + 1 === pRow[i] ? '1' : "X" === pColumn[i] && i + 1 === pRow[i] ? "X" : '0');
      }

      matrix.push(matrixRow);
    }

    return matrix;
  }

  play(note, position, options = {}) {
    const { flip = false, showFrets = false, showNotes = false, see = 0 } = options;
    console.log(`${note} = [${position}]`);
    const chord = this.showPosition(this.tuning.length, this.tuning, this.frets, position, flip, showFrets, showNotes, see);
    console.log(chord);
  }
}

class Ukulele extends InstrumentoCordas {
  tuning = ["G", "C", "E", "A"];
  frets = 18;

  do(options = {}) {
    const position = [0, 0, 0, 3];
    this.play("Dó = C", position, options);
  }

  re(options = {}) {
    const position = [2, 2, 2, 0];
    this.play("Ré = D", position, options);
  }

  mi(options = {}) {
    const position = [1, 4, 0, 2];
    this.play("Mi = E", position, options);
  }

  fa(options = {}) {
    const position = [2, 0, 1, 0];
    this.play("Fá = F", position, options);
  }

  sol(options = {}) {
    const position = [0, 2, 3, 2];
    this.play("Sol = G", position, options);
  }

  la(options = {}) {
    const position = [2, 1, 0, 0];
    this.play("Lá = A", position, options);
  }

  si(options = {}) {
    const position = [4, 3, 2, 2];
    this.play("Si = B", position, options);
  }
}

class Violao extends InstrumentoCordas {
  tuning = ["E", "A", "D", "G", "B", "e"];
  frets = 22;

  do(options = {}) {
    const position = ["X", 3, 2, 0, 1, 0];
    this.play("Dó = C", position, options);
  }

  mi(options = {}) {
    const position = [0, 2, 2, 1, 0, 0];
    this.play("Mi = E", position, options);
  }
}

const v = new Violao();
v.do({ showNotes: false, showFrets: false });
v.mi({ showNotes: true, showFrets: true });

const u = new Ukulele();
u.do({ showNotes: true, showFrets: true });
u.re({ showNotes: true, showFrets: true });
