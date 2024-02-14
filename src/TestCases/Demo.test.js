import Demo from "../Component/Demo";
import { shallow } from "enzyme";

describe("Demo Page Test", () => {

    test("demo file's content check", () => {
        let wrapper = shallow(<Demo />)
        expect(wrapper.contains(<div className="demo">Demo Body</div>)).toEqual(true);
    })
})