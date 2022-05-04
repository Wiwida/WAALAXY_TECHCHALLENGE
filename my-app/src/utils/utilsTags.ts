import { useAppSelector } from "../hooks/redux-hooks";

export const getRandomColor = (wantTransparancy : boolean = false) => {

    // Create random color for my tag :
    const randomBetween = (min=0, max=255) => min + Math.floor(Math.random() * (max - min + 1));
    const r = randomBetween(0, 255);
    const g = randomBetween(0, 255);
    const b = randomBetween(0, 255);

    // Background more transparent :
    return wantTransparancy ? `rgb(${r},${g},${b}, 0.25)` : `rgb(${r},${g},${b}, 0.8)`;
};

export const tagInLocalStorage: any = (tag: string) => { 

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const products = useAppSelector(state => state.products.products);

    // Filter all tags unduplicated :
    const allTags = () => {
        let emptyArray: any = [];
        products?.filter(el => emptyArray.push(...el.tags))
        return emptyArray.filter((ele : string , pos: string) => emptyArray.indexOf(ele) === pos);
    };

    // Initialize : 
    let objJson: any = {};
    
    // Values from localStorage (if there are) :
    const allValues: any = window.localStorage.getItem("objJson");
    
    // Check if allValues is fill :
    if (allValues === '{}') {

        for (const element of allTags()) {
            objJson[`${element}`] = { 
                'backgroundColor' : getRandomColor(true),
                'color': getRandomColor()
            };
        };
        
        window.localStorage.setItem("objJson", JSON.stringify(objJson));

        return tagInLocalStorage(tag);

    } else {
        // If it's fill :
        const newValues = JSON.parse(allValues);
        
        objJson = newValues;

        // If the tag not in localStorage :
        if (newValues[`${tag}`] === undefined) {

            newValues[`${tag}`] = { 'backgroundColor' : getRandomColor(true), 'color': getRandomColor()};
            window.localStorage.setItem("objJson", JSON.stringify(newValues));
            return newValues[`${tag}`];

        } else {

            return newValues[`${tag}`];
        };
    };
};

// Add method delete tag --> nextstep