import {NestedNav} from "../NestedNav";
import {data} from '../../../data/data'
import {SidebarDrawer} from "../SidebarDrawer";

export const Sidebar = ({stateDrawer, toggleDrawer}) => (
    <SidebarDrawer stateDrawer={stateDrawer} toggleDrawer={toggleDrawer}>
        <NestedNav
            menus={data}
            onLinkClick={(link) => {
                console.log(link)
            }}/>
    </SidebarDrawer>)


