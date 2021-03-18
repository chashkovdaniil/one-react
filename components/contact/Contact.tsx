import User from "../../data/models/User";

function Contact(props: any) {
    let contact: User = props.contact;
    return (
        <div className="card">
            <div className="contact-photo"></div>
            <div className="contact-info">
                <h4>{contact.name}</h4>
                <address>
                    <a href={"mailto:" + contact.email}>
                        {contact.email}
                    </a>
                </address>
            </div>
        </div>
    );
}
export default Contact;