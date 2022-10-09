
// keep

// use bottom-statement
// it should be "const" in ctx knot in definition
// keep !

// keep
// keep @core-lib/draft-compact.js

// keep
(function() {

function DraftFabrikk(){
    let that = this

    let dictKnot = {}
    let queueKnot = []

    let dict = {}
    let queue = []

    // #descending-from-the-sun
    that.constructKnotAtRectangle = function (y, x, z) {
        dictKnot[JSON.stringify({y, x, z})] = {y, x, z}
        queueKnot.push({y, x, z})

        return {y, x, z}
    }
    that.spawnPointerBelongingsAtRectangle = function (y, x, z, /* keep */ radius, /* keep ! */ d, f, frontRatio, debthScaleRatio, frontScaleRatio, profileScaleRatio) {
        // keep
        // #descending-from-the-sun
        // what's simple we are not using "o"

        /*
        for(let pointerBelongings = Array.from(arguments.callee), i = 0, o = {}; i < pointerBelongings.length; i++) {
            o[[0].indexOf(i) !== -1 ? 'y' : [1].indexOf(i) !== -1 ? 'x' : 'z'] = pointerBelongings[i]
            if(i === 2) return o
        }
        */

        // let me rewrite it
        // keep

        /*
        return {
            y, x, z
        }
        */
        // keep

        // let me look forward

        return {
            y,
            x,
            z,

            radius, d, f, frontRatio,
            debthScaleRatio, frontScaleRatio, profileScaleRatio
        }
    }
    // keep !
    that.constructKnotFromRotated = function (y, x, z, radius, frontRatio, d, f, debthScaleRatio, profileScaleRatio, frontScaleRatio) {
        let knot = new RectangleOnPaperFromRotated(radius, frontRatio, d, f, debthScaleRatio, profileScaleRatio, frontScaleRatio)

        knot.assignCoordinates(y, x, z)

        // keep
        knot.useKnotAtRectangle(queueKnot)

        // no luck, there mate !
        // keep

        return knot
    }
    // keep !

    that.constructKnot = function (y, x, z, radius, frontRatio, d, f, debthScaleRatio, profileScaleRatio, frontScaleRatio) {
        let knot = new RectangleOnPaper(radius, frontRatio, d, f, debthScaleRatio, profileScaleRatio, frontScaleRatio)

        knot.assignCoordinates(y, x, z)

        // keep
        knot.useKnotAtRectangle(queueKnot)

        // no luck, there mate !
        // keep

        return knot
    }
}

function Pencil() {
    let that = this

    let queueKnotAtRectangle = []
    let dictKnot = {}

    let dictSpawn = {}
    let queueSpawn = []

    let selectedKnot
    let selectedSpawn

    let spawnedPointerBelongingsAtRotated
    let debthPointerBelongingsAtRotated

    that.useRotatedKnot = function (knotAtRectangle, spawnedPointerBelongingsAtRotatedKnotFromBottomStatement) {
        // keep
        spawnedPointerBelongingsAtRotated = spawnedPointerBelongingsAtRotatedKnotFromBottomStatement
    }

    that.useRotatedKnotAtDebth = function (knotAtRectangle, debthPointerBelongingsAtRotatedKnot) {
        // keep
        debthPointerBelongingsAtRotated = debthPointerBelongingsAtRotatedKnot
    }

    that.remember = function (knotAtRectangle) {
        dictKnot[knotAtRectangle] = knotAtRectangle
        queueKnotAtRectangle.push(knotAtRectangle)
    }
    that.rememberSpawn = function (knotAtRectangle, spawnedPointerBelongings) {
        // keep
        dictSpawn[spawnedPointerBelongings] = {
            spawnedPointerBelongings,
            knotAtRectangle
        }
        queueSpawn.push(spawnedPointerBelongings)
        that.useSpawn(spawnedPointerBelongings)
    }
    that.useSpawn = function (spawnedPointerBelongings) {
        selectedSpawn = spawnedPointerBelongings
    }
    that.useKnot = function (knot) {
        selectedKnot = knot
    }

    that.draw = function () {
        // keep
        selectedKnot.atPointerBelongings(selectedSpawn)
        // keep
        selectedKnot.atRotatedPointerBelongingsFromBottomStatement(spawnedPointerBelongingsAtRotated)

        selectedKnot.atRotatedPointerBelongingsAtDebthFromBottomStatement(debthPointerBelongingsAtRotated)

        selectedKnot.draw()
    }
}

// use #descending-from-the-sun
function RectangleOnPaperFromRotated(radius, frontRatio, p, d, debthScaleRatio, profileScaleRatio, frontScaleRatio) {
    let that = this

    that.assignCoordinates = function (y, x, z) {
        that.y = y
        that.x = x
        that.z = z
    }
    const FIELD_OF_VIEW = window['@pencil/draft-knot-labirint-from-rotated']['passThroughFromBottom']['FIELD_OF_VIEW']

    const PROJECTION_CENTER_Y = window['@pencil/draft-knot-labirint-from-rotated']['passThroughFromBottom']['PROJECTION_CENTER_Y']

    const PROJECTION_CENTER_X = window['@pencil/draft-knot-labirint-from-rotated']['passThroughFromBottom']['PROJECTION_CENTER_X']

    // keep !
    // let rotatedPointerBelongings
    // let rotatedPointerBelongingsAtDebth


    // keep !
    that.project = function (y, x, z) {
        let SIZE_PROJECTION = FIELD_OF_VIEW / (FIELD_OF_VIEW + z)

        return {
            size_projection: SIZE_PROJECTION,
            y: (SIZE_PROJECTION * y) + PROJECTION_CENTER_Y,
            x: (SIZE_PROJECTION * x) + PROJECTION_CENTER_X
        }
    }

    that.rotatedProject = function (y, x, z, counter, kindKnot) {
        let SIZE_PROJECTION = FIELD_OF_VIEW / (FIELD_OF_VIEW + z)
        // keep !

        // that's "sin" and "cos"
        let rotatedProjection
        let rotatedProjectionAtDebth

        // is it same pencil? yes, it is same pencil !
        if([2].indexOf(counter) !== -1 && kindKnot === 'startsFrom') {

        }
        if([2].indexOf(counter) !== -1 && kindKnot === 'closing') {
            // is it "gorgulya"?
            rotatedProjection = 1 / that.rotatedPointerBelongings.rotating
        }

        if([0].indexOf(counter) !== -1 && kindKnot === 'startsFrom') {

        }
        if([0].indexOf(counter) !== -1 && kindKnot === 'closing') {
            rotatedProjection = that.rotatedPointerBelongings.rotating
        }

        if([6].indexOf(counter) !== -1 && kindKnot === 'startsFrom') {
            // keep !
            rotatedProjectionAtDebth = that.rotatedPointerBelongingsAtDebth.rotatingAtDebth

            return {
                size_projection: SIZE_PROJECTION,
                y: (SIZE_PROJECTION * y) + PROJECTION_CENTER_Y,
                x: (SIZE_PROJECTION * x /* keep */ * rotatedProjectionAtDebth) + PROJECTION_CENTER_X
            }
        }
        if([6].indexOf(counter) !== -1 && kindKnot === 'closing') {

        }

        if([4].indexOf(counter) !== -1 && kindKnot === 'startsFrom') {
            rotatedProjection = 1 / that.rotatedPointerBelongings.rotating

            return {
                size_projection: SIZE_PROJECTION,
                y: (SIZE_PROJECTION * y /* keep */ * rotatedProjection) + PROJECTION_CENTER_Y,
                x: (SIZE_PROJECTION * x) + PROJECTION_CENTER_X
            }
        }
        if([4].indexOf(counter) !== -1 && kindKnot === 'closing') {
            // is it "gorgulya"?
            /* keep */
            rotatedProjectionAtDebth = that.rotatedPointerBelongingsAtDebth.rotatingAtDebth

            return {
                size_projection: SIZE_PROJECTION,
                y: (SIZE_PROJECTION * y /* keep */) + PROJECTION_CENTER_Y,
                x: (SIZE_PROJECTION * x /* keep */ * rotatedProjectionAtDebth) + PROJECTION_CENTER_X
            }
        }

        if([5].indexOf(counter) !== -1 && kindKnot === 'startsFrom') {
            // keep !
            // is it "gorgulya"?
            rotatedProjectionAtDebth = that.rotatedPointerBelongingsAtDebth.rotatingAtDebth

            return {
                size_projection: SIZE_PROJECTION,
                y: (SIZE_PROJECTION * y /* keep */) + PROJECTION_CENTER_Y,
                x: (SIZE_PROJECTION * x /* keep */ * rotatedProjectionAtDebth) + PROJECTION_CENTER_X
            }
        }
        if([5].indexOf(counter) !== -1 && kindKnot === 'closing') {
            // keep !
            // is it "gorgulya"?
            // keep !
            rotatedProjectionAtDebth = that.rotatedPointerBelongingsAtDebth.rotatingAtDebth

            return {
                size_projection: SIZE_PROJECTION,
                y: (SIZE_PROJECTION * y) + PROJECTION_CENTER_Y,
                x: (SIZE_PROJECTION * x /* keep */ * rotatedProjectionAtDebth) + PROJECTION_CENTER_X
            }
        }

        if([3].indexOf(counter) !== -1 && kindKnot === 'startsFrom') {
            // is it "gorgulya"?
            rotatedProjection = 1 / that.rotatedPointerBelongings.rotating
        }
        if([3].indexOf(counter) !== -1 && kindKnot === 'closing') {

        }

        if([1].indexOf(counter) !== -1 && kindKnot === 'startsFrom') {
            rotatedProjection = that.rotatedPointerBelongings.rotating
        }
        if([1].indexOf(counter) !== -1 && kindKnot === 'closing') {

        }

        if([7].indexOf(counter) !== -1 && kindKnot === 'startsFrom') {
            // keep
        }
        if([7].indexOf(counter) !== -1 && kindKnot === 'closing') {
            // keep !
            // is it "gorguluya"?
            rotatedProjectionAtDebth = that.rotatedPointerBelongingsAtDebth.rotatingAtDebth

            return {
                size_projection: SIZE_PROJECTION,
                y: (SIZE_PROJECTION * y /* keep */ * that.rotatedPointerBelongings.rotating) + PROJECTION_CENTER_Y,
                x: (SIZE_PROJECTION * x /* keep */ * rotatedProjectionAtDebth + SIZE_PROJECTION * x * 0.14) + PROJECTION_CENTER_X
            }
        }

        if([8].indexOf(counter) !== -1 && kindKnot === 'startsFrom') {
            // keep !
            // is it "gorgulya"?
            // rotatedProjectionAtDebth = that.rotatedPointerBelongingsAtDebth

            rotatedProjectionAtDebth = that.rotatedPointerBelongingsAtDebth.rotatingAtDebth

            rotatedProjection = that.rotatedPointerBelongings.rotating

            return {
                size_projection: SIZE_PROJECTION,
                y: (SIZE_PROJECTION * y /* keep ! */ * rotatedProjection) + PROJECTION_CENTER_Y,
                x: (SIZE_PROJECTION * x /* keep */ * rotatedProjectionAtDebth + SIZE_PROJECTION * x * 0.14) + PROJECTION_CENTER_X
            }
        }
        if([8].indexOf(counter) !== -1 && kindKnot === 'closing') {
            // keep !
            // is it "gorgylua"?
            rotatedProjectionAtDebth = that.rotatedPointerBelongingsAtDebth.rotatingAtDebth

            return {
                size_projection: SIZE_PROJECTION,
                y: (SIZE_PROJECTION * y) + PROJECTION_CENTER_Y,
                x: (SIZE_PROJECTION * x /* keep */ * rotatedProjectionAtDebth) + PROJECTION_CENTER_X
            }
        }

        // spawnedPointerBelongings, rotatedPointerBelongings, rotatedPointerBelongingsAtDebth
        // keep !
        if([3,2,1,0].indexOf(counter) !== -1) {
            return {
                size_projection: SIZE_PROJECTION,
                y: (SIZE_PROJECTION * y /* keep ! */ * (rotatedProjection ? rotatedProjection : 1)) + PROJECTION_CENTER_Y,
                x: (SIZE_PROJECTION * x) + PROJECTION_CENTER_X
            }
        }
        if([6,5,4].indexOf(counter) !== -1) {
            // keep
            return {
                size_projection: SIZE_PROJECTION,
                y: (SIZE_PROJECTION * y /* keep */ * (rotatedProjectionAtDebth ? rotatedProjectionAtDebth : 1)) + PROJECTION_CENTER_Y,
                x: (SIZE_PROJECTION * x /* keep */ * (rotatedProjectionAtDebth ? rotatedProjectionAtDebth : 1)) + PROJECTION_CENTER_X
            }
        }
        if([8,7].indexOf(counter) !== -1) {
            // keep
            return {
                size_projection: SIZE_PROJECTION,
                y: (SIZE_PROJECTION * y) + PROJECTION_CENTER_Y,
                x: (SIZE_PROJECTION * x) + PROJECTION_CENTER_X
            }
        }
    }

    // #descending-from-the-sun
    let lines = [[0, 1], [1, 2], [2, 3], [3, 0], [3, 4], [4, 5], [5, 0], /* keep */ [2, 6], /* keep ! */ [6, 7], /* that's mine */ /*[7, 8]*/]
    let verticles


    // keep
    that.useKnotAtRectangle = function (queueKnot) {
        that.queueKnot = queueKnot
    }

    that.atPointerBelongings = function (pointerBelongings) {
        that.pointerBelongings = pointerBelongings
    }
    that.atRotatedPointerBelongingsFromBottomStatement = function (rotatedPointerBelongingsFromBottomStatement) {
        that.rotatedPointerBelongings = rotatedPointerBelongingsFromBottomStatement
    }
    that.atRotatedPointerBelongingsAtDebthFromBottomStatement = function (rotatedPointerBelongingsAtDebthFromBottomStatement) {
        that.rotatedPointerBelongingsAtDebth = rotatedPointerBelongingsAtDebthFromBottomStatement
    }

    // #descending-from-the-sun
    that.descendingFromTheSun = function (lines) {
        return lines.reverse()[0]
    }

    that.draw = function () {
        // keep

        // y, x, z
        // that.pointerBelongings

        // keep !

        const handleProjectAt1stIteration = window['@pencil/handle-knot-labirint-from-rotated']['handleProjectAt1stIteration']
        const handleProjectAt2ndIteration = window['@pencil/handle-knot-labirint-from-rotated']['handleProjectAt2ndIteration']

        // keep
        for(let i = 0; i < lines.length; i++) {
            let radius = that.pointerBelongings.radius
            let v1 = {
                y: that.pointerBelongings.y + (that.pointerBelongings.radius * /* keep */ /* that.queueKnot[lines[i][0]][0] */ [1, '-'].reverse().join('')) * that.pointerBelongings.profileScaleRatio + radius * that.queueKnot[lines[that.descendingFromTheSun([/* keep */ i])][0]].y * profileScaleRatio,
                x: that.pointerBelongings.x + (that.pointerBelongings.radius * /* keep */ 1) * that.pointerBelongings.frontScaleRatio + radius * that.queueKnot[lines[that.descendingFromTheSun([/* keep */ i])][0]].x * frontScaleRatio,
                z: that.pointerBelongings.z + (that.pointerBelongings.radius * /* keep */ 1) * /* let me use endable debth */ that.pointerBelongings.debthScaleRatio + radius * that.queueKnot[lines[that.descendingFromTheSun([/* keep */ i])][0]].z * debthScaleRatio
            }
            let v2 = {
                y: that.pointerBelongings.y + (that.pointerBelongings.radius * /* keep */ [1, '-'].reverse().join('')) * that.pointerBelongings.profileScaleRatio + radius * that.queueKnot[lines[that.descendingFromTheSun([/* keep */ i])][1]].y * profileScaleRatio,
                x: that.pointerBelongings.x + (that.pointerBelongings.radius * /* keep */ 1) * that.pointerBelongings.frontScaleRatio + radius * that.queueKnot[lines[that.descendingFromTheSun([/* keep */ i])][1]].x * frontScaleRatio,
                z: that.pointerBelongings.z + (that.pointerBelongings.radius * /* keep */ 1) * that.pointerBelongings.debthScaleRatio + radius * that.queueKnot[lines[that.descendingFromTheSun([/* keep */ i])][1]].z * debthScaleRatio
            }

            // keep !
            // let v1Project = that.project(v1.y, v1.x, v1.z)
            // let v2Project = that.project(v2.y, v2.x, v2.z)

            // console.log("v1", v1Project, "v2", v2Project)
            // there should be loop pointer
            // to allow use continue inside
            let loopPointer /* keep */
            let counter = JSON.parse(JSON.stringify(i))

            let rotatedProjectV1 = that.rotatedProject(v1.y, v1.x, v1.z, counter, "startsFrom")
            let rotatedProjectV2 = that.rotatedProject(v2.y, v2.x, v2.z, counter, "closing")

            // handleProjectAt1stIteration(v1Project, v2Project, p, frontRatio, d, counter)
            handleProjectAt1stIteration(rotatedProjectV1, rotatedProjectV2, p, frontRatio, d, counter)

            // keep !
            // if(v1Project && v2Project) {
            //     keep
            // } else {
            //     continue
            // }
            // keep !
            if(rotatedProjectV1 && rotatedProjectV2) {
                // keep
            } else {
                continue
            }

            let ctx = window['@pencil/draft-knot-labirint-from-rotated']['passThroughFromBottom']['canvas']
            // console.log(window['@pencil/draft-knot-from-cubic-project']['passThroughFromBottom'])

            // keep !
            // ctx.beginPath()
            // ctx.moveTo(v1Project.x, v1Project.y)
            // ctx.lineTo(v2Project.x, v2Project.y)
            // ctx.stroke()
            // keep !

            ctx.beginPath()
            ctx.moveTo(rotatedProjectV1.x, rotatedProjectV1.y)
            ctx.lineTo(rotatedProjectV2.x, rotatedProjectV2.y)
            ctx.stroke()

            // keep !
        }
        // keep
        return

        // keep
        for(let i = 0; i < lines.length; i++) {
            let radius = that.pointerBelongings.radius
            let v1 = {
                y: that.pointerBelongings.y + (that.pointerBelongings.radius * /* keep */ /* that.queueKnot[lines[i][0]][0] */ [1, '-'].reverse().join('')) * that.pointerBelongings.profileScaleRatio + radius * that.queueKnot[lines[that.descendingFromTheSun([/* keep */ i])][0]].y * profileScaleRatio,
                x: that.pointerBelongings.x + (that.pointerBelongings.radius * /* keep */ 1) * that.pointerBelongings.frontScaleRatio + radius * that.queueKnot[lines[that.descendingFromTheSun([/* keep */ i])][0]].x * frontScaleRatio,
                z: that.pointerBelongings.z + (that.pointerBelongings.radius * /* keep */ 1) * /* let me use endable debth */ that.pointerBelongings.debthScaleRatio + radius * that.queueKnot[lines[that.descendingFromTheSun([/* keep */ i])][0]].z * debthScaleRatio
            }
            let v2 = {
                y: that.pointerBelongings.y + (that.pointerBelongings.radius * /* keep */ [1, '-'].reverse().join('')) * that.pointerBelongings.profileScaleRatio + radius * that.queueKnot[lines[that.descendingFromTheSun([/* keep */ i])][1]].y * profileScaleRatio,
                x: that.pointerBelongings.x + (that.pointerBelongings.radius * /* keep */ 1) * that.pointerBelongings.frontScaleRatio + radius * that.queueKnot[lines[that.descendingFromTheSun([/* keep */ i])][1]].x * frontScaleRatio,
                z: that.pointerBelongings.z + (that.pointerBelongings.radius * /* keep */ 1) * that.pointerBelongings.debthScaleRatio + radius * that.queueKnot[lines[that.descendingFromTheSun([/* keep */ i])][1]].z * debthScaleRatio
            }

            let v1Project = that.project(v1.y, v1.x, v1.z)
            let v2Project = that.project(v2.y, v2.x, v2.z)

            let loopPointer /* keep */
            // keep
            // use loop pointer
            let counter = JSON.parse(JSON.stringify(i))

            let frontRadius = that.pointerBelongings.radius

            handleProjectAt2ndIteration(loopPointer, v1Project, v2Project, p, frontRatio, d, counter, frontRadius)

            if(v1Project && v2Project) {
                // keep
            } else {
                continue
            }

            let ctx = window['@pencil/draft-knot-labirint-from-rotated']['passThroughFromBottom']['canvas']
            // console.log(window['@pencil/draft-knot-from-cubic-project']['passThroughFromBottom'])

            ctx.beginPath()
            ctx.moveTo(v1Project.x, v1Project.y)
            ctx.lineTo(v2Project.x, v2Project.y)
            ctx.stroke()
        }

    }
}

window['@pencil/draft-compact-knot-labirint-from-rotated'] = {
    DraftFabrikk,
    Pencil
}

})()
// keep
// don't stay here
// use #vertical-bounce-handler


