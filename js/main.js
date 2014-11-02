
$('document').ready(function(){

    var numbers1,numbers2,index,first,second,firstNumber,SecondNumber,result,blockUI,mistakeCount,beginTime,endTime,secondsDifference,arrayFirst,end;

    mistakeCount = 0;

    firstNumber = $('.first-number');
    SecondNumber = $('.second-number');
    result = $('.math-answer');
    blockUI = $('.block-ui');

    //Returns true if pair exists, false if it's the end
    function nextPair() {

        end = 'now';
        numbers1.forEach(function(num){
            if(num.length != 0) {
                end = 'not yet';
                return true;
            }
        });

        if(end !== 'not yet'){
            endTime = new Date();
            secondsDifference = (Math.abs(beginTime.getTime() - endTime.getTime())) / 1000;
            secondsDifference = secondsDifference.toFixed(1);
            blockUI.html('<div>' +
                'Task Completed!<br>' +
                'Time Took: ' + secondsDifference + ' Seconds<br>' +
                'Mistakes Made: ' + mistakeCount + '<br><br>' +
                '<span class="begin-button btn btn-default">Again?</span>' +
                '</div>');

            $('.begin-button').click(function(){

                //numbers1 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
                //numbers2 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
                numbers1 = [[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]];

                blockUI.fadeOut(300,function(){
                    beginTime = new Date();
                    nextPair();
                });
            });

            blockUI.fadeIn(300);
            return false;
        }

        if(validateAnswer()) {
            arrayFirst = findNotEmptyArray();
            console.log(arrayFirst);
            first = (arrayFirst + 1);
            numbers2 = numbers1[arrayFirst];
            firstNumber.html(first);

            index = numbers2.indexOf(numbers2[Math.floor(numbers2.length * Math.random())]);
            second = numbers2.splice(index, 1);
            SecondNumber.html(second);

            console.log(numbers1);
            result.html('');
        } else {
            result.css('color','red');
        }

        return true
    }

    function findNotEmptyArray() {
        while(1) {
            arrayFirst = numbers1.indexOf(numbers1[Math.floor(numbers1.length * Math.random())])
            if(numbers1[arrayFirst].length > 0){
                return arrayFirst;
            }
        }
    }

    function validateAnswer() {
        //see if something was initiated
        if(first !== undefined && second !== undefined) {
            var user_answer = parseInt(result.html());
            var real_answer = first * second;
            if(user_answer == real_answer) {
                return true;
            } else {
                mistakeCount++;
                return false;
            }
        } else {
            return true;
        }
    }

    $('.next-pair').click(function(){
        nextPair();
    });

    $('.number').click(function() {
        var number;
        number = $(this).html();
        result.html(result.html() + String(number));
    });

    $('.delete-digit').click(function(){
        result.css('color','white');
        var str = result.html();
        str = str.substring(0, str.length - 1);
        result.html(str);
    });

    $('.begin-button').click(function(){

        //numbers1 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
        //numbers2 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
        numbers1 = [[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]];

        blockUI.fadeOut(300,function(){
            beginTime = new Date();
            nextPair();
        });
    });
});

