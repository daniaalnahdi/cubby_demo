import React  from 'react'

const FeaturesListView = ({selectFeature}) => {

    return (
        <ul>
            <li onClick={() => selectFeature(1)}>Weekly Tasks</li>
            <li onClick={() => selectFeature(2)}>Grading</li>
            <li onClick={() => selectFeature(3)}>Video Call</li>
        </ul>
    )
}

export default FeaturesListView
