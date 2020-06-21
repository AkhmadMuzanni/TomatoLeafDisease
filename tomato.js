class Tomato {

    constructor() {
        let $ = document.getElementById.bind(document);
        this.model = new Model;

        this.imgSehat = $("img-display");
        this.tensorSehat = tf.browser.fromPixels(this.imgSehat);
    }


}

// =============== Predict Result ================

let tomato = new Tomato;
tomato.prediction = tomato.model._model;
const label = ['Bacterial Spot', 'Early Blight', 'Healthy', 'Late Blight', 'Leaf Mold', 'Septoria Leaf Spot', 'Spider Mites / Two Spotter Spider Mites', 'Target Spot', 'Tomato Mosaic Virus', 'Tomato Yellow Leaf Curl Virus'];
// const sehat = document.getElementById("sehat");
const sehat = document.getElementById("img-display");

function displayResult(index) {
    $('#result').show();
    $('#diagnosis').html('Your tomato have been diagnosed with : <strong>' + label[index] + '<strong>');
}

$("#btn-check").click(function() {
    // console.log(tomato.model._model);
    let $ = document.getElementById.bind(document);
    tomato.tensorImage = tf.browser.fromPixels($("img-display"));

    tfResize = tf.image.resizeBilinear(tomato.tensorImage, [150, 150]);
    tomato.prediction = tomato.model._model.predict(tfResize.expandDims(0)).as1D();
    tomato.argMax = tomato.prediction.argMax().dataSync()[0]
    tomato.maxValue = tomato.prediction.max().dataSync()[0]
    console.log(tomato.prediction);
    console.log(tomato.argMax);
    console.log(tomato.maxValue);
    displayResult(tomato.argMax);

});

// =============== Visualization ================

console.log($('#img-tomato'));
$('#img-tomato').hide();
$('#feature').hide();
$('#result').hide();

$("#img-name").click(function() {
    $('#img-tomato').click();
});

function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function(e) {
            $('#img-display').attr('src', e.target.result);
        }

        reader.readAsDataURL(input.files[0]); // convert to base64 string
    }
}

$("#img-tomato").change(function() {
    $('#img-name').val($('#img-tomato').val().replace(/^.*\\/, ""));
    readURL(this);
});