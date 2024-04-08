import Demo from "../Component/Demo";
import { mount, render, shallow } from "enzyme";
import { Button } from "@material-ui/core";
import InnerDemo from "../Component/InnerDemo";
import * as math from "../Context/Moc";

describe.skip("Demo Page Test", () => {                                                                                    // describe the wrapper function of whole file's test cases.

    test("demo file's content check", () => {
        let wrapper = shallow(<Demo />)                                                                               // shallow method renders all the child component, it lets us render elements only one level deep "first level"
        // expect(wrapper.contains(<div className="demo">Demo Body</div>)).toEqual(true);
        console.log('Hi everyone');
        // console.log(setProps());
        // wrapper.setProps({name: "Jai"});
        console.log(wrapper.debug());
    });

    // test("Full DOM rendering", () => {
    //     // sinon.spy(Foo.prototype,'componentDidMount');

    //     const wrapper = mount(<Demo />)                                                                           // mount method renders the Full DOM, including Parent and Child Component, it test whole life cycle method of react app.
    //     expect(Foo.prototype.componentDidMount.calledOnce).toEqual(true);                               
    //     console.log(wrapper.debug());
    // });

    test("Static rendering by Render method", () => {
        let wrapper = render(<Demo />)
        console.log('Render method');
        console.log(wrapper.html());
    });

    test("Dive and simulate", () => {
        const wrapper = shallow(<Demo />);
        expect(wrapper.find(".span").length).toBe(1);
        // expect(wrapper.find(Button).dive().find('.MuiButton-text').length).toBe(1);
        wrapper.find('button').simulate('click');
        wrapper.find('button').simulate('click');
        wrapper.find('button').simulate('click');                                                                      // Show 3 time's result by using number of time used this method
    });

    // "it" or "test" is a method to write the test cases and it has 2 arguments,
    // first one is for description 
    // second one is for a callback function that contains the actual test logic. 
    it("click count", () => {
        let wrapper = shallow(<Demo />);
        // find method find the class name and confirm the number of time classname by toEqual
        expect(wrapper.find('.demoButton-0').length).toEqual(1);

        // simulate method used for onClick event
        wrapper.find('.demoButton-0').simulate('click');

        // this statement has updated class number because of simulate method, without simulate this test case is failed.
        expect(wrapper.find('.demoButton-1').length).toEqual(1);
    });

    it("dive, check child component class name", () => {
        let wrapper = shallow(<Demo />)

        // dive method is used for child component element or classname or other things.
        expect(wrapper.find(InnerDemo).dive().find('.custom-border').length).toBe(1);
    });

    it("snapshot 1", () => {
        let wrapper = shallow(<InnerDemo />)

        // snapshot method creates or take a screenshot of file in the snap file,snapshot folder.
        // expect(wrapper).toMatchSnapshot();
    });

    it("snapshot 2", () => {
        let wrapper = shallow(<InnerDemo />)
        // expect(wrapper).toMatchSnapshot();
    });

    it("snapshot 3", () => {
        let wrapper = shallow(<InnerDemo />)
        // expect(wrapper).toMatchSnapshot();
    });

    it("snapshot of Demo file", () => {
        let wrapper = shallow(<Demo />)
        // expect(wrapper).toMatchSnapshot();
    });
});


describe.skip("Another describe test cases of Demo file (shallow vs mount)", () => {

    // it("snapshot 1", () => {
    //     let wrapper = mount(<Demo/>)
    //     // expect(wrapper).toMatchSnapshot();
    //     console.log(wrapper.debug());
    // });

    it("instance testing", async () => {
        let wrapper = shallow(<Demo />);

        // instance method returns the single-node wrapper's node's underlying class instance. It must be a single-ndoe wrapper.
        let anyFn = wrapper.instance().handleObject();
        console.log(anyFn);
        expect(anyFn).toEqual({ id: 4 });
    });

    it("load data function, take time for some output", async () => {
        let wrapper = shallow(<Demo />);
        return wrapper.instance().handleLoadData().then(data => {
            console.log(data)
        })
    });

    it("jest spyon componentdidmount", async () => {
        jest.spyOn(Demo.prototype, 'componentDidMount');
        shallow(<Demo />);

        expect(Demo.prototype.componentDidMount).toHaveBeenCalled();
        expect(Demo.prototype.componentDidMount).toHaveBeenCalledTimes(1);
    });

    // it("jest spyon function", async () => {
    //     let wrapper = shallow(<Demo />);
    //     let instance = wrapper.instance();
    //     jest.spyOn(instance,'handleAdd');
    //     wrapper.find('button').simulate('click');

    //     expect(instance.handleAdd).toHaveBeenCalled();
    //     expect(instance.handleAdd).toHaveBeenCalledWith(5,10);
    // });

    it("state check function", () => {
        let wrapper = shallow(<Demo />);
        console.log(wrapper.state());
    });

    it("props check function", () => {
        let wrapper = shallow(<Demo />);
        let inputProp = wrapper.find('input').props();
        console.log(inputProp);
        let matchProps = {
            type: 'text',
            value: 'Data'
        }
        expect(inputProp).toEqual(matchProps);
    })
});

// Use jest.mock() to mock the module containing the functions
jest.mock("../Context/Moc", () => {
    return {
        add: jest.fn(),
        subtract: jest.fn(),
        multiply: jest.fn()
    }
});


describe(" For Mock Function", () => {

    beforeAll(() => {  
        console.log('1, I am executing BEFORE ALL test cases')
    });
    afterAll(() => {
        console.log('2, I am executing AFTER ALL test cases')
    });
    beforeEach(() => {
        console.log('3, I am executing BEFORE EACH test cases')
    });
    afterEach(() => {
        console.log('4, I am executing AFTER EACH test cases')
    });

    // it(" API Data test", () => {                                        // Not Working
    //     const mockAdd = jest.fn();
    //     mockAdd.mockReturnValue(5);
    //     const result = math.add(3,2);
    //     expect(mockAdd).toHaveBeenCalledWith(3,2);
    //     expect(result).toEqual(5);
    //     // console.log('Mockss'); 
    // });

    it(" Adding ", () => {

        // Provide custom implementation for the add function
        math.add.mockImplementation(() => 40);
        console.log(math.add(9, 18));
    });

    it(" Subtract ", () => {

        // Provide custom implementation for the subtract function
        math.subtract.mockImplementation(() => 22);
        console.log(math.subtract(9, 21));
    });

    it(" Multiply ", () => {

        // Provide custom implementation for the multiply function
        math.multiply.mockImplementation(() => 48);
        console.log(math.multiply(2, 44));
    });
});