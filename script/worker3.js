onmessage = function (e) {
    let workerResult = e.data[0] * e.data[1];
    postMessage(workerResult);
};
