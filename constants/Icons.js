export default myIcons = (category) => {
    let constIcon;
    switch(category){
        case 'Leisure':
            constIcon = "fast-food-outline";
            break;
        case 'Education':
            constIcon = "school-outline";
            break;
        case 'Health':
            constIcon = "bandage-outline";
            break;
        case 'Groceries':
            constIcon = "bag-handle-outline";
            break;
        case 'Services & utilities':
            constIcon = "bulb-outline";
            break;
        case 'Income':
            constIcon = "cash-outline";
            break;
        case 'Shopping':
            constIcon = "cart-outline";
            break;
        case 'Transportation':
            constIcon = "car-sport-outline";
            break;
        case 'Food':
            constIcon = "restaurant-outline";
            break;
        case 'Housing':
            constIcon = "home-outline";
            break;
        case 'Pets':
            constIcon = "paw-outline";
            break;
        case 'Entertainment':
            constIcon = "film-outline";
            break;
        case 'Gifts':
            constIcon = "gift-outline";
            break;
        default:
            constIcon = "bar-chart-outline";
    }
    return constIcon;
}
