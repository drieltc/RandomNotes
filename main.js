// index.js
import Violao from './Violao.js';
import Ukulele from './Ukulele.js';

const v = new Violao();
v.do({ showNotes: false, showFrets: true });
v.mi({ showNotes: false, showFrets: false, see: 10 });

const u = new Ukulele();
u.do({ showNotes: false, showFrets: false, see: 5 });