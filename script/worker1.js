onmessage = function (e) {
    let workerResult = Number(e.data[0]) + Number(e.data[1]);
    postMessage(workerResult);
};
