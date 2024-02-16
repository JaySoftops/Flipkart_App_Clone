import Demo from "../Component/Demo";
import { mount, render, shallow } from "enzyme";
import { Button } from "@material-ui/core";

describe("Demo Page Test", () => {

    test("demo file's content check", () => {
        let wrapper = shallow(<Demo />)
        // expect(wrapper.contains(<div className="demo">Demo Body</div>)).toEqual(true);
        console.log('Hi everyone');
        // console.log(setProps());
        // wrapper.setProps({name: "Jai"});
        console.log(wrapper.debug());
    });

    // test("Full DOM rendering", () => {
    //     // sinon.spy(Foo.prototype,'componentDidMount');

    //     const wrapper = mount(<Demo />)
    //     expect(Foo.prototype.componentDidMount.calledOnce).toEqual(true);                               
    //     console.log(wrapper.debug());
    // });

    test("Static rendering by Render method", () => {
        let wrapper = render(<Demo />)
        console.log('Render method');
        console.log(wrapper.html());
    });

    test("Dive", () => {
        const wrapper = shallow(<Demo />);
        expect(wrapper.find(".span").length).toBe(1);
        // expect(wrapper.find(Button).dive().find('.MuiButton-text').length).toBe(1);
        wrapper.find('button').simulate('click');
        wrapper.find('button').simulate('click');
        wrapper.find('button').simulate('click');                              // Show 3 time's result by using number of time used this method
    })
});