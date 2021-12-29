import {motion} from 'framer-motion'


export const Menu = ({menu, onLinkClick, state, dispatch}) => {
    // base case
    if (!menu) {
        return null
    }

    return (
        <>
            <motion.ul
                className='menu'
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    bottom: 0,
                    listStyle: 'none',
                    margin: 0,
                    padding: 0
                }}
                transition={{type: 'tween'}}
                animate={
                    menu.id === state.active.id
                        ? 'active'
                        : state.previous.find((m) => m.id === menu.id)
                            ? 'previous'
                            : 'inactive'
                }
                initial={
                    menu.id === state.previousState.active.id
                        ? 'active'
                        : state.previousState.previous.find((m) => m.id === menu.id)
                            ? 'previous'
                            : 'inactive'
                }
                variants={{
                    active: {x: 0},
                    inactive: {x: '100%'},
                    previous: {x: '-100%'}
                }}
            >
                {menu.items.map(({text, link, menu: subMenu}, i) => (
                    <li className='menu-item' key={i}>
                        {!subMenu ? (
                            <a className='menu-item-link' onClick={() => onLinkClick(link)}>
                                {text}
                            </a>
                        ) : (
                            <button
                                className='menu-item-link menu-item-button'
                                onClick={() =>
                                    dispatch({
                                        type: 'forward',
                                        payload: {title: subMenu.title, id: subMenu.id}
                                    })
                                }
                            >
                                {text}
                            </button>
                        )}
                    </li>
                ))}
            </motion.ul>
            <>
                {menu.items.map(({menu}, i) => (
                    <Menu key={i} menu={menu} onLinkClick={onLinkClick} state={state} dispatch={dispatch}/>
                ))}
            </>
        </>
    )
}
