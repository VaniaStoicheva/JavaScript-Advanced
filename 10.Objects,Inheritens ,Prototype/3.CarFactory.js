/**
 * Created by 1234 on 10.7.2017 г..
 */
function carFatory(initCar) {
  let  currentCar={};
    currentCar.model=initCar.model;
    if(initCar.power<=90) {
        currentCar.engine = {
            power: 90,
            volume: 1800
        }
    }
    else if(initCar.power<=120){
        currentCar.engine={
            power:120,
            volume:2400
        };
        }
        else if(initCar.power<=200){
        currentCar.engine={
            power:200,
            volume:3500
        }
    }

    if(initCar.carriage==='hatchback'){
            currentCar.carriage={
                type: 'hatchback',
                color: initCar.color
            }
    }
    else if(initCar.carriage==='coupe'){
        currentCar.carriage={
            type:'coupe',
            color: initCar.color
        }
    }

    currentCar.wheels=[];
    if(initCar.wheelsize%2===0){
        initCar.wheelsize--;
    }
    for (let i = 0; i < 4; i++) {
        currentCar.wheels[i]=initCar.wheelsize;
    }


    return currentCar;
}
console.log(carFatory({
        model: 'VW Golf II',
        power: 90,
        color: 'blue',
        carriage: 'hatchback',
        wheelsize: 14
    }
));