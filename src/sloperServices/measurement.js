import {
    perimeterGuides, 
    slopeBustPoints,
    strapSideLengthAndDartExess,
    defineBustPointDartAndWaist,
    defineArmHole,
    defineNeckline,
    defineBustLocationRadius
} from './measurement-types';


const fullLength = 16;
const acrossSholder = 6;
const centerFrontLength = 13;
const acrossChest = 9;
const shoulderSlope = 17;
const bustSpan = 6;
const waistArc = 12;
const bustRadius = 2.5;


const guides = perimeterGuides({
    fullLength,
    acrossSholder,
    centerFrontLength,
    acrossChest,
});

const {
    A,
    B,
    C,
    C_END,
    D,
    D_END,
    E,
    E_END,
} = guides;

const slopeBustPts = slopeBustPoints({
    shoulderSlope,
    acrossSholder,
    bustSpan,
    BPoint: B,
    CPoint: C,
    DPoint: D    
});

const {
    I,
    I_END,
    J,
    K,
    L,
    M,
    M_END,
    F,
    G
} = slopeBustPts;

const strapSideAndDartExess = strapSideLengthAndDartExess({
    strapLength, 
    sideLength, 
    EPoint: E, 
    IPoint: I
});

const {
    N,
    O,
    P,
} = strapSideAndDartExess;

const BustPointDartAndWaist = defineBustPointDartAndWaist({
    waistArc, 
    OPoint: O, 
    PPoint: P, 
    KPoint: K, 
    FPoint: F, 
    GPoint: G, 
    IPoint: I, 
    DPoint: D, 
    BPoint: B
})

const armhole = defineArmHole(G, O, M_END);
const neckline = defineNeckline(I, I_END, D);
const bustLocationRadius = defineBustLocationRadius(bustRadius, K);