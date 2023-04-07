    onmessage = function (e) {
        let workerResult;
        if(e.data[1] == '0'){
        workerResult = 'Is not possible!!!';
    } else {
        workerResult = Math.round(e.data[0] / e.data[1]);
    }        
        postMessage(workerResult);
    }