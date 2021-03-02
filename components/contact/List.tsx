import Contact from './Contact';
import Card from '../common/Card';
import Member from '../../models/Member';

function ListContacts(props: any) {
    const listContacts = [new Member({
            firstName: 'Daniil', 
            lastName: 'Chashkov',
            email: 'chashkovdaniil@gmail.com'
        })].map((contact: Member, index: number) =>
        <li key={index}>
            <Contact contact={contact}/>
        </li>
    );
    return (
        <ul className="list-contacts">{listContacts}</ul>
    );
}

export default ListContacts;