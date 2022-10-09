// keep

// use bottom-statement

// keep !

// use #vertical-bounce-handler-at-pencil-from-knot
// use bottom-statement

// it is very hard to use "const"

// use bottom-statement

// it should be const in ctx knot in definition

// keep !

(function() {
    let passThrough = {}
    // keep

    const Pencil = window['@pencil/draft-compact-knot-rotating-at-bounced']['Pencil']
    const DraftFabrikk = window['@pencil/draft-compact-knot-rotating-at-bounced']['DraftFabrikk']

    // keep !
    let passThroughFromBottom = {}
    passThroughFromBottom['@pencil/draft-at-knot-rotating-at-bounced'] = {}
    // keep

    let SceneWalkingAroundLabirintAtStart = window['@pencil/viewported-knot-at-protected-scene']['SceneWalkingAroundLabirintAtStart']
    let KnotFromCubicProject = window['@pencil/viewported-knot-at-pub']['KnotFromCubicProject']
    let KnotFromCubicProjectFromBottomStatement = window['@pencil/viewported-knot-at-pub']['KnotFromCubicProjectFromBottomStatement']
    let KnotLabirint = window['@pencil/viewported-knot-at-pub']['KnotLabirint']
    let KnotLabirintFromRotated = window['@pencil/viewported-knot-at-pub']['KnotLabirintFromRotated']

    passThrough['@pencil/draft-at-knot-rotating-at-bounced'] = function (spawnedPointerBelongings) {
        // keep

        let pencil = new Pencil()
        let sceneWalkingAroundLabirintAtStart = new SceneWalkingAroundLabirintAtStart()

        let draftFabrikk = new DraftFabrikk()

        let bottomStatement = draftFabrikk.constructBottomStatement()

        pencil.rememberSample(sceneWalkingAroundLabirintAtStart, new KnotFromCubicProject())
        pencil.useScene(sceneWalkingAroundLabirintAtStart)

        // keep
        let knotFromCubicProject = pencil.constructKnot()

        draftFabrikk.connectKnotToBottomStatement(bottomStatement, knotFromCubicProject)

        // keep
        pencil.provideScene().putKnotConnectedToBottomStatement(knotFromCubicProject)

        // keep

        // keep !
        pencil.rememberSample(sceneWalkingAroundLabirintAtStart, new KnotFromCubicProjectFromBottomStatement())
        pencil.useScene(sceneWalkingAroundLabirintAtStart)

        let knotFromCubicProjectFromBottomStatement = pencil.constructKnot()

        draftFabrikk.connectKnotToBottomStatement(bottomStatement, knotFromCubicProjectFromBottomStatement)

        // keep
        pencil.provideScene().putKnotConnectedToBottomStatement(knotFromCubicProjectFromBottomStatement)

        // keep !
        // it is knot safe for memory to use only knotLabirintFromRotated
        pencil.rememberSample(sceneWalkingAroundLabirintAtStart, new KnotLabirint())
        pencil.useScene(sceneWalkingAroundLabirintAtStart)

        let knotLabirint = pencil.constructKnot()

        draftFabrikk.connectKnotToBottomStatement(bottomStatement, knotLabirint)

        // keep
        pencil.provideScene().putKnotConnectedToBottomStatement(knotLabirint)
        // keep !

        // keep !
        pencil.rememberSample(sceneWalkingAroundLabirintAtStart, new KnotLabirintFromRotated())
        pencil.useScene(sceneWalkingAroundLabirintAtStart)

        let knotLabirintFromRotated = pencil.constructKnot()

        draftFabrikk.connectKnotToBottomStatement(bottomStatement, knotLabirintFromRotated)

        pencil.provideScene().putKnotConnectedToBottomStatement(knotLabirintFromRotated)
        // keep !


        // keep
        let viewportPointerBelongings = draftFabrikk.constructViewport()
        pencil.useViewport(viewportPointerBelongings.atVerticalPosition, viewportPointerBelongings.atDistance, viewportPointerBelongings.atHorizontalPosition)

        pencil.draw()
        // keep
    }
// keep
window['@pencil/draft-knot-labirint-rotating-at-bounced'] = {
    passThrough: passThrough['@pencil/draft-at-knot-rotating-at-bounced'],
    passThroughFromBottom: passThroughFromBottom['@pencil/draft-at-bounced']
}
// keep

})()