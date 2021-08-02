let initialState = {

    category: {
        "Interior": [
            {name: 'Mirrors', image: 'test', id: 0},
            {test: 'Doors', test2: 'test'},
            {test: 'Bumpers and components', test2: 'test'},
            {test: 'test', test2: 'test'},
            {test: 'test', test2: 'test'},
            {test: 'test', test2: 'test'},
            {test: 'test', test2: 'test'},
            {test: 'test', test2: 'test'},
            {test: 'test', test2: 'test'},],
        "Exterior": [
            'test'
        ],
        "Repair parts": [
            'test'
        ],
        "Body parts": [
            'test'
        ],
        "Oils & Fluids": [
            'test'
        ],
        "Wheels & Tires": [
            'test'
        ],
        "Lighting": [
        ],
        "Electronics": [
            'test'
        ],
        "Tools & Garage": [
            'test'
        ],
    }
}

export function product(state = initialState, action) {
    switch (action.type) {

        default:
            return state
    }
}