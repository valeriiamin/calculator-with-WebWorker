window.addEventListener("load", function () {
    let worker;

    let input1 = document.querySelector("#input1");
    let input2 = document.querySelector("#input2");
    let result = document.querySelector("#input3");
    let buttons = document.querySelectorAll(".button");

    buttons.forEach((btn) => {
        btn.addEventListener("click", function () {
            if (window.Worker) {
                switch (btn.textContent) {
                    case "+":
                        worker = new Worker("/script/worker1.js");
                        sendWorker(worker, input1, input2, result);
                        break;
                    case "-":
                        worker = new Worker("/script/worker2.js");
                        sendWorker(worker, input1, input2, result);
                        break;
                    case "*":
                        worker = new Worker("/script/worker3.js");
                        sendWorker(worker, input1, input2, result);
                        break;
                    case "/":
                        worker = new Worker("/script/worker4.js");
                        sendWorker(worker, input1, input2, result);
                        break;
                    case "Clear":
                        worker.terminate();
                        input1.value = "";
                        input2.value = "";
                        result.value = "";
                        break;
                }
            } else {
                result.innerHTML =
                    "Unfortunately, your browser does not support WebWorker technology";
            }
        });
    });
});

function sendWorker(worker, input1, input2, result) {
    worker.postMessage([input1.value, input2.value]);
    worker.onmessage = function (e) {
        result.value = e.data;
    };
}
