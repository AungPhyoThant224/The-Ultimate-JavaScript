(()=>{"use strict";const s=new WeakMap;new class{constructor(e){s.set(this,e)}draw(){console.log(s.get(this))}}(10).draw(),console.log("Changed")})();