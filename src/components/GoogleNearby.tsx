import React, { useEffect, useState } from "react"
import styled from "styled-components"
import { useGooglePlaces } from "../services"


const GoogleNearbyComponent = () => {

    const { placesState } = useGooglePlaces()


    return <div> this is google nearby component</div>
}

export { GoogleNearbyComponent }

const Container = styled.div`

`