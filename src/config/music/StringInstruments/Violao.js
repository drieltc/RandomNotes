import StringInstrument from "./StringInstrument";

class Violao extends StringInstrument{
  tuning = ["E", "A", "D", "G", "B", "E"];
  amntFrets = 22;

  C(options = {}) {
    const position = [0, 3, 2, 0, 1, 0];
    this.play("Dó = C", position, options);
  }

  E(options = {}) {
    const position = [0, 2, 2, 1, 0, 0];
    this.play("Mi = E", position, options);
  }
}