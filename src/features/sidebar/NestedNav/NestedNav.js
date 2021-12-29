import React, {useReducer} from 'react'
import {Menu} from './Menu'
import {initialStateMenu, reducerMenu} from "../../../state/sidebar/reducerMenu";

export const NestedNav = ({menus, onLinkClick}) => {
    const [state, dispatch] = useReducer(reducerMenu, initialStateMenu)
    return (
        <div>
             <div>active: {JSON.stringify(state.active, null, 2)}</div>
      <div>prev: {JSON.stringify(state.previous, null, 2)}</div>
            <div className='menu-header' style={{display: 'flex'}}>
                {state.previous.length > 0 && (
                    <button className='back' onClick={() => dispatch({type: 'back'})}>
                        Back
                    </button>
                )}
                <div className='menu-title'>{state.active.title}</div>
            </div>
            <div
                className='menu-container'
                style={{position: 'relative', height: 600, overflow: 'hidden'}}
            >
                <Menu menu={menus} onLinkClick={onLinkClick} state={state} dispatch={dispatch}/>
            </div>
        </div>
    )
}