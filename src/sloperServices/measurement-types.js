//  measurement type includes the following
//  measurement id
//  measurment type/name
//  measurement in inches
//  measurement conversion
import {Coordinate } from './grid';
import Vector from 'vector';
import makerjs from 'makerjs';


export default {
    perimiterGuides: (
        {
            fullLength, 
            acrossShoulder, 
            centerFrontLength, 
            acrossChest
        }
    ) => {
        const A = new Vector(0,0);
        const B = new Vector(0,fullLength+(1/8));
        const C = new Vector(acrossShoulder+(1/2), 0);
        const C_END = new Vector(acrossShoulder+(1/2), 3);
        const D = new Vector(0, fullLength+(1/8)-centerFrontLength);
        const D_END = new Vector(4, fullLength+(1/8)-centerFrontLength);
        const E = new Vector(acrossChest+(1/4), fullLength+(1/8)-centerFrontLength);
        const E_END = new Vector(acrossChest+(1/4),fullLength+(1/8)-centerFrontLength-11);
        return {
            A,
            B,
            C,
            C_END,
            D,
            D_END,
            E,
            E_END,
        }
    },
    slopeBustPoints: (
        {
            shoulderSlope, 
            acrossShoulder, 
            bustSpan, 
            BPoint, 
            CPoint, 
            DPoint
        }
    ) => {
        const segmentG_y = Math.sqrt(Math.pow(shoulderSlope,2) + Math.pow(CPoint.x,2) - acrossShoulder+(1/2));
        const segmentCI_x = Math.sqrt(Math.pow(shoulderLength,2) + Math.pow(segmentG_y,2));
        const G = new Vector(CPoint.x, segmentG_y);
        
        const H = new Vector(
            (Gpoint.x-BPoint.x)/2,
            (Gpoint.y-BPoint.y)/2
        );
            
        const I = new Vector(CPoint.x - segmentCI_x, 0);
        const I_END = new Vector(CPoint.x * (2/3),DPoint.y);
        const J = new Vector(0, H.y);
        const K = new Vector((bustSpan/2)+(1/4), H.y);
        const L = new Vector(0, (H.y-DPoint.y)/2);
        const M = new Vector(acrossShoulder+(1/8));
        const M_END = new Vector(acrossShoulder+(1/8), (Hpoint.y-DPoint.y)/2-2);
        const F = new Vector(BPoint.x+3, BPoint.y+(1/4))
        return {
            I,
            I_END,
            J,
            K,
            L,
            M,
            M_END,
            F,
            G,
        }
    },
    strapSideLengthAndDartExess: (strapLength, sideLength, EPoint, IPoint) => {
        const segmentIN_y = Math.sqrt(Math.pow(strapLength,2) + Math.pow(IPoint.y,2));

        const N = new Vector(EPoint.x, segmentIN_y);
        const O = new Vector(EPoint.X, segmentIN_y - sideLength);
        const p = new Vector(EPoint.x+1.25, segmentIN_y);
        return {
            N,
            O,
            p,
        }
    },
    defineBustPointDartandWaist: (
        {
            waistArc, 
            OPoint, 
            PPoint, 
            KPoint, 
            FPoint, 
            GPoint, 
            IPoint, 
            DPoint, 
            BPoint
    }
    ) => {
        const slope = (PPoint.x - FPoint.x) / (PPoint.y - FPoint.y)
        const QPoint = new coordinate(
            (waistArc+(1/8))*slope+PPoint.x,
            (waistArc+(1/8))*slope+PPoint.y
            );
        const DB_vector = new makerjs.paths.Line([DPoint.x, DPoint.y], [BPoint.x, BPoint.y]);
        const OP_vector = new makerjs.paths.Line([OPoint.x, OPoint.y], [PPoint.x, PPoint.y]);
        const GI_vector = new makerjs.paths.Line([GPoinnt.x, GPoint.y],[Ipoint.x, Ipoint.y]);
        const PQ_vector = new makerjs.paths.Line([PPoinnt.x, PPoint.y],[Qpoint.x, Qpoint.y]);
        const FB_vector = new makerjs.paths.Line([FPoinnt.x, FPoint.y],[Bpoint.x, Bpoint.y]);
        const KF_vector = new makerjs.paths.Line([KPoint.x, KPoint.y],[FPoint.x, FPoint.y]);
        const KQ_vector = new makerjs.paths.Line([KPoint.x, KPoint.y],[QPoint.x, QPoint.y]);
        // Draw Dart Legs: Start from K and draw a line down to F. Measure this dart leg ______.
        // Draw second dart leg the same length, from K passing through Q and mark R.
        // Define Dart Point: Draw a line 5/8” long down from K, centered within dart legs.
        // Draw new Dart Legs from Dart Point down to F and R.
        // Define Waistline: Draw curved lines from P-R and B-F. P and B corners are square.
        return {
            DB_vector,
            OP_vector,
            GI_vector,
            PQ_vector,
            FB_vector,
            KF_vector,
            KQ_vector,
        }
    },
    defineArmHole: (GPoint, OPoint, M_END) => {
        const armHole = new MakerJs.models.BezierCurve([
            [GPoint.x, GPoint.y],
            [M_END.x, M_END.y],
            [OPoint.x, OPoint.y],
        ]);
        return armHole;
    },
    defineNeckline: (IPoint, I_END, DPoint) => {
        const neckLine = new MakerJs.models.BezierCurve([
            [IPoint.x, Ipoint.y],
            [I_END.x, I_END.y],
            [I_END.x, I_END.y],
            [DPoint.x, DPoint.y],
        ])
        return neckLine;
    },
    defineBustLocationRadius: (BustRadius, KPoint) => {
        return new makerjs.paths.Circle(BustRadius).origin([KPoint.x, KPoint.y]);
    },
}