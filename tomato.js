class Tomato {

    constructor() {
        let $ = document.getElementById.bind(document);
        this.model = new Model;

        this.imgSehat = $("sehat");
        this.tensorSehat = tf.browser.fromPixels(this.imgSehat);
    }


}

let tomato = new Tomato;
tomato.prediction = tomato.model._model;
const sehat = document.getElementById("sehat");

$("#sehat").click(function() {
    // console.log(tomato.model._model);
    tfResize = tf.image.resizeBilinear(tomato.tensorSehat, [150, 150]);
    tomato.prediction = tomato.model._model.predict(tfResize.expandDims(0)).as1D();
    tomato.argMax = tomato.prediction.argMax().dataSync()[0]
    tomato.maxValue = tomato.prediction.max().dataSync()[0]
    console.log(tomato.prediction);
    console.log(tomato.argMax);
    console.log(tomato.maxValue);

    // console.log(tomato.tensorSehat.expandDims(0).shape);
    // console.log(tfResize.shape);


});