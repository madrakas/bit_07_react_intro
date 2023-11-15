import { ListItem } from "./ListItem";
export function ListWithMap() {
    const dictionary = ['Labas', 'rytas', 'Lietuva'];
    return (
        <ul>
            {
                dictionary.map((word, idx) => <ListItem key={idx + '_' + word} text={word} /> )
            }
        </ul>
    );
}