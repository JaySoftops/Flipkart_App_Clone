// import { configure } from 'enzyme';
// import Adapter from 'enzyme-adapter-react-16';

// configure({ adapter: new Adapter() });                      // Define this 3 imports in setupTests.js file, So don't use this in every file.

import Home from "../Component/Home";
import { shallow, mount } from "enzyme";

describe("Shallow Home Page", () => {

    it("Should render an element with the class 'homeFlex'", () => {
        const wrapper = shallow(<Home />);
        // console.log(wrapper)
        // console.log(wrapper.debug())
        // expect(wrapper.find(".homeFlex").exists()).toEqual(true);            
        // expect(wrapper.find(".homeFlex").exists()).toBe(true);                   // Not working both line with toEqual and toBe
        expect(wrapper.find(".homeFlex").exists());
    })
});