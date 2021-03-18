import { useRouter } from 'next/router';
import classNames from 'classnames';
import BackButton from '../button/BackButton';
import ForwardButton from '../button/ForwardButton';

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
  let bodyClassNames = classNames({
    'section-body': true,
    'section-center': props.childrenCenter,
  });
  let backButton = router.pathname != "/" && <BackButton />;

  let forwardButton = props.forwardLink && (
    <ForwardButton href={props.forwardLink.href}>
      {props.forwardLink.title}
    </ForwardButton>
  );

  let nextSectionLink = props.nextSectionId && (
    <a href={"#" + props.nextSectionId} className="next-section">
      <i className="fas fa-angle-double-down"></i>
    </a>
  );
  let bgImage = props.bgImage && (
    <div
      className="section-bg"
      style={{ backgroundImage: "url(" + props.bgImage + ")" }}
    ></div>
  );
  let header = (backButton || props.title) && (
    <header>
      <div className="header__link">
        {backButton}
      </div>
      <h2>{props.title}</h2>
      <div className="header__link">
        {forwardButton}
      </div>
    </header>
  );

  return (
    <section id={props.id} className="section_top">
      {header}
      <div className={bodyClassNames}>
        {props.children}
      </div>
      {nextSectionLink && <footer>{nextSectionLink}</footer>}
      {bgImage}
    </section>
  );
}
export default Section;