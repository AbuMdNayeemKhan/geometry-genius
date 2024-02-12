function calculateTriangleArea(){
    let triangleBaseInput = document.getElementById('triangle-base');
    let baseValue = triangleBaseInput.value;
    let baseValueCon = parseFloat(baseValue);

    let triangleHeightInput = document.getElementById('triangle-height');
    let heihgtValue = triangleHeightInput.value;
    let heightValueCon = parseFloat(heihgtValue);

    let triangleArea = 0.5 * baseValueCon * heightValueCon;
    let trianglePrint = document.getElementById('trianglePrint');

    trianglePrint.innerText = triangleArea;

}