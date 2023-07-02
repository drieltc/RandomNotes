class Instrumento {
  do() {}
  re() {}
  mi() {}
  fa() {}
  sol() {}
  la() {}
}

class InstrumentoCordas extends Instrumento {
  constructor(tuning, frets, flip = false) {
    super();
    this.tuning = tuning;
    this.frets = frets;
    this.flip = flip;
  }

  showPosition(rows, tuning, columns, position, flip = false) {
    const matrix = this.calculateMatrixPositions(rows, tuning, columns, position);

    let chord = matrix
      .map(value => value.map(val => (val === '1' ? "•|" : val === 'X' ? "X|" : "-|")).join(""))
      .join("\n");

    console.log(chord);
    return chord;
  }

  calculateMatrixPositions(rows, tuning, columns, position) {
    const matrix = [];

    const pRow = position.map((_, i) => tuning.indexOf(tuning[i]) + 1);
    const pColumn = position;

    for (let i = 0; i < rows; i++) {
      const matrixRow = [];

      for (let j = 1; j <= columns; j++) {
        matrixRow.push(j === pColumn[i] && i + 1 === pRow[i] ? '1' : "X" === pColumn[i] && i + 1 === pRow[i] ? "X" : '0');
      }

      matrix.push(matrixRow);
    }

    console.log(matrix);
    return matrix;
  }

  play(note, position) {
    console.log(`${note} = [${position}]`);
    this.showPosition(this.tuning.length, this.tuning, this.frets, position);
  }
}

class Ukulele extends InstrumentoCordas {
  tuning = ["G", "C", "E", "A"];
  frets = 18;

  do(flip = false, showFrets = false, showNotes = false, see = 0) {
    const position = [0, 0, 0, 3];
    this.play("Dó = C", position, flip);
  }

  re() {
    const position = [2, 2, 2, 0];
    this.play("Ré = D", position);
  }

  mi() {
    const position = [1, 4, 0, 2];
    this.play("Mi = E", position);
  }

  fa() {
    const position = [2, 0, 1, 0];
    this.play("Fá = F", position);
  }

  sol() {
    const position = [0, 2, 3, 2];
    this.play("Sol = G", position);
  }

  la() {
    const position = [2, 1, 0, 0];
    this.play("Lá = A", position);
  }

  si() {
    const position = [4, 3, 2, 2];
    this.play("Si = B", position);
  }
}

class Violao extends InstrumentoCordas {
  tuning = ["E", "A", "D", "G", "B", "e"];
  frets = 22;

  do() {
    const position = ["X", 3, 2, 0, 1, 0];
    this.play("Dó = C", position);
  }

  mi() {
    const position = [0, 2, 2, 1, 0, 0];
    this.play("Mi = E", position);
  }
}

const v = new Violao
v.do()
v.mi()

const u = new Ukulele
u.do()
u.re()