class Instrumento {
  do() {}
  re() {}
  mi() {}
  fa() {}
  sol() {}
  la() {}
}

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

class Ukulele extends InstrumentoCordas {
  tuning = ["G", "C", "E", "A"];
  amntFrets = 18;

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
  amntFrets = 22;

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
v.do({ showNotes: false, showFrets: true });
v.mi({ showNotes: false, showFrets: false, see : 10 });

const u = new Ukulele();
u.do({ showNotes: false, showFrets: false, see: 5 });