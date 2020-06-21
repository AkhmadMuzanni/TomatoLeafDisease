<html>
<head></head>
<body>
    <img id="sehat" src="sehat.jpg">
    <img id="tmv" src="tmv.jpg">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/@tensorflow/tfjs@1.5.2/dist/tf.min.js"></script>
    <script src="model.js"></script>
    <script src="Tomato.js"></script>
    <script>
    // console.log('test');
    // const sehat = document.getElementById("sehat");
    // window.model = 0;








    // function addModel() {
    //     tf.loadLayersModel('model/model.json').then(function(model) {
    //         // console.log('a');
    //         // console.log(model);
    //         window.model = model;
    //     });
    //     console.log(window.model);
    // }
    
    // window.onload = addModel;
    // var img = new Image();
    //   img.onload = function() {
    //     context.drawImage(img, 0, 0, 28, 28);
    //     data = context.getImageData(0, 0, 28, 28).data;
    //     var input = [];
    //     for(var i = 0; i < data.length; i += 4) {
    //       input.push(data[i + 2] / 255);
    //     }
    //     predict(input);
    //   };
    // var predict = function(input) {
    //   if (window.model) {
    //     window.model.predict([tf.tensor(input).reshape([3, 150, 150, 1])]).array().then(function(scores){
    //       scores = scores[0];
    //       predicted = scores.indexOf(Math.max(...scores));
    //       $('#sehat').html(predicted);
    //     });
    //   } else {
    //     // The model takes a bit to load, if we are too fast, wait
    //     setTimeout(function(){predict(input)}, 50);
    //   }
    // }
    // predict();

    // console.log(window.model);

    

    // const output = window.model.predict(tf.tensor2d(sehat));
    // console.log(output);

    // // Step 1: Load Model
    // const MODEL_PATH = 'model/model.json';
    // // let model;
    // export const loadModel = async () =>{
    //     console.log('loading model....');

    //     model = await tf.loadLayersModel(MODEL_PATH, {});

    //     model.summary();
    // };

    
    </script>
</body>
</html>