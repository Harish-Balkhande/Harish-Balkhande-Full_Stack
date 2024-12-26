import React from 'react'
import ScoreBoard from '../sections/ScoreBoard'
import OverControlSection from '../sections/OverControlSection'
import OverListingSection from '../sections/OverListingSection'


export default function Admin() {
    return (
        <>
            <ScoreBoard />
            <OverControlSection />
            <OverListingSection />
        </>
    )
}
