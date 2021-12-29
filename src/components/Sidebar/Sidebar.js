import {NestedNav} from "./NestedNav";
import {data} from '../../data/data'

export const Sidebar = () => (
    <>
        <NestedNav menus={data}
                   onLinkClick={(link) => {
                       console.log(link)
                   }}/>
    </>)


