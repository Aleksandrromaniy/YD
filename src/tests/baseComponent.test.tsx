import { renderHook } from '@testing-library/react-hooks'
import React from "react";
import BaseComponent from "../../component-test";

let result: any;
describe('BaseComponent method UNIT tests', () => {
    beforeAll(()=>{
        result =  renderHook(() => BaseComponent({name:'Alex'}));
    })
    test('Displayed correct Name value', () => {
        expect(result.result.current.props.children[0].props.children[1]).toBe("Alex");

    })
    test('Default Age value set as 18', () => {
        expect( result.result.current.props.children[2].props.children[1]).toBe( 18)
    });
    test('BaseComponent return correct types of Name and Age fields ', () => {
        expect(typeof result.result.current.props.children[2].props.children[1]).toBe(typeof 18)
        expect(typeof result.result.current.props.children[0].props.children[1]).toBe(typeof 'Alex');
    });

});