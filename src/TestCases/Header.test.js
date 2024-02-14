import Header from "../Component/Header";
import { shallow } from "enzyme";

describe("Header Page Test", () => {

    test("class check", () => {
        let wrapper = shallow(<Header />)
        // console.log(wrapper.debug());
        // expect(wrapper.exists('.headerBody')).toEqual(true)
        expect(wrapper.exists('.headerBody'))
    })

    test("state check", () => {
        let wrapper = shallow(<Header />)
        // expect(wrapper.state()).toEqual({anchorEl: null});
    })
});