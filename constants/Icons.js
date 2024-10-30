export default myIcons = (category) => {
    let categoryIcon;
    switch(category){
        case 'Leisure':
            categoryIcon = "fast-food-outline";
            break;
        case 'Education':
            categoryIcon = "school-outline";
            break;
        case 'Health':
            categoryIcon = "bandage-outline";
            break;
        case 'Groceries':
            categoryIcon = "bag-handle-outline";
            break;
        case 'Services & utilities':
            categoryIcon = "bulb-outline";
            break;
        case 'Income':
            categoryIcon = "cash-outline";
            break;
        case 'Shopping':
            categoryIcon = "cart-outline";
            break;
        case 'Transportation':
            categoryIcon = "car-sport-outline";
            break;
        case 'Food':
            categoryIcon = "restaurant-outline";
            break;
        case 'Housing':
            categoryIcon = "home-outline";
            break;
        case 'Pets':
            categoryIcon = "paw-outline";
            break;
        case 'Entertainment':
            categoryIcon = "film-outline";
            break;
        case 'Gifts':
            categoryIcon = "gift-outline";
            break;
        default:
            categoryIcon = "bar-chart-outline";
    }
    return myIcons;
}
