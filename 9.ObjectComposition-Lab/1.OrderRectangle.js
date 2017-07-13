/**
 * Created by 1234 on 7.7.2017 г..
 */

function orderRect(rectsArray) {
    let rects=[];
    for (let [width,height] of rectsArray) {
        let rect=createRectangle(width,height);
        rects.push(rect);
    }
    rects.sort((a,b)=>a.compareTo(b));
    return rects;
    function createRectangle(width,height) {
        let rect={
            width:width,
            height:height,
            area:() => rect.width*rect.height,
            compareTo:function (other) {
                let result=other.area()-rect.area();
                return result || (other.width-rect.width);
            }
        }
        return rect;

    }
}

console.log(orderRect([[10, 5], [5, 12]]));