import {
    perimeterGuides,
} from '../sloperServices/measurement-types';

describe('', () => {
    it('should be able to define construction points', ()=>{
        const fullLength = 10 
        const acrossShoulder = 10 
        const centerFrontLength = 10 
        const acrossChest = 10

        const guides = perimeterGuides({
            fullLength,
            acrossShoulder,
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
        expect([A.x,A,y]).toBe([0,0]);
        expect([B.x,B,y]).toBe([0,(10+(1/8))]);
        expect([C.x,C,y]).toBe([(10+(1/2)),3]);
        expect([D.x,D,y]).toBe([0,(10+(1/8)-10)]);
    })
})