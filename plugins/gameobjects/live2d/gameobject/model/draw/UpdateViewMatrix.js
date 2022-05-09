var UpdateViewMatrix = function (model, calcMatrix) {
    var gameObject = model.parent;
    var projectionMatrix = model._globalData.projectionMatrix;

    // Copy from projection matrix
    var matrix = model.viewMatrix;
    matrix.copyFrom(projectionMatrix);
    // Apply rotate
    matrix.rotate(-calcMatrix.rotationNormalized);
    // Apply scale
    // TODO: Fix scale in different canvas size
    matrix.scaleRelative(calcMatrix.scaleX, calcMatrix.scaleY);
    // Apply translate
    matrix.translate(
        projectionMatrix.toLocalX(calcMatrix.getX(0, 0)),
        projectionMatrix.toLocalY(calcMatrix.getY(0, 0))
    );


    var modelMatrix = model._modelMatrix;
    // Offset for origin
    // modelMatrix.translate(
    //     modelMatrix._width * (0.5 - gameObject.originX),
    //     modelMatrix._height * (gameObject.originY - 0.5)
    // );
    // Apply model matrix
    matrix.multiplyByMatrix(modelMatrix);

    return matrix;
}

export default UpdateViewMatrix;