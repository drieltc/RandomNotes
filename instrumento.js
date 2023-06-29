class Instrumento {
  do() {}
  re() {}
  mi() {}
  fa() {}
  sol() {}
  la() {}
}

class InstrumentoCordas extends Instrumento {
  constructor(tuning, casas, flip = false) {
    super();
    this.tuning = tuning;
    this.casas = casas;
    this.flip = flip;
  }

  showPosition(rows, tuning, columns, position, flip = false) {
    const matrix = this.calculateMatrixPositions(rows, tuning, columns, position);

    let chord = "";
    chord = matrix.map((value) => {
      let row = "";
      if(!flip){
        for (let i = 0; i < value.length; i++) {
          if (value[i] === 1) {
            row += "•|";
          } else if (value[i] === 0) {
            row += "_|";
          }
        }
      }

      return row;
    });
    chord = chord.join("\n");
    console.log(chord);
  }

  calculateMatrixPositions(rows, tuning, columns, position) {
    const pRow = [];
    const pColumn = [];
    let matrix = [];

    for (let i = 0; i < rows; i++) {
      const [note, col] = position[i];
      pRow.push(tuning.indexOf(note) + 1);
      pColumn.push(col);
    }

    for (let i = 0; i <= rows; i++) {
      let matrixRow = [];

      for (let j = 1; j <= columns; j++) {
        matrixRow.push(j === pColumn[i - 1] && i === pRow[i - 1] ? 1 : 0);
      }
      matrix.push(matrixRow);
    }

    matrix.shift();
    console.log(matrix);
    return matrix;
  }

  play(note, position) {
    console.log(`${note} = [${position}]`);
    this.showPosition(this.tuning.length, this.tuning, this.casas, position);
  }
}

class Ukulele extends InstrumentoCordas {
  tuning = ["G", "C", "E", "A"];
  casas = 18;

  do(flip = false) {
    const position = [["G", 0], ["C", 0], ["E", 0], ["A", 3]];
    this.play("Dó = C", position, flip);
  }

  re() {
    const position = [["G", 2], ["C", 2], ["E", 2], ["A", 0]];
    this.play("Ré = D", position);
  }

  mi() {
    const position = [["G", 1], ["C", 4], ["E", 0], ["A", 2]];
    this.play("Mi = E", position);
  }

  fa() {
    const position = [["G", 2], ["C", 0], ["E", 1], ["A", 0]];
    this.play("Fá = F", position);
  }

  sol() {
    const position = [["G", 0], ["C", 2], ["E", 3], ["A", 2]];
    this.play("Sol = G", position);
  }

  la() {
    const position = [["G", 2], ["C", 1], ["E", 0], ["A", 0]];
    this.play("Lá = A", position);
  }

  si() {
    const position = [["G", 4], ["C", 3], ["E", 2], ["A", 2]];
    this.play("Si = B", position);
  }
}

class Violao extends InstrumentoCordas {
  tuning = ["E", "B", "G", "D", "A", "E"];
  casas = 22;

  mi() {
    const position = [["E", 0], ["B", 2], ["G", 2], ["D", 1], ["A", 0], ["E", 0]];
    this.play("Mi = E", position);
  }
}

const ukulele = new Ukulele();
ukulele.do();
ukulele.re();
ukulele.mi();
ukulele.fa();
ukulele.sol();
ukulele.la();
ukulele.si();

const violao = new Violao();
violao.mi();
