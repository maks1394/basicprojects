import {reducer} from "./UncontrolledAccordion";

test('reducer should work correct',()=>{
    const initialState = {
        collapsed:false
    }
    const finalState = reducer(initialState,{type:'TOGGLE-COLLAPSED'})

    expect(finalState.collapsed).toBe(true)
})