import StringInstrument from "./StringInstrument";

class Ukulele extends StringInstrument {
  tuning = ["G", "C", "E", "A"];
  amntFrets = 18;

  //MAJOR CHORDS
  C_Major(options = {}) {
    const position = [0,0,0,3];
    this.play("Dó = C", position, options);
  }

  C_Sharp_Major(options = {}){
    const position = [1, 1, 1, 4]
    //const position = [[1], [1], [1], [1, 4]]
    this.play('Sustained Do = C#', position, options)
  }

  D_Major(options = {}) {
    const position = [2, 2, 2, 0];
    this.play("Re = D", position, options);
  }

  D_Sharp_Major(options = {}){
    const position = [0,3,3,1]
    this.play('Sustained Re = D#', position, options)
  }

  E_Major(options = {}) {
    const position = [4,4,4,2]
    this.play("Mi = E", position, options);
  }

  F_Major(options = {}) {
    const position = [2, 0, 1, 0];
    this.play("Fa = F", position, options);
  }

  F_Sharp_Major(options = {}){
    const position = [3, 1, 2, 1]
    this.play("Sustained Fa = F#", position, options);
  }

  G_Major(options = {}) {
    const position = [0, 2, 3, 2];
    this.play("Sol = G", position, options);
  }

  G_Sharp_Major(options = {}){
    const position = [1, 3, 3, 3]
    this.play("Sustained Sol = G#", position, options);
  }

  A_Major(options = {}) {
    const position = [2, 1, 0, 0];
    this.play("Lá = A", position, options);
  }

  A_Sharp_Major(options = {}){
    const position = [3,0,1,3]
    this.play("Sustained La = A#", position, options)
  }

  B_Major(options = {}) {
    const position = [4, 3, 2, 2];
    this.play("Si = B", position, options);
  }

  //MINOR CHORDS
  C_Minor(options = {}){
    const position = [0, 3, 3, 3]
    this.play('Minor Do = Cm', position, options)
  }

  C_Sharp_Minor(options = {}){
    const position = [1, 1, 0, 4]
    this.play('Minor Sustained Do = C#m', position, options)
  }

  D_Minor(options = {}){
    const position = [2, 2, 1, 0]
    this.play('Minor Re = Dm', position, options)
  }

  D_Sharp_Minor(options = {}){
    const position = [3, 3, 2, 1]
    this.play('Minor Sustained Re = D#m', position, options)
  }

  E_Minor(options = {}){
    const position = [0, 4, 0, 3]
    this.play('Minor Mi = Em', position, options)
  }

  F_Minor(options = {}){
    const position = [1, 0, 1, 3]
    this.play('Minor Fa = Fm', position, options)
  }

  F_Sharp_Minor(options = {}){
    const position = [2, 1, 2, 0]
    this.play('Minor Sustained Fa = F#m', position, options)
  }

  G_Minor(options = {}){
    const position = [0, 2, 3, 1]
    this.play('Minor Sol = Gm', position, options)
  }

  G_Sharp_Minor(options = {}){
    const position = [1, 3, 4, 2]
    this.play('Minor Sustained Sol = G#m', position, options)
  }

  A_Minor(options = {}){
    const position = [2, 0, 0, 0]
    this.play('Minor La = Am', position, options)
  }

  A_Sharp_Minor(options = {}){
    const position = [3, 1, 1, 1]
    //const position  = [[1, 3], [1], [1], [1]]
    //const position = [[1, 3], 1, 1, 1]
    this.play('Minor Sustained La = A#m', position, options)
  }

  B_Minor(options = {}){
    const position = [4, 2, 2, 2]
    //const position = [[2, 4], [2], [2], [2]]
    //const position = [[2, 4], 2, 2, 2]
    this.play('Minor Sol = Bm', position, options)
  }
}