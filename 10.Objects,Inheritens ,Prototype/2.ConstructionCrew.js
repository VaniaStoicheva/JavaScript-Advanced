/**
 * Created by 1234 on 10.7.2017 г..
 */
function construction(worker) {
    if(worker.handsShaking){
        worker.bloodAlcoholLevel+=worker.weight*worker.experience*0.1;
        worker.handsShaking=false;
    }
    return worker;
}
console.log(construction({
        weight: 80,
        experience: 1,
        bloodAlcoholLevel: 0,
        handsShaking: true
    }
));