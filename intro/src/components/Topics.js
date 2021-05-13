import React from 'react'
import { Link, Route } from 'react-router-dom'

function Topic() {
    return <h3>TOPIC</h3>
}

function Topics() {
    return (
        <div>
            <h2>Topics</h2>

            <ul>
                <li>
                    <Link to=''>Rendering with React</Link>
                </li>
                <li>
                    <Link to=''>Components</Link>
                </li>
                <li>
                    <Link to=''>Props vs State</Link>
                </li>
            </ul>

            <hr />

            <Route path='/topics/rendering' component={Topic} />
            <Route path='/topics/components' component={Topic} />
            <Route path='/topics/props-v-state' component={Topic} />
        </div>
    )
}

export default Topics;