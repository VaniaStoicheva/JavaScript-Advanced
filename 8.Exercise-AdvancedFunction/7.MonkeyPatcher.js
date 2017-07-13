/**
 * Created by 1234 on 6.7.2017 г..
 */
let solution=(function () {
    let result={};
    let post={
        id:'3',
        author:'emil',
        content:'',
        upvote:100,
        downvote:100,
    }
   return {call:function (post,vote) {
        if(vote==='upvote'){
            this.upvote++;
            result['upvote']=post.upvote;
        }else if(vote==='downvote'){
            this.downvote++;

            }

        }


}();
solution.call('post','upvote');
solution.call('post', 'downvote');
let score = solution.call('post', 'score'); // [127, 127, 0
solution.call('post', 'downvote');        // (executed 50 times)
score = solution.call('post', 'score');
