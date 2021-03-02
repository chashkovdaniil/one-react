import { useRouter } from 'next/router';
import classNames from 'classnames';
import BackButton from './BackButton';
import ForwardButton from './ForwardButton';

/* Section */
/* 
    String: title, id, nextSectionId, bgImage
    bool: childrenCenter, childrenOnTop
    obj: forwardLink
    array: navLinks,
    forwardLink: object {href, title}
*/
function Section(props: any) {
    const router = useRouter();

    let sectionClassName = classNames({
        'column': props.childrenNotInColumn ? false : true,
        'top': props.childrenOnTop,
    });
    let bodyClassNames = classNames({
        'section-body': true,
        'section-center': props.childrenCenter,
    });
    let backButton = router.pathname != "/" &&
        <BackButton />;

    let forwardButton = props.forwardLink &&
        <ForwardButton href={props.forwardLink.href}>
            {props.forwardLink.title}
        </ForwardButton>;

    let nextSectionLink = props.nextSectionId &&
        <a href={"#" + props.nextSectionId} className="next-section">
            <i className="fas fa-angle-double-down"></i>
        </a>;
    let bgImage = props.bgImage &&
        <div
            className="section-bg"
            style={{ backgroundImage: "url(" + props.bgImage + ")" }}
        ></div>;

    return (
        <section id={props.id} className={sectionClassName}>
            { (backButton || props.title) &&
                <header>
                    <h2>{props.title}</h2>
                    <div className="h-left-menu">
                        {backButton}
                    </div>
                    <div className="h-right-menu">
                        {forwardButton}
                    </div>
                </header>
            }
            <div className={bodyClassNames}>
                {props.children}
            </div>
            <footer>{nextSectionLink}</footer>
            {bgImage}
        </section>
    );
}
export default Section;