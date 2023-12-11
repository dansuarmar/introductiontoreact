
//Desctructuring
export function CoreConcept({ title, description, image }) {
    return(
        <li>
            <img src={image} alt={title} />
            <h3>{title}</h3>
            <p>{description}</p>
        </li>
    );
}

//Without Destructuring.
// export function CoreConcept(props) {
//     return(
//         <li>
//             <img src={props.image} alt={props.title} />
//             <h3>{props.title}</h3>
//             <p>{props.description}</p>
//         </li>
//     );
// }