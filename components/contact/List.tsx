import Contact from './Contact';
import Card from '../common/Card';
import User from '../../data/models/User';

function ListContacts(props: any) {
    const listContacts = [new User({
            firstName: 'Daniil', 
            lastName: 'Chashkov',
            email: 'chashkovdaniil@gmail.com'
        })].map((contact: User, index: number) =>
        <li key={index}>
            <Contact contact={contact}/>
        </li>
    );
    return (
        <ul className="list-contacts">{listContacts}</ul>
    );
}

export default ListContacts;