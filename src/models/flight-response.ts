export interface FlightResponse {
    search_id: string
    data: Daum[]
    currency: string
    fx_rate: number
}

export interface Daum {
    id: string
    nightsInDest: any
    duration: Duration
    flyFrom: string
    cityFrom: string
    cityCodeFrom: string
    countryFrom: CountryFrom
    flyTo: string
    cityTo: string
    cityCodeTo: string
    countryTo: CountryTo
    distance: number
    airlines: string[]
    pnr_count: number
    has_airport_change: boolean
    technical_stops: number
    throw_away_ticketing: boolean
    hidden_city_ticketing: boolean
    price: number
    bags_price: BagsPrice
    baglimit: Baglimit
    availability: Availability
    facilitated_booking_available: boolean
    conversion: Conversion
    quality: number
    booking_token: string
    fare: Fare
    price_dropdown: PriceDropdown
    virtual_interlining: boolean
    route: Route[]
    local_arrival: string
    utc_arrival: string
    local_departure: string
    utc_departure: string
}

export interface Duration {
    departure: number
    return: number
    total: number
}

export interface CountryFrom {
    code: string
    name: string
}

export interface CountryTo {
    code: string
    name: string
}

export interface BagsPrice {
    "1": number
}

export interface Baglimit {
    hand_width: number
    hand_height: number
    hand_length: number
    hand_weight: number
    hold_width: number
    hold_height: number
    hold_length: number
    hold_dimensions_sum: number
    hold_weight: number
}

export interface Availability {
    seats: number
}

export interface Conversion {
    EUR: number
}

export interface Fare {
    adults: number
    children: number
    infants: number
}

export interface PriceDropdown {
    base_fare: number
    fees: number
}

export interface Route {
    fare_basis: string
    fare_category: string
    fare_classes: string
    fare_family: string
    return: number
    bags_recheck_required: boolean
    vi_connection: boolean
    guarantee: boolean
    id: string
    combination_id: string
    cityTo: string
    cityFrom: string
    cityCodeFrom: string
    cityCodeTo: string
    flyTo: string
    flyFrom: string
    airline: string
    operating_carrier: string
    equipment?: string
    flight_no: number
    vehicle_type: string
    operating_flight_no: string
    local_arrival: string
    utc_arrival: string
    local_departure: string
    utc_departure: string
}
