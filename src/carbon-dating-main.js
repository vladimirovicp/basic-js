const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

   //Периоды полураспада и применение некоторых радиоактивных изотопов
   //carbon-14 5.70 × 103 yr

   dateSample([3]); //=> 22387
   //dateSample('WOOT!') => false


function dateSample(sampleActivity) {


  console.log(typeof sampleActivity);

  if (typeof sampleActivity !== 'String'){
    console.log (false);
  }



  const bool = (!isNaN(parseFloat(sampleActivity)) && !isNaN(sampleActivity - 0));
  console.log('bool', bool);

  if(!bool){ return false;}
  const activity =  parseFloat(sampleActivity);
  console.log('activity',activity);
  if(activity < 0){ return false;}

  let k = Math.log(2) / HALF_LIFE_PERIOD;
  let a = Math.log(MODERN_ACTIVITY/activity);
  let t = Math.ceil(a/k);

  let result = (t > 0 && typeof t !== Infinity) ? t : false;

  // return result;
  console.log(2);
  console.log(result);

}


