// Ukulele.js
import InstrumentoCordas from './InstrumentoCordas';

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

export default Ukulele;
