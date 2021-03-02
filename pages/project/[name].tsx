import Link from "next/link";
import Section from '../../components/common/Section';
import Project from "../../models/Project";
import { useRouter } from "next/router";

function ProjectView(props: any) {
    const router = useRouter();
    let project: Project = new Project({ name: router.query.name });

    return (
        <Section title={project.name}
            forwardLink={{ title: 'Go to site', href: 'https://site.com' }}
            childrenOnTop
        >
            <div className="center" style={{
                width: "100%",
                minHeight: "300px",
                backgroundColor: "blueviolet"
            }}></div>
            <div className="project-info">
                <span>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tempor et massa a molestie. Vivamus placerat urna sit amet justo commodo, et ornare augue imperdiet. Proin tincidunt diam sed malesuada ultricies. Ut vitae metus est. Pellentesque nec dictum metus. Mauris posuere tincidunt ligula, a sollicitudin sapien gravida at. Aenean aliquam feugiat aliquet. Duis aliquet imperdiet tellus vel fermentum. Etiam porttitor risus sed tristique ultrices. Aliquam tincidunt imperdiet nisi sed luctus. Vestibulum est elit, eleifend vitae finibus quis, euismod vitae purus. Donec interdum id ante cursus mattis.
                    <br />
                    Etiam iaculis tempus bibendum. Nullam pharetra, orci non sagittis finibus, erat dolor commodo velit, ut pretium tellus ligula vel erat. Pellentesque lectus sem, consectetur at urna pellentesque, dignissim vulputate mi. Proin sit amet ultricies leo. Phasellus in nisl sit amet est vulputate efficitur. Quisque pulvinar nulla et ipsum vestibulum blandit. Proin suscipit odio egestas pretium semper. Sed a laoreet lacus. Aliquam varius pretium purus. Nullam consequat placerat nisl eget laoreet. Nam ex urna, ultricies nec neque ut, mattis auctor sem. Ut pulvinar tristique sem tempor aliquet. Vivamus consectetur vestibulum tellus at feugiat.
                </span>
                <details>
                    <summary>Members</summary>
                    <ul><li>Chashkov Daniil</li></ul>
                </details>
            </div>
        </Section>
    );
}
export default ProjectView;