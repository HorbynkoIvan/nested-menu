import {NestedNav} from "../NestedNav";
import {data} from '../../../data/data'
import {SidebarDrawer,
    SidebarHeader,
    SidebarHeaderTop,
    SidebarHeaderBottom,
    SidebarFooter,
    SidebarFooterTop,
    SidebarFooterBottom,
    SidebarBodyMenu,} from "../../sidebar";

export const Sidebar = ({stateDrawer, toggleDrawer}) => (
    <SidebarDrawer stateDrawer={stateDrawer} toggleDrawer={toggleDrawer}>
        <SidebarHeader>
            <SidebarHeaderTop toggleDrawer={toggleDrawer} />
            <SidebarHeaderBottom />
        </SidebarHeader>

        {/*<SidebarBodyMenu />*/}

        <SidebarFooter>
            <SidebarFooterTop />
            <SidebarFooterBottom />
        </SidebarFooter>
        {/*<NestedNav*/}
        {/*    menus={data}*/}
        {/*    onLinkClick={(link) => {*/}
        {/*        console.log(link)*/}
        {/*    }}/>*/}
    </SidebarDrawer>)


