// Violao.js
import InstrumentoCordas from './InstrumentoCordas.js';

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

export default Violao;
