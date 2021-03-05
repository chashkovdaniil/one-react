import Member from "../../data/models/Member";

function Contact(props: any) {
    let contact: Member = props.contact;
    return (
        <div className="card">
            <div className="contact-photo"></div>
            <div className="contact-info">
                <h4>{contact.name}</h4>
                <address>{contact.email}</address>
            </div>
        </div>
    );
}
export default Contact;