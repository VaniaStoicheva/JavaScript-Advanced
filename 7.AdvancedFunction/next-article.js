/**
 * Created by 1234 on 4.7.2017 г..
 */
function getArticleGenerator(articles) {
    let articlesToPrint=Object.assign([],articles);
    return function () {
        if(articlesToPrint.length>0){
            let article=$('<article>');
            article.append($(`<p>${articlesToPrint.shift()}</p>`));
            $('#content').append(article);
        }
    }
}
